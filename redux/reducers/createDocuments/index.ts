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
        quantityToEdit.item_quauntity++;
        quantityToEdit.total_amount = (
          quantityToEdit.item_selling_price * quantityToEdit.item_quauntity
        ).toFixed(2);
        quantityToEdit.total_excluding = (
          quantityToEdit.item_selling_price *
          quantityToEdit.item_quauntity *
          vatExclusiveCalcu
        ).toFixed(2);
      }
    },
    decrement: (state, { payload }) => {
      const quantityToEdit = state.find(
        (quantity) => quantity.item_code === payload.item_code
      );

      if (quantityToEdit) {
        quantityToEdit.item_quauntity--;
      }
    },
    edit: (state, { payload }) => {
      const quantityToEdit = state.find(
        (quantity) => quantity.item_code === payload.item_code
      );

      if (quantityToEdit) {
        quantityToEdit.item_quauntity = payload.item_quauntity;
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
  },
});

export const {
  create: addItemDocumentactions,
  increment: incrementAction,
  decrement: decrementAction,
  edit: editAction,
  remove: deleteAction,
  vatChange: vatChangeAction,
} = createDocumentSlice.actions;

export default createDocumentSlice;
