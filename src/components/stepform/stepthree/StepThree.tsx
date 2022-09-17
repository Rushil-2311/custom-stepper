import { useContext } from "react";
import AppContext from "../../../context/Contex";
import { setErrorsToForm, setValueToForm } from "../../../helper/helperMethod";
import "../../../styles.css";
import AppInput from "../../common/AppInput";

const StepThree = () => {
  const myContext: any = useContext(AppContext);
  const updateContext = myContext.userDetails;
  const EmaptyAllProfessionalErrors = (
    updateContext: any,
    updateStateName: string
  ) => {
    updateContext[updateStateName]((prev: any) => {
      return {
        details: {
          ...prev.details,
        },
        errors: {
          name: null,
          email: null,
          mobileNumber: null,
          dob: null,
          gender: null,
        },
      };
    });
  };
  const checkErrors = () => {
    let status = false;
    if (updateContext.professional.details.jobTitle === null) {
      setErrorsToForm(
        "name",
        "Please enter your jobName",
        updateContext,
        "setProfessional"
      );
      status = true;
    }
    if (updateContext.professional.details.experiance === null) {
      setErrorsToForm(
        "experiance",
        "Please enter your experiance in years",
        updateContext,
        "setProfessional"
      );
      status = true;
    }
    return status;
  };
  const next = () => {
    EmaptyAllProfessionalErrors(updateContext, "setProfessional");
    if (checkErrors()) {
      return;
    }
    let objArray = Object.keys(updateContext.professional.errors);
    for (let i = 0; i < objArray.length; i++) {
      if (updateContext.professional.errors[objArray[i]] !== null) {
        checkErrors();
        return;
      }
    }
    return updateContext.setStep(updateContext.currentPage + 1);
  };

  return (
    <div className="contain">
      <p>Enter Your Professional Details</p>
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
          type="text"
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
        <div className="buttonContainer">
          <button
            type="button"
            className="formSubmit"
            onClick={() => {
              updateContext.setStep(updateContext.currentPage - 1);
            }}
          >
            Back
          </button>
          <button type="button" className="formSubmit" onClick={next}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
