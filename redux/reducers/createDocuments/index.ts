import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  vatAmountCalcu,
  vatExclusiveCalcu,
} from "../../../functions/totalsCaluclations";
import { iCreateDocument } from "./types";

const initialState: iCreateDocument[] = [];

const createDocumentSlice = createSlice({
  name: "createDocument",
  initialState: initialState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<iCreateDocument>) => {
        state.push(payload);
      },
      prepare: (createdocument: any) => ({
        payload: createdocument,
      }),
    },
    increment: (state, { payload }) => {
      const quantityToEdit = state.find(
        (quantity) => quantity.item_code === payload.item_code
      );

      if (quantityToEdit) {
        quantityToEdit.item_quantity++;
        //total amount calculation
        quantityToEdit.total_amount = (
          quantityToEdit.item_selling_price * quantityToEdit.item_quantity
        ).toFixed(2);
        //totalc amount excluding vat calculation
        quantityToEdit.total_excluding = (
          quantityToEdit.item_selling_price *
          quantityToEdit.item_quantity *
          vatExclusiveCalcu
        ).toFixed(2);
        // total vat amount calculation
        quantityToEdit.vat_amount =
          quantityToEdit.total_amount * vatAmountCalcu;
      }
    },
    decrement: (state, { payload }) => {
      const quantityToEdit = state.find(
        (quantity) => quantity.item_code === payload.item_code
      );

      if (quantityToEdit) {
        quantityToEdit.item_quantity--;

        //total amount calculation
        quantityToEdit.total_amount = (
          quantityToEdit.item_selling_price * quantityToEdit.item_quantity
        ).toFixed(2);
        //totalc amount excluding vat calculation
        quantityToEdit.total_excluding = (
          quantityToEdit.item_selling_price *
          quantityToEdit.item_quantity *
          vatExclusiveCalcu
        ).toFixed(2);
        // total vat amount calculation
        quantityToEdit.vat_amount =
          quantityToEdit.total_amount * vatAmountCalcu;
      }
    },
    edit: (state, { payload }) => {
      const quantityToEdit = state.find(
        (quantity) => quantity.item_code === payload.item_code
      );

      if (quantityToEdit) {
        quantityToEdit.item_quantity = payload.item_quantity;

        //total amount calculation
        quantityToEdit.total_amount = (
          quantityToEdit.item_selling_price * payload.item_quantity
        ).toFixed(2);

        // total amount exclusive calculation
        quantityToEdit.total_excluding = (
          quantityToEdit.item_selling_price *
          payload.item_quantity *
          vatExclusiveCalcu
        ).toFixed(2);

        // total vat amount calculation
        quantityToEdit.vat_amount =
          quantityToEdit.total_amount * vatAmountCalcu;
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
    vatChange: (state, { payload }) => {
      const vatItemToFind = state.find(
        (item) => item.item_code === payload.item_code
      );

      if (vatItemToFind) {
        // change vat value
        vatItemToFind.chargeVat = payload.chargeVat;
      }
    },
    clear: (state) => {
      return state.splice(1000000000000000);
    },
  },
});

export const {
  create: addItemDocumentActions,
  increment: incrementAction,
  decrement: decrementAction,
  edit: editAction,
  remove: deleteAction,
  vatChange: vatChangeAction,
  clear: removeAllAction,
} = createDocumentSlice.actions;

export default createDocumentSlice;
