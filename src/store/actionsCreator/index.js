/**
 *
 * @param type - Action Type
 * @param payload(s) - Payloads as string (You can pass in as many as you want by separating them with comma.)
 * =================================================================
 *
 * Import it to wherever you wanna use it and assign it to a variable
 *
 * =================================================================
 */

export const actionCreator = (type, ...payloads) => {
  return (...args) => {
    const action = { type };
    payloads.forEach((arg, index) => {
      action[payloads[index]] = args[index];
    });

    return action;
  };
};
