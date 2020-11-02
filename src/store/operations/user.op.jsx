import {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  SignInStart,
  signUpStart,
  signUpGoogleStart,
  signUpGoogleFailure,
  signUpGoogleSuccess,
  setCurrentUser,
  signOutFailure,
  signOutStart,
  signOutSuccess,
} from "../actions/user.action";
import axios from "axios";

import { saveState, loadState } from './local-storage.jsx';

const baseUrl = `${process.env.REACT_APP_BACKEND_URL}`;
const token = loadState();
export const signUp = (user) => {
  return async (dispatch) => {
    dispatch(signUpStart(user));
    await axios
      .post(`${baseUrl}/`, user)
      .then((response) => {
        if (response.status === 201) {
          dispatch(signUpSuccess(response.data));
          window.location.href='/home'
         
          window.location.reload();
        }
      })
      .catch((e) => dispatch(signUpFailure(e.message)));
  };
};


export const signIn = (user) => {
  return async (dispatch) => {
    dispatch(SignInStart({ user }));
    await axios
      .post(`${baseUrl}/login`, user)
      .then((response) => {
        if (response.status === 201) {
          saveState(response.data.reseller_access_token);
          dispatch(signInSuccess(response.data));
          dispatch(setCurrentUser(response.data));
          window.location.href='/home'
          window.location.reload();
        }
      })
      .catch((e) => {
        console.log(e.message);
        dispatch(signInFailure(e.message));
      });
  };
};

export const signUpGoogle = () => {
  console.log("start");
  return async (dispatch) => {
    dispatch(signUpGoogleStart());
    await axios
      .get(`${baseUrl}/login`)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response);
          saveState(response.data.reseller_access_token);
          dispatch(signUpGoogleSuccess(response.data));
          window.location.href='/home'
          window.location.reload();
        }
      })
      .catch((e) => {
        console.log(e.message);
        dispatch(signUpGoogleFailure(e.message));
      });
  };
};

export const signOut = () => {
  return async (dispatch) => {
    dispatch(signOutStart());
    await axios
      .post(`${baseUrl}/logout`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.status);
          dispatch(signOutSuccess());
          window.location.href='/login'
          window.location.reload();
        }
      })
      .catch((e) => {
        console.log(e.message);
        dispatch(signOutFailure(e.message));
      });
  };
};
