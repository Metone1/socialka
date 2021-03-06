import { legacy_createStore as createStore, combineReducers } from 'redux'
import messagesReducer from './messages_reducer';
import profileReducer from './profile_reducer';
import sidebarReducer from './sidebar_reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;