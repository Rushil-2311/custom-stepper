import React, { useReducer, useState } from "react";
import DownloadPdf from "../components/downloadpdf/DownloadPdf";
import ProgressBar from "../components/ProgressBar";
import StepOne from "../components/stepform/stepone/StepOne";
import StepThree from "../components/stepform/stepthree/StepThree";
import StepTwo from "../components/stepform/steptwo/StepTwo";
import AppContext from "../context/Contex";
import "../styles.css";
import { Education, PersonalDetails, Professional } from "../types/types";

const StepForm = () => {
  const [step, setStep] = useState(0);
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
    details: {
      name: "",
      email: "",
      mobileNumber: null,
      dob: "",
      gender: null,
    },
    errors: {
      name: null,
      email: null,
      mobileNumber: null,
      dob: null,
      gender: null,
    },
  });
  const [education, setEducation] = useState<Education>({
    details: {
      sscResult: null,
      hscResult: null,
      univercityName: "",
      passingYear: null,
      cgpa: null,
    },
    errors: {
      sscResult: null,
      hscResult: null,
      univercityName: null,
      passingYear: null,
      cgpa: null,
    },
  });
  const [professional, setProfessional] = useState<Professional>({
    details: {
      jobTitle: "",
      jobName: "",
      experiance: null,
      skills: "",
    },
    errors: {
      jobTitle: null,
      jobName: null,
      experiance: null,
      skills: null,
    },
  });
  const userDetails = {
    currentPage: step,
    personalDetails,
    setPersonalDetails,
    education,
    setStep,
    setEducation,
    professional,
    setProfessional,
  };
  return (
    <AppContext.Provider value={{ userDetails }}>
      <div className="main">
        <div className="body">
          <div className="wrapper">
            <ProgressBar />
            {step === 0 && <StepOne />}
            {step === 1 && <StepTwo />}
            {step === 2 && <StepThree />}
            {step === 3 && <DownloadPdf />}
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default StepForm;
