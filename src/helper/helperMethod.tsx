import { PersonalDetails } from "../types/types";

export const setValueToForm = (
  type: string,
  value: string | number,
  updateContext: any,
  updateStateName: string
) => {
  updateContext[updateStateName]((prev: PersonalDetails) => {
    return {
      details: {
        ...prev.details,
        [type]: value,
      },
      errors: {
        ...prev.errors,
      },
    };
  });
};

export const setErrorsToForm = (
  type: string,
  value: string | number,
  updateContext: any,
  updateStateName: string
) => {
  updateContext[updateStateName]((prev: PersonalDetails) => {
    return {
      details: {
        ...prev.details,
      },
      errors: {
        ...prev.errors,
        [type]: value,
      },
    };
  });
};

export const EmaptyAllErrors = (
  updateContext: any,
  updateStateName: string
) => {
  updateContext[updateStateName]((prev: PersonalDetails) => {
    let emaptyObj: any = {};
    Object.keys(updateContext[updateStateName].errors).forEach((doc: any) => {
      emaptyObj[doc] = null;
    });
    return {
      details: {
        ...prev.details,
      },
      errors: { ...emaptyObj },
    };
  });
};
