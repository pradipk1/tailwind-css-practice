import {legacy_createStore} from 'redux'
import authReducer from './reducers/authReducer';

const reduxStore = legacy_createStore(authReducer);

export default reduxStore;