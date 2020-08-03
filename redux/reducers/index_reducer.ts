// @ts-ignore
import {combineReducers} from '@reduxjs/toolkit';
import itemsSlice from './item_reducer/items';
import customerSlice from './Customer_reducer/customer';
import invoiceSlice from './Invoice_reducer/Invoice';
import quotationSlice from './Quotation/Quotation';

export const reducer = combineReducers({
  items: itemsSlice.reducer,
  customers: customerSlice.reducer,
  invoices: invoiceSlice.reducer,
  quotations: quotationSlice.reducer,
  // other reducers should be entered here as well
});
