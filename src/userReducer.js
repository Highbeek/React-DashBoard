// userReducer.js
const initialState = {
  userDetails: null,
};

export const SET_USER_DETAILS = "SET_USER_DETAILS";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};

// userActions.js
export const setUserDetails = (userDetails) => ({
  type: SET_USER_DETAILS,
  payload: userDetails,
});
