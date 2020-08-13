import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Invoice } from "../types/Invoice_types";

const invoiceState: Invoice[] = [
  {
    invoice_no: 1,
    invoice_date: "20/12/2019",
    customer: "Tony",
    customer_code: "001TON",
    vat_amount: 15,
    vat_excluding: 100,
    total_amount: 115,
  },
  {
    invoice_no: 2,
    invoice_date: "20/08/2019",
    customer: "Blackbird",
    customer_code: "002SR71",
    vat_amount: 30,
    vat_excluding: 200,
    total_amount: 230,
  },
  {
    invoice_no: 3,
    invoice_date: "20/08/2019",
    customer: "Black berry",
    customer_code: "002SR71",
    vat_amount: 30,
    vat_excluding: 200,
    total_amount: 230,
  },
];

const invoiceSlice = createSlice({
  name: "invoices",
  initialState: invoiceState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<Invoice>) => {
        state.push(payload);
      },
      prepare: (invoice: Partial<Invoice>) => ({
        payload: invoice,
      }),
    },
    edit: (state, { payload }) => {
      const invoiceToEdit = state.find(
        (invoice) => invoice.invoice_no === payload.invoice_no
      );

      if (invoiceToEdit) {
        invoiceToEdit.invoice_date = payload.invoice_date;
        invoiceToEdit.customer_code = payload.customer_code;
        invoiceToEdit.customer = payload.customer;
        invoiceToEdit.vat_amount = payload.vat_amount;
        invoiceToEdit.vat_excluding = payload.vat_excluding;
        invoiceToEdit.total_amount = payload.total_amount;
      }
    },
    remove: (state, { payload }) => {
      const invoiceToDelete = state.findIndex(
        (invoice) => invoice.invoice_no === payload.invoice_no
      );

      if (invoiceToDelete !== -1) {
        state.splice(invoiceToDelete, 1);
      }
    },
  },
});

export const {
  create: createInvoiceAction,
  edit: updateInvoiceAction,
  remove: deleteInvoiceAction,
} = invoiceSlice.actions;

export default invoiceSlice;
