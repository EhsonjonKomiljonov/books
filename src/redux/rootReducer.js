import { combineReducers } from 'redux';
import { langReducer } from './lang/langReducer';
import { themeReducer } from './theme/themeReducer';
import { tokenReducer } from './token/tokenReducer';
import { userReducer } from './user/userReducer';

export const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
  theme: themeReducer,
  lang: langReducer,
});
