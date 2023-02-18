import { SET_EN_LANG, SET_RU_LANG, SET_UZ_LANG } from './langType';

export const setUzLang = (lang) => {
  return {
    type: SET_UZ_LANG,
    payload: lang,
  };
};

export const setRuLang = (lang) => {
  return {
    type: SET_RU_LANG,
    payload: lang,
  };
};

export const setEnLang = (lang) => {
  return {
    type: SET_EN_LANG,
    payload: lang,
  };
};
