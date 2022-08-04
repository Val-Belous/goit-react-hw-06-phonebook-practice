import { ADD, DELETE, FILTER } from './contacts-types';

export const addUser = user => ({ type: ADD, payload: user });
export const deleteUser = id => ({ type: DELETE, payload: id });
export const filterUSer = value => ({ type: FILTER, payload: value });
