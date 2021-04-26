import { combineReducers, createStore,applyMiddleware,compose } from "redux";
import laptopReducer from './reducers/laptopReducer';
import mobileReducer from './reducers/mobileReducer';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
const rootReducer = combineReducers({
  laptops: laptopReducer,
  mobiles: mobileReducer,
  
})
const store = createStore(rootReducer,compose(
  applyMiddleware(thunk,logger),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ));
export default store;