// @ts-ignore
import {combineReducers} from '@reduxjs/toolkit';
import itemsSlice from './item_reducer/items';
import customerSlice from './Customer_reducer/customer';

export const reducer = combineReducers({
  items: itemsSlice.reducer,
  customers: customerSlice.reducer,
  // other reducers should be entered here as well
});
