import store from './store';
import { addUser, deleteUser } from './users.actions';

store.dispatch(addUser('Sarah', 10));
store.dispatch(addUser('Sarah', 30));
store.dispatch(addUser('Sarah', 20));
store.dispatch(deleteUser(20));

console.log(store.getState());
