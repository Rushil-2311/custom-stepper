import { useContext } from "react";
import AppContext from "../../../context/Contex";
import {
  EmaptyAllErrors,
  setErrorsToForm,
  setValueToForm,
} from "../../../helper/helperMethod";
import "../../../styles.css";
import AppInput from "../../common/AppInput";

const StepTwo = () => {
  const myContext: any = useContext(AppContext);
  const updateContext = myContext.userDetails;

  const next = () => {
    console.log(updateContext.education.details, "hey name");
    if (updateContext.education.details.univercityName === "") {
      setErrorsToForm(
        "univercityName",
        "Please enter your univercity name",
        updateContext,
        "setEducation"
      );
    }
    if (updateContext.education.details.passingYear === null) {
      setErrorsToForm(
        "passingYear",
        "Please enter your passing year",
        updateContext,
        "setEducation"
      );
    }
    if (
      updateContext.education.details.cgpa === null ||
      updateContext.education.details.cgpa > 10
    ) {
      setErrorsToForm(
        "cgpa",
        "cgpa must be less than 10",
        updateContext,
        "setEducation"
      );
    } else updateContext.setStep(updateContext.currentPage + 1);
  };

  return (
    <div className="contain">
      <p>Enter Your Details</p>
      <form className="form">
        <AppInput
          type="number"
          errorText={updateContext.education.errors.sscResult}
          value={updateContext.education.details.sscResult}
          placeholder="provide us your ssc percentage"
          onChange={(e: any) =>
            setValueToForm(
              "sscResult",
              e.target.value,
              updateContext,
              "setEducation"
            )
          }
          required
        />
        <AppInput
          type="number"
          errorText={updateContext.education.errors.hscResult}
          value={updateContext.education.details.hscResult}
          placeholder="provide us your hsc percentage"
          onChange={(e: any) =>
            setValueToForm(
              "hscResult",
              e.target.value,
              updateContext,
              "setEducation"
            )
          }
          required
        />
        <AppInput
          type="text"
          errorText={updateContext.education.errors.univercityName}
          value={updateContext.education.details.univercityName}
          placeholder="Enter your univercity name"
          onChange={(e: any) =>
            setValueToForm(
              "univercityName",
              e.target.value,
              updateContext,
              "setEducation"
            )
          }
          required
        />
        <AppInput
          type="number"
          errorText={updateContext.education.errors.passingYear}
          value={updateContext.education.details.passingYear}
          placeholder="Provide us your passingYear"
          onChange={(e: any) =>
            setValueToForm(
              "passingYear",
              e.target.value,
              updateContext,
              "setEducation"
            )
          }
          required
        />
        <AppInput
          type="number"
          errorText={updateContext.education.errors.cgpa}
          value={updateContext.education.details.cgpa}
          placeholder="Provide us your cgpa"
          onChange={(e: any) =>
            setValueToForm(
              "passingYear",
              e.target.value,
              updateContext,
              "setEducation"
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

export default StepTwo;
