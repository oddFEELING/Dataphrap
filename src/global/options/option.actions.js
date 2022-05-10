/** 🌹oddFEELING */

export const setter = (state, payload, prop1, prop2 = null, prop3 = null) => {
  // ======= root prop -->
  if (prop2 === null && prop3 === null)
    return {
      options: {
        ...state.options,
        [prop1]: payload,
      },
    };

  // ======= single nested prop -->
  if (prop3 === null) {
    return {
      options: {
        ...state.options,
        [prop1]: {
          ...state.options[prop1],
          [prop2]: payload,
        },
      },
    };
  }

  // ======= double nested prop -->
  return {
    options: {
      ...state.options,
      [prop1]: {
        ...state.options[prop1],
        [prop2]: {
          ...state.options[prop1][prop2],
          [prop3]: payload,
        },
      },
    },
  };
};
