import { useContext } from "react";
import AppContext from "../../../context/Contex";
import {
  EmaptyAllErrors,
  setErrorsToForm,
  setValueToForm,
} from "../../../helper/helperMethod";
import "../../../styles.css";
import AppInput from "../../common/AppInput";

const StepOne = () => {
  const myContext: any = useContext(AppContext);
  const updateContext = myContext.userDetails;

  const next = () => {
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (updateContext.personalDetails.details.name === "") {
      setErrorsToForm(
        "name",
        "Please enter your Name",
        updateContext,
        "setPersonalDetails"
      );
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
    }
    if (updateContext.personalDetails.details.dob === "") {
      setErrorsToForm(
        "dob",
        "Please enter your bithdate",
        updateContext,
        "setPersonalDetails"
      );
    }
    if (updateContext.personalDetails.details.gender === null) {
      setErrorsToForm(
        "gender",
        "Please select your gender",
        updateContext,
        "setPersonalDetails"
      );
    }
    if (
      updateContext.personalDetails.details.mobileNumber === null ||
      updateContext.personalDetails.details.mobileNumber !== 10
    ) {
      setErrorsToForm(
        "mobileNumber",
        "Please enter number with 10 digits",
        updateContext,
        "setPersonalDetails"
      );
    } else updateContext.setStep(updateContext.currentPage + 1);
  };

  return (
    <div className="contain">
      <p>Enter Your Details</p>
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
          type="text"
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
        <button type="button" className="formSubmit" onClick={next}>
          Next
        </button>
      </form>
    </div>
  );
};

export default StepOne;
