import store, { increment, decrement } from './counter';

store.subscribe(() => {
  console.log('Изменение состояния:', store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());


