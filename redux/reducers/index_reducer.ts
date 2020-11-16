// @ts-ignore
import { combineReducers } from "@reduxjs/toolkit";
import itemsSlice from "./item_reducer/items";
import customerSlice from "./Customer_reducer/customer";
import documentsSlice from "./documents/documents";
import createDocumentSlice from "./createDocuments/index";

export const reducer = combineReducers({
  items: itemsSlice.reducer,
  customers: customerSlice.reducer,
  documents: documentsSlice.reducer,
  createDocuments: createDocumentSlice.reducer,
});
