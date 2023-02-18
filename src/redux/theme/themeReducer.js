import { REMOVE_DARK_MODE, SET_DARK_MODE } from './themeType';

const initialState = {
  theme: '',
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DARK_MODE:
      return {
        ...state,
        theme: action.payload,
      };
    case REMOVE_DARK_MODE:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
