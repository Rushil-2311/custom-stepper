import { useContext } from "react";
import AppContext from "../../../context/Contex";
import { setErrorsToForm, setValueToForm } from "../../../helper/helperMethod";
import "../../../styles.css";
import AppInput from "../../common/AppInput";

const StepOne = () => {
  const myContext: any = useContext(AppContext);
  const updateContext = myContext.userDetails;
  const EmaptyAllPersonalErrors = (
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
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    let status = false;
    if (updateContext.personalDetails.details.name === "") {
      setErrorsToForm(
        "name",
        "Please enter your Name",
        updateContext,
        "setPersonalDetails"
      );
      status = true;
    }
    if (
      updateContext.personalDetails.details.email === "" ||
      regex.test(updateContext.personalDetails.details.email) !== true
    ) {
      setErrorsToForm(
        "email",
        "Please enter your email correctly",
        updateContext,
        "setPersonalDetails"
      );
      status = true;
    }
    if (updateContext.personalDetails.details.dob === "") {
      setErrorsToForm(
        "dob",
        "Please enter your bithdate",
        updateContext,
        "setPersonalDetails"
      );
      status = true;
    }
    if (updateContext.personalDetails.details.gender === null) {
      setErrorsToForm(
        "gender",
        "Please select your gender",
        updateContext,
        "setPersonalDetails"
      );
      status = true;
    }
    if (
      updateContext.personalDetails.details.mobileNumber === null ||
      updateContext.personalDetails.details.mobileNumber.length !== 10
    ) {
      setErrorsToForm(
        "mobileNumber",
        "Please enter number with 10 digits",
        updateContext,
        "setPersonalDetails"
      );
      status = true;
    }
    return status;
  };
  const next = () => {
    EmaptyAllPersonalErrors(updateContext, "setPersonalDetails");
    if (checkErrors()) {
      return;
    }
    return updateContext.setStep(updateContext.currentPage + 1);
  };

  return (
    <div className="contain">
      <p>Enter Your Personal Details</p>
      <form className="form">
        <AppInput
          type="text"
          errorText={updateContext.personalDetails.errors.name}
          value={updateContext.personalDetails.details.name}
          placeholder="Enter Your Name"
          onChange={(e: any) =>
            setValueToForm(
              "name",
              e.target.value,
              updateContext,
              "setPersonalDetails"
            )
          }
          required
        />
        <AppInput
          type="text"
          errorText={updateContext.personalDetails.errors.email}
          value={updateContext.personalDetails.details.email}
          placeholder="Enter Your Email"
          onChange={(e: any) =>
            setValueToForm(
              "email",
              e.target.value,
              updateContext,
              "setPersonalDetails"
            )
          }
          required
        />
        <AppInput
          type="number"
          errorText={updateContext.personalDetails.errors.mobileNumber}
          value={updateContext.personalDetails.details.mobileNumber}
          placeholder="Enter Your Mobile Number"
          onChange={(e: any) =>
            setValueToForm(
              "mobileNumber",
              e.target.value,
              updateContext,
              "setPersonalDetails"
            )
          }
          required
        />
        <AppInput
          type="date"
          errorText={updateContext.personalDetails.errors.dob}
          value={updateContext.personalDetails.details.dob}
          placeholder="Enter Date"
          onChange={(e: any) =>
            setValueToForm(
              "dob",
              e.target.value,
              updateContext,
              "setPersonalDetails"
            )
          }
          required
        />
        <select
          className="formSelect"
          onChange={(e: any) =>
            setValueToForm(
              "gender",
              e.target.value,
              updateContext,
              "setPersonalDetails"
            )
          }
          value={
            updateContext.personalDetails.details.gender
              ? updateContext.personalDetails.details.gender
              : ""
          }
        >
          <option value="">Please choose a gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {updateContext.personalDetails.errors.gender !== null && (
          <div className="genderError">
            {updateContext.personalDetails.errors.gender}
          </div>
        )}
        <button type="button" className="formSubmit" onClick={next}>
          Next
        </button>
      </form>
    </div>
  );
};

export default StepOne;
