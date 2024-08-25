import store from './store';
import { setUser, removeUser } from './user.actions';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setUser({ name: 'Bob', id: 40 }));
store.dispatch(setUser({ name: 'Tom', id: 20 }));
store.dispatch(removeUser());

store.dispatch(setLanguage('jp'));
store.dispatch(setLanguage('rus'));

store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(removeProduct(76));
