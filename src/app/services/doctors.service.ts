import { Injectable } from '@angular/core';
import { Doctor, DoctorSpeciality, IDropdownListInfo } from '../interface/doctors';
import { Dates } from '../interface/date';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  doctors: Doctor[] = [
    {
      name: 'ყველა თავისუფალი',
    },
    {
      img: '../assets/img/user1.jpeg',
      name: 'ნინო ოქროპირიძე',
      field: 'პირადი ექიმი',
      icon: '../assets/img/office.svg',
      address: '16 ალექსანდრე ყაზბეგის გამზირი',
      clinic: 'მედალფა - შპს აკადემიკოს ვახტანგ ბოჭორიშვილის კლინიკა',
      schedule: [
        '10:00 - 10:20',
        '10:20 - 10:40',
        '10:40 - 11:00',
        '11:00 - 11:20',
        '11:20 - 11:40',
        '11:40 - 12:00',
        '12:00 - 12:20',
        '12:20 - 12:40',
        '12:40 - 13:00',
      ],
    },
    {
      img: '../assets/img/user2.jpeg',
      name: 'ეკა ბალანჩივაძე',
      field: 'პირადი ექიმი',
      icon: '../assets/img/office.svg',
      address: '16 ალექსანდრე ყაზბეგის გამზირი',
      clinic: 'მედალფა - შპს აკადემიკოს ვახტანგ ბოჭორიშვილის კლინიკა',
      schedule: [
        '10:00 - 10:20',
        '10:20 - 10:40',
        '11:20 - 11:40',
        '11:40 - 12:00',
        '12:00 - 12:20',
        '12:40 - 13:00',
      ],
    },
    {
      img: '../assets/img/user3.jpeg',
      name: 'ქეთი ჯავახიშვილი',
      field: 'პირადი ექიმი',
      icon: '../assets/img/office.svg',
      address: '16 ალექსანდრე ყაზბეგის გამზირი',
      clinic: 'მედალფა - შპს აკადემიკოს ვახტანგ ბოჭორიშვილის კლინიკა',
      schedule: ['10:00 - 10:20', '12:20 - 12:40', '12:40 - 13:00'],
    },
    {
      img: '../assets/img/user4.jpeg',
      name: 'ალექსანდრე მანია',
      field: 'ოტორინოლარინგოლოგი',
      icon: '../assets/img/office.svg',
      address: '16 ალექსანდრე ყაზბეგის გამზირი',
      clinic: 'მედალფა - შპს აკადემიკოს ვახტანგ ბოჭორიშვილის კლინიკა',
      schedule: [
        '11:20 - 11:40',
        '11:40 - 12:00',
        '12:00 - 12:20',
        '12:20 - 12:40',
        '12:40 - 13:00',
      ],
    },
    {
      img: '../assets/img/user5.jpeg',
      name: 'გიორგი ანდღულაძე',
      field: 'ოტორინოლარინგოლოგი',
      icon: '../assets/img/office.svg',
      address: '16 ალექსანდრე ყაზბეგის გამზირი',
      clinic: 'მედალფა - შპს აკადემიკოს ვახტანგ ბოჭორიშვილის კლინიკა',
      schedule: [
        '11:40 - 12:00',
        '12:00 - 12:20',
        '12:20 - 12:40',
        '12:40 - 13:00',
      ],
    },
    {
      img: '../assets/img/user6.jpeg',
      name: 'ზურაბ ამირეჯიბი',
      field: 'ოტორინოლარინგოლოგი',
      icon: '../assets/img/office.svg',
      address: '16 ალექსანდრე ყაზბეგის გამზირი',
      clinic: 'მედალფა - შპს აკადემიკოს ვახტანგ ბოჭორიშვილის კლინიკა',
      schedule: ['12:40 - 13:00'],
    },
    {
      img: '../assets/img/user7.jpeg',
      name: 'თეონა ჟორდანია',
      field: 'კვლევის ექიმი',
      icon: '../assets/img/office.svg',
      address: '16 ალექსანდრე ყაზბეგის გამზირი',
      clinic: 'მედალფა - შპს აკადემიკოს ვახტანგ ბოჭორიშვილის კლინიკა',
      schedule: [
        '10:00 - 10:20',
        '11:40 - 12:00',
        '12:00 - 12:20',
        '12:20 - 12:40',
        '12:40 - 13:00',
      ],
    },
    {
      img: '../assets/img/user8.jpeg',
      name: 'მერცია ქუთათელაძე',
      field: 'კვლევის ექიმი',
      icon: '../assets/img/office.svg',
      address: '16 ალექსანდრე ყაზბეგის გამზირი',
      clinic: 'მედალფა - შპს აკადემიკოს ვახტანგ ბოჭორიშვილის კლინიკა',
      schedule: ['12:00 - 12:20', '12:20 - 12:40', '12:40 - 13:00'],
    },
    {
      img: '../assets/img/user9.jpeg',
      name: 'სონია თავართქილაძე',
      field: 'კვლევის ექიმი',
      icon: '../assets/img/office.svg',
      address: '16 ალექსანდრე ყაზბეგის გამზირი',
      clinic: 'მედალფა - შპს აკადემიკოს ვახტანგ ბოჭორიშვილის კლინიკა',
      schedule: ['10:00 - 10:20', '10:20 - 10:40'],
    },
  ].map((res) => ({
    ...res,
    schedule: res.schedule?.map((time) => ({ time, isActive: false })),
  }));

  doctorDropdownList: IDropdownListInfo[] = [
    {
      type: 'Private_Doctor',
      name: 'ნინო ოქროპირიძე',
    },
    {
      type: 'Private_Doctor',
      name: 'ეკა ბალანჩივაძე',
    },
    {
      type: 'Private_Doctor',
      name: 'ქეთი ჯავახიშვილი',
    },
    {
      type: 'Otoriloralingolog',
      name: 'ალექსანდრე მანია',
    },
    {
      type: 'Otoriloralingolog',
      name: 'გიორგი ანდღულაძე',
    },
    {
      type: 'Otoriloralingolog',
      name: 'ზურაბ ამირეჯიბი',
    },
    {
      type: 'Research_Doctor',
      name: 'თეონა ჟორდანია',
    },
    {
      type: 'Research_Doctor',
      name: 'მერცია ქუთათელაძე',
    },
    {
      type: 'Research_Doctor',
      name: 'სონია თავართქილაძე',
    },
  ];

  specialList: IDropdownListInfo[] = [
    {
      type: 'Private_Doctor',
      name: 'პირადი ექიმი',
    },
    {
      type: 'Otoriloralingolog',
      name: 'ოტორინოლარინგოლოგი',
    },
    {
      type: 'Research_Doctor',
      name: 'კვლევის ექიმი',
    },
  ];

  dates: Dates[] = [
    { day: 'ოთხ', date: '23 ივლ' },
    { day: 'ხუთ', date: '24 ივლ' },
    { day: 'პარ', date: '25 ივლ' },
    { day: 'შაბ', date: '26 ივლ' },
    { day: 'კვი', date: '27 ივლ' },
    { day: 'ორშ', date: '28 ივლ' },
    { day: 'სამ', date: '29 ივლ' },
    { day: 'ოთხ', date: '30 ივლ' },
    { day: 'ხუთ', date: '31 ივლ' },
    { day: 'პარ', date: '1 აგვ' },
    { day: 'შაბ', date: '2 აგვ' },
    { day: 'კვი', date: '3 აგვ' },
    { day: 'ორშ', date: '4 აგვ' },
    { day: 'სამ', date: '5 აგვ' },
    { day: 'ოთხ', date: '6 აგვ' },
    { day: 'ხუთ', date: '7 აგვ' },
    { day: 'პარ', date: '8 აგვ' },
    { day: 'შაბ', date: '9 აგვ' },
    { day: 'კვი', date: '10 აგვ' },
    { day: 'ორშ', date: '11 აგვ' },
    { day: 'სამ', date: '12 აგვ' },
    { day: 'ოთხ', date: '13 აგვ' },
    { day: 'ხუთ', date: '14 აგვ' },
    { day: 'პარ', date: '15 აგვ' },
    { day: 'შაბ', date: '16 აგვ' },
    { day: 'კვი', date: '17 აგვ' },
    { day: 'ორშ', date: '18 აგვ' },
    { day: 'სამ', date: '19 აგვ' },
    { day: 'ოთხ', date: '20 აგვ' },
    { day: 'ხუთ', date: '21 აგვ' },
    { day: 'პარ', date: '22 აგვ' },
    { day: 'შაბ', date: '23 აგვ' },
    { day: 'კვი', date: '24 აგვ' },
    { day: 'ორშ', date: '25 აგვ' },
    { day: 'სამ', date: '26 აგვ' },
  ];

  constructor() {}

  getDoctorsBySpeciality(speciality: DoctorSpeciality): Doctor[] {
    return this.doctors.filter((res) => res.field === speciality);
  }

}
