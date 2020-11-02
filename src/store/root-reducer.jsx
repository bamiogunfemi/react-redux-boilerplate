import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './reducers/user.reducer';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['user',],
};
const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['currentUser'],
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
});
export default persistReducer(rootPersistConfig, rootReducer);
