import { useContext } from "react";
import AppContext from "../../../context/Contex";
import {
  EmaptyAllErrors,
  setErrorsToForm,
  setValueToForm,
} from "../../../helper/helperMethod";
import "../../../styles.css";
import AppInput from "../../common/AppInput";

const StepThree = () => {
  const myContext: any = useContext(AppContext);
  const updateContext = myContext.userDetails;

  const next = () => {
    if (updateContext.professional.details.jobTitle === null) {
      setErrorsToForm(
        "name",
        "Please enter your jobName",
        updateContext,
        "setProfessional"
      );
    }
    if (updateContext.professional.details.experiance === null) {
      setErrorsToForm(
        "experiance",
        "Please enter your experiance in years",
        updateContext,
        "setProfessional"
      );
    }
    updateContext.setStep(updateContext.currentPage + 1);
  };

  return (
    <div className="contain">
      <p>Enter Your Details</p>
      <form className="form">
        <AppInput
          type="text"
          errorText={updateContext.professional.errors.jobTitle}
          value={updateContext.professional.details.jobTitle}
          placeholder="jobTitle"
          onChange={(e: any) =>
            setValueToForm(
              "jobTitle",
              e.target.value,
              updateContext,
              "setProfessional"
            )
          }
          required
        />
        <AppInput
          type="text"
          errorText={updateContext.professional.errors.jobName}
          value={updateContext.professional.details.jobName}
          placeholder="jobName"
          onChange={(e: any) =>
            setValueToForm(
              "jobName",
              e.target.value,
              updateContext,
              "setProfessional"
            )
          }
          required
        />
        <AppInput
          type="text"
          errorText={updateContext.professional.errors.experiance}
          value={updateContext.professional.details.experiance}
          placeholder="total experiance"
          onChange={(e: any) =>
            setValueToForm(
              "experiance",
              e.target.value,
              updateContext,
              "setProfessional"
            )
          }
          required
        />
        <AppInput
          type="date"
          errorText={updateContext.professional.errors.skills}
          value={updateContext.professional.details.skills}
          placeholder="skills"
          onChange={(e: any) =>
            setValueToForm(
              "skills",
              e.target.value,
              updateContext,
              "setProfessional"
            )
          }
          required
        />
        <button type="button" className="formSubmit" onClick={next}>
          Next
        </button>
      </form>
    </div>
  );
};

export default StepThree;
