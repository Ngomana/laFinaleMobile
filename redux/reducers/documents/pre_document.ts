import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDocument_Details_Type } from "./document_details_type";
import {
  VatCalculation,
  VatExclusiveCalculation,
} from "../../../hardCodedFunctions/functions";

const documentState: IDocument_Details_Type[] = [];

const quotation_document_slice = createSlice({
  name: "quotation_documents",
  initialState: documentState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<IDocument_Details_Type>) => {
        state.push(payload);
      },
      prepare: (quote_document: IDocument_Details_Type) => ({
        payload: quote_document,
      }),
    },
    add_increment: (state, { payload }) => {
      const quantityToIncrement = state.find(
        (item) => item.item_code === payload.item_code
      );

      if (quantityToIncrement) {
        ++quantityToIncrement.quantity;
        quantityToIncrement.inline_total_inclusive =
          quantityToIncrement.quantity * payload.selling_price;
        quantityToIncrement.inline_vat =
          payload.selling_price * quantityToIncrement.quantity * VatCalculation;
        quantityToIncrement.inline_total_exclusive =
          payload.selling_price *
          quantityToIncrement.quantity *
          VatExclusiveCalculation;
      }
    },
    remove_decrease: (state, { payload }) => {
      const quantityToIncrement = state.find(
        (item) => item.item_code === payload.item_code
      );

      if (quantityToIncrement) {
        --quantityToIncrement.quantity;
        quantityToIncrement.inline_total_inclusive =
          quantityToIncrement.quantity * payload.selling_price;
        quantityToIncrement.inline_vat =
          payload.selling_price * quantityToIncrement.quantity * VatCalculation;
        quantityToIncrement.inline_total_exclusive =
          payload.selling_price *
          quantityToIncrement.quantity *
          VatExclusiveCalculation;
      }
    },
    remove: (state, { payload }) => {
      const itemToDelete = state.findIndex(
        (item) => item.item_code === payload.item_code
      );

      if (itemToDelete !== -1) {
        state.splice(itemToDelete, 1);
      }
    },
  },
});

export const {
  create: createDocumentDetails_Quotations,
  add_increment: increaseQuantityAction,
  remove_decrease: decreaseQuantityAction,
  remove: deleteDocumentAction,
} = quotation_document_slice.actions;

export default quotation_document_slice;
