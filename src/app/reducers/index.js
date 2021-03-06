import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';

// import custom reducers here


export default combineReducers({
  reduxAsyncConnect,
  routing: routerReducer,
});
