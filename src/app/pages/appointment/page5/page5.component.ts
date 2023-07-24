import { Component } from '@angular/core';
import { Dates } from 'src/app/interface/date';
import { Doctor, DoctorSpeciality, IChooseDateList, IDropdownListInfo } from 'src/app/interface/doctors';
import { DoctorsService } from 'src/app/services/doctors.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss']
})
export class Page5Component {
  count = 0;
  selectedClinic!: string;
  selectedDoc!: IDropdownListInfo;
  selectedSpecial!: IDropdownListInfo;
  selectedDescription!: string;
  doctors!: Doctor[];
  privateDoctors!: Doctor[];
  otoriloralingologs!: Doctor[];
  researchDoctors!: Doctor[];
  activeDoctor: DoctorSpeciality = DoctorSpeciality.All_Doctor;
  doctorEnum = DoctorSpeciality;
  firstSeeAll: boolean = false;
  secondSeeAll: boolean = false;
  specialList!: IDropdownListInfo[];
  doctorDropdownList!: IDropdownListInfo[];
  dates!: Dates[];
  newSpecialist: Doctor[] = [];
  chooseDateList: IChooseDateList[] = [];
  isAllResearchDocClicked!: boolean;
  isAllPrivateDocClicked!: boolean;
  isAllOtorinolaringologDocClicked!: boolean;

  constructor(private doctorsService: DoctorsService) {}

  ngOnInit(): void {
    this.initDoctors();
  }

  initDoctors() {
    this.doctors = this.doctorsService.doctors;
    this.specialList = this.doctorsService.specialList;
    (this.dates = this.doctorsService.dates),
      (this.doctorDropdownList = this.doctorsService.doctorDropdownList);
    this.privateDoctors = this.doctorsService.getDoctorsBySpeciality(
      DoctorSpeciality.Private_Doctor
    );
    this.otoriloralingologs = this.doctorsService.getDoctorsBySpeciality(
      DoctorSpeciality.Otoriloralingolog
    );
    this.researchDoctors = this.doctorsService.getDoctorsBySpeciality(
      DoctorSpeciality.Research_Doctor
    );
  }

  createNewList(event: IDropdownListInfo) {
    this.initActiveDoctorList(event?.type);
    this.doctors.forEach((doctor: any) =>
      doctor.schedule?.forEach((doctor: any) => (doctor.isActive = false))
    );
    this.newSpecialist = event
      ? this.doctors.filter((doctor) => doctor.name === event?.name)
      : this.doctors.slice(1);

    this.specialList = event
      ? this.doctorsService.specialList.filter((res) => res.type === event.type)
      : this.doctorsService.specialList;

    if (this.selectedSpecial && !event) {
      console.log(this.selectedClinic);
      this.activeDoctor =
        DoctorSpeciality[
          this.selectedSpecial.type as keyof typeof DoctorSpeciality
        ];
      this.initDoctors();
    } else {
      this.checkArrayList(this.newSpecialist);
    }
  }

  onDoctorsChange(event: IDropdownListInfo) {
    this.doctorDropdownList = event
      ? this.doctorsService.doctorDropdownList.filter(
          (res) => res.type === event.type
        )
      : this.doctorsService.doctorDropdownList;

    if (this.selectedDoc) {
      return;
    }
    this.initActiveDoctorList(event?.type);
  }

  chooseDate(event: Doctor, time: string, sheduleIndex: number) {
    const newObj = { doctor: event, time: time, sheduleIndex };
    this.chooseDateList = [...this.chooseDateList, newObj];
    if (event.schedule?.length) {
      event.schedule[sheduleIndex].isActive = true;
    }
  }

  removeDate(index: number, doctor: Doctor, time: string) {
    this.chooseDateList.splice(index, 1);
    if (doctor.schedule?.length) {
      doctor.schedule = doctor.schedule.map((x) => {
        if (x.time === time) {
          return { ...x, isActive: false };
        }
        return x;
      });
    }
  }

  search(value: string) {
    let filter = value.toLowerCase();
    return this.doctors.filter((option) =>
      option.name.toLowerCase().startsWith(filter)
    );
  }

  initActiveDoctorList(event: string | undefined) {
    this.activeDoctor = event
      ? DoctorSpeciality[event as keyof typeof DoctorSpeciality]
      : DoctorSpeciality.All_Doctor;
  }

  checkArrayList(array: Doctor[]) {
    if (this.activeDoctor === DoctorSpeciality.Otoriloralingolog) {
      this.otoriloralingologs = array;
    } else if (this.activeDoctor === DoctorSpeciality.Private_Doctor) {
      this.privateDoctors = array;
    } else if (this.activeDoctor === DoctorSpeciality.Research_Doctor) {
      this.researchDoctors = array;
    } else {
      this.initDoctors();
    }
  }
}
