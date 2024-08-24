import store from './store';
import { addUser, deleteUser } from './users.actions';

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(addUser({ id: 77, name: 'John' }));

store.subscribe(() => {
  console.log('Изменение состояния:', store.getState());
});

store.dispatch(deleteUser(76));
