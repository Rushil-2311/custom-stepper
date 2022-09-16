export interface PersonalDetails {
  details: PersonalInfo;
  errors: PersonalError;
}

export interface PersonalInfo {
  name: string;
  email: string;
  mobileNumber: null | number | string;
  dob: string;
  gender: null;
}

export interface PersonalError {
  name: null | string;
  email: null | string;
  mobileNumber: null | string;
  dob: null | string;
  gender: null | string;
}

export interface Education {
  details: EducationInfo;
  errors: EducationError;
}

export interface EducationInfo {
  sscResult: number | null;
  hscResult: number | null;
  univercityName: string;
  passingYear: number | null;
  cgpa: number | null;
}

export interface EducationError {
  sscResult: null | string;
  hscResult: null | string;
  univercityName: null | string;
  passingYear: null | string;
  cgpa: null | string;
}
