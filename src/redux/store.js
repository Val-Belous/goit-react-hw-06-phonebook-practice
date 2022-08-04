import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './Contacts/contacts-reducers';

const rootReducer = combineReducers({ contacts: reducer });
export const store = createStore(rootReducer, composeWithDevTools());
