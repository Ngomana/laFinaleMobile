import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InvoiceDocuments } from "../types/invoice_documents";

const invoiceDocumentDetailsState: InvoiceDocuments[] = [];

const invoiceDocumentDetailsSlice = createSlice({
  name: "invoiceDocuments",
  initialState: invoiceDocumentDetailsState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<InvoiceDocuments>) => {
        state.push(payload);
      },
      prepare: (invoiceDetails: Partial<InvoiceDocuments>) => ({
        payload: invoiceDetails,
      }),
    },
    edit: (state, { payload }) => {
      const invoiceDocumentToEdit = state.find(
        (document) => document.item_code === payload.item_code
      );

      if (invoiceDocumentToEdit) {
        invoiceDocumentToEdit.item_code = payload.item_code;
        invoiceDocumentToEdit.item_description = payload.item_description;
        invoiceDocumentToEdit.quantity = payload.quantity;
        invoiceDocumentToEdit.vat_amount = payload.vat_amount;
        invoiceDocumentToEdit.inline_total_exclusive =
          payload.inline_total_exclusive;
        invoiceDocumentToEdit.inline_total_inclusive = payload.inline_total;
      }
    },

    remove: (state, { payload }) => {
      const documentToDelete = state.findIndex(
        (item) => item.item_code === payload.item_code
      );
      if (documentToDelete !== -1) {
        state.splice(documentToDelete, 1);
      }
    },
  },
});

export const {
  create: createDocumentAction,
  edit: updateDocumentAction,
  remove: deleteDocumentAction,
} = invoiceDocumentDetailsSlice.actions;

export default invoiceDocumentDetailsSlice;
