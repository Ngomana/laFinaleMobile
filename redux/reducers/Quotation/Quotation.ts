import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Quotation } from "./quotation_types";

const quotationsState: Quotation[] = [
  {
    document_no: 1,
    document_date: "20/12/2019",
    customer_code: "123TON",
    customer: "Tony",
    vat_amount: 15,
    vat_excluding: 100,
    total_amount: 115,
  },
  {
    document_no: 2,
    document_date: "20/06/2019",
    customer_code: "123DRA",
    customer: "Drake",
    vat_amount: 30,
    vat_excluding: 200,
    total_amount: 230,
  },
];

const quotationSlice = createSlice({
  name: "quotations",
  initialState: quotationsState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<Quotation>) => {
        state.push(payload);
      },
      prepare: (quotation: Partial<Quotation>) => ({
        payload: quotation,
      }),
    },
    edit: (state, { payload }) => {
      const quotationToEdit = state.find(
        (quotation) => quotation.document_no === payload.document_no
      );

      if (quotationToEdit) {
        quotationToEdit.document_date = payload.document_date;
        quotationToEdit.total_amount = payload.total_amount;
        quotationToEdit.customer = payload.customer;
        quotationToEdit.vat_amount = payload.vat_amount;
        quotationToEdit.vat_excluding = payload.vat_excluding;
      }
    },
    remove: (state, { payload }) => {
      const quotationToDelete = state.findIndex(
        (quotation) => quotation.document_date === payload.quote_date
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
