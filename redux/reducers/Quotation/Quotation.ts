import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Quotation} from '../types/quotation_types';

const quotationsState: Quotation[] = [
  {
    quote_no: 1,
    quote_date: '20/12/2019',
    customer: 'Tony',
    vat_amount: 15,
    vat_excluding: 100,
    total_amount: 115,
  },
  {
    quote_no: 2,
    quote_date: '20/12/2019',
    customer: 'Tony',
    vat_amount: 30,
    vat_excluding: 200,
    total_amount: 230,
  },
];

const quotationSlice = createSlice({
  name: 'quotations',
  initialState: quotationsState,
  reducers: {
    create: {
      reducer: (state, {payload}: PayloadAction<Quotation>) => {
        state.push(payload);
      },
      prepare: (quotation: Partial<Quotation>) => ({
        payload: quotation,
      }),
    },
    edit: (state, {payload}) => {
      const quotationToEdit = state.find(
        (quotation) => quotation.quote_no === payload.quote_no,
      );

      if (quotationToEdit) {
        quotationToEdit.quote_date = payload.quote_date;
        quotationToEdit.customer = payload.customer;
        quotationToEdit.vat_amount = payload.vat_amount;
        quotationToEdit.vat_excluding = payload.vat_excluding;
        quotationToEdit.total_amount = payload.total_amount;
      }
    },
    remove: (state, {payload}) => {
      const quotationToDelete = state.findIndex(
        (quotation) => quotation.quote_date === payload.quote_date,
      );

      if (quotationToDelete !== -1) {
        state.splice(quotationToDelete, 1);
      }
    },
  },
});

export const {
  create: createQuote,
  edit: updateQuote,
  remove: deleteQuote,
} = quotationSlice.actions;

export default quotationSlice;
