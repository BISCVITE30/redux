import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter/counter.reducer.js';
import { usersReducer } from './users/users.reducer.js';

const reducer = combineReducers({
    users: usersReducer,
    counter: counterReducer,
})

const store = createStore(reducer);

export default store;