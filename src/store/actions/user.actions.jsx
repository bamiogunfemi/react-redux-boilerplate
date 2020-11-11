import userActionTypes from "../types/user.types";
import { actionCreator } from "../actionsCreator/index";

/**
 *
 * @param actionCreator - declare a variable and assign the function to it with the action type and payload
 * wrap it into the dispatch higher order function to invoke it.
 * =================================================================
 * USAGE
 * 
 * export const newSetCurrentUser = actionCreator(
  userActionTypes.SET_CURRENT_USER,
  "user"
);
 * dispatch(newSetCurrentUser(userData))
 * 
 * 
 * OR
 * 
 * 
 * dispatch(actionCreator( userActionTypes.SET_CURRENT_USER,
  "user"))
 * ==================================================================
 */

export const newSetCurrentUser = actionCreator(
  userActionTypes.SET_CURRENT_USER,
  "user"
);

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
export const editProfileStart = (userCredentials) => ({
  type: userActionTypes.EDIT__PROFILE__START,
  payload: userCredentials,
});
export const editProfileSuccess = (userCredentials) => ({
  type: userActionTypes.EDIT__PROFILE__SUCCESS,
  payload: userCredentials,
});
export const editProfileFailure = (error) => ({
  type: userActionTypes.EDIT__PROFILE__FAILURE,
  payload: error,
});
export const signUpStart = (userCredentials) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: userCredentials,
});
export const signUpSuccess = (user) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: user,
});
export const signUpFailure = (error) => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
export const signUpGoogleStart = () => ({
  type: userActionTypes.SIGN_UP_GOOGLE_START,
});
export const signUpGoogleSuccess = (user) => ({
  type: userActionTypes.SIGN_UP_GOOGLE__SUCCESS,
  payload: user,
});
export const signUpGoogleFailure = (error) => ({
  type: userActionTypes.SIGN_UP_GOOGLE__FAILURE,
  payload: error,
});
export const resetPasswordStart = (email) => ({
  type: userActionTypes.RESET__PASSWORD__START,
  payload: email,
});
export const resetPasswordSuccess = (credentials) => ({
  type: userActionTypes.RESET__PASSWORD__SUCCESS,
  payload: credentials,
});
export const resetPasswordFailure = (error) => ({
  type: userActionTypes.RESET__PASSWORD__FAILURE,
  payload: error,
});

export const resendActivationStart = (email) => ({
  type: userActionTypes.RESEND__ACTIVATION__START,
  payload: email,
});
export const resendActivationSuccess = (credentials) => ({
  type: userActionTypes.RESEND__ACTIVATION__SUCCESS,
  payload: credentials,
});
export const resendActivationFailure = (error) => ({
  type: userActionTypes.RESEND__ACTIVATION__FAILURE,
  payload: error,
});
export const signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});
export const signInFailure = (error) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const SignInStart = (emailAndpassword) => ({
  type: userActionTypes.SIGN_IN_START,
  payload: emailAndpassword,
});

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});
export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});
export const signOutFailure = (error) => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});
