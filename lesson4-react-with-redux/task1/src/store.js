import { createStore } from 'redux';
import { CounterReducer } from './counter.reducer';

const store = createStore(CounterReducer);

export default store;