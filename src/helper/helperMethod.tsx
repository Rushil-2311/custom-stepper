export const setValueToForm = (
  type: string,
  value: string | number,
  updateContext: any,
  updateStateName: string
) => {
  updateContext[updateStateName]((prev: any) => {
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
  updateContext[updateStateName]((prev: any) => {
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
