import { createStore } from 'redux';
import routeReducer from './reducers/rootReducer';

// Create redux global storage
const store = createStore(
  routeReducer
);

export default store;