import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import userSkateReducer from './userSkate.reducer';
import editReducer from './edit.reducer';
import selectedReducer from './selectedItem.reducer';
import allSkateReducer from './allSkate.reducer';

const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  userSkateReducer, //contains all item spots for user and shreddit community
  editReducer, //
  selectedReducer,
  allSkateReducer,
});

export default rootReducer;
