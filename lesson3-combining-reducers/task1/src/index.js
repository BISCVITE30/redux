import store from './store';
import { decrement, increment, reset } from './counter.actions';
import { addUser, deleteUser } from './users.actions';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(addUser({ id: 77, name: 'John' }));

store.dispatch(deleteUser(76));
