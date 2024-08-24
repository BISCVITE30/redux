import { createStore } from 'redux';
import { userReducer } from './users.reducer';
import { addUser, deleteUser } from './users.actions';

export const store = createStore(userReducer);

export default store;

store.dispatch(addUser('Sarah', 10));
store.dispatch(addUser('Sarah', 30));
store.dispatch(addUser('Sarah', 20));
store.dispatch(deleteUser(20));

console.log(store.getState());
