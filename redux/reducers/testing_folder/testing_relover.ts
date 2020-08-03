import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICustomer, IDocumentDetails} from './createInvoice_types';

const InvoiceCustomerState: ICustomer[] = [];

const invoiceDetailsState: IDocumentDetails[] = [];

const createInvoiceCustomer = createSlice({
  initialState: InvoiceCustomerState,
  reducers: {
    create: (state, {payload}: PayloadAction<ICustomer>) => [],
  },
});
