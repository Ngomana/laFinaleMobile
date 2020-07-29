// @ts-ignore
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/index_reducer';
//
// const initialState = {};
//
// const middleware = [thunk];
//
// const store = createStore(
//   rootReducer,
//   initialState,
//   applyMiddleware(...middleware),
// );
//
// export default store;

import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducers/index_reducer';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer,
  middleware: [thunk],
});
