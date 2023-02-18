import { SET_EN_LANG, SET_RU_LANG, SET_UZ_LANG } from './langType';

const initialState = {
  lang: '',
};

export const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UZ_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case SET_RU_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case SET_EN_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};
