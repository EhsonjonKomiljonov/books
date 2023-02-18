import { REMOVE_DARK_MODE, SET_DARK_MODE } from "./themeType"

export const setDarkMode = (theme) => {
  return {
    type: SET_DARK_MODE,
    payload: theme, 
  }
}


export const removeDarkMode = () => {
  return {
    type: REMOVE_DARK_MODE,
    payload: '',
  }
}