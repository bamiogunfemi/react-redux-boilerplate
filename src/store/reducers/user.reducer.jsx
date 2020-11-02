import userActionTypes from '../types/user.types';
const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isLoading: false,
  token: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_UP_START:
    case userActionTypes.SIGN_OUT_START:
    case userActionTypes.SIGN_IN_START:
    case userActionTypes.EDIT__PROFILE__START:
      return {
        ...state,
        isLoading: true,
      };

    case userActionTypes.SIGN_IN_SUCCESS:
    case userActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        success: action.payload,
        token: action.payload.token,
        error: null,
        isLoading: false,
      };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
        isLoading: false,
      };
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
    case userActionTypes.EDIT__PROFILE__FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case userActionTypes.SET_CURRENT_USER:
    case userActionTypes.EDIT__PROFILE__SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
