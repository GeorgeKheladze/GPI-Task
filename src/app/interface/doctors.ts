export interface Doctor {
  img?: string;
  name: string;
  field?: string;
  icon?: string;
  clinic?: string;
  address?: string;
  schedule?: { time: string; isActive: boolean }[];
}

export enum DoctorSpeciality {
  All_Doctor = 'ყველა ექიმი',
  Private_Doctor = 'პირადი ექიმი',
  Otoriloralingolog = 'ოტორინოლარინგოლოგი',
  Research_Doctor = 'კვლევის ექიმი',
}

export interface IDropdownListInfo {
  type: string;
  name: string;
}

export interface IChooseDateList {
  doctor: Doctor;
  time: string;
  sheduleIndex: number;
}


