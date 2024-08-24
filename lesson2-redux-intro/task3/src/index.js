import store from './store';
import { addUser, deleteUser } from './users.actions.js';

store.dispatch(addUser('Sarah', 10));
store.dispatch(addUser('John', 20));

console.log('После добавления пользователей:', store.getState());

store.dispatch(deleteUser(10));

console.log('После удаления пользователя с ID 10:', store.getState());
