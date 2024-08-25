import { userDelete, userSet } from './user.actions';
import store from './store';
import { setLanguage } from './language.actions';
import { addCart } from './cart.actions';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(userSet({ name: 'Bob', id: 40 }));
store.dispatch(userSet({ name: 'Tom', id: 20 }));
store.dispatch(userDelete(20));

store.dispatch(setLanguage('jp'));
store.dispatch(setLanguage('rus'));

store.dispatch(addCart({ id: 45, name: 'Milk'}));
