import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import product_reducer from './Severice/Reducer/Product_Reducer';

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 export const store = createStore(product_reducer, composeEnhancers(
    applyMiddleware(thunk)
  ));