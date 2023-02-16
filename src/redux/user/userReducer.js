import { REMOVE_USER, SET_USER } from './userType';

const initialUserState = {
  user: '',
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REMOVE_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
