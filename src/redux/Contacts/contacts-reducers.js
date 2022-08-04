import { combineReducers } from 'redux';
import { ADD, DELETE, FILTER } from './contacts-types';

export const itemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];
    case DELETE:
      return state.filter(item => item.id !== payload);
    default:
      return state;
  }
};

export const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;
    default:
      return state;
  }
};

export const reducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
