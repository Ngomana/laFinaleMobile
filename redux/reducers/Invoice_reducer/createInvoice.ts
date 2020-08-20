import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ICustomer,
  IDocumentDetails,
  ITotalAmount,
} from "../types/createInvoice_types";

const InvoiceCustomerState: ICustomer[] = [];

const invoiceDetailsState: IDocumentDetails[] = [];

export const createInvoiceCustomerSlice = createSlice({
  name: "CustomerToInvoice",
  initialState: invoiceDetailsState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<ICustomer>) => {
        state.push(payload);
      },
      prepare: (customer: Partial<ICustomer>) => ({
        payload: customer,
      }),
    },
    remove: (state) => {
      return InvoiceCustomerState;
    },
  },
});

export const {
  create: addCustomerToInvoice,
  remove: deleteCustomerToInvoice,
} = createInvoiceCustomerSlice.actions;

export const createInvoiceDetailsSlice = createSlice({
  name: "ProductsToInvoice",
  initialState: invoiceDetailsState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<IDocumentDetails>) => {
        state.push(payload);
      },
      prepare: (documentDetails: Partial<IDocumentDetails>) => ({
        payload: documentDetails,
      }),
    },
    add_quantity: (state, { payload }) => {
      const quantityToEdit = state.find((item) => item.code === payload.code);
      if (quantityToEdit) {
        quantityToEdit.quantity = ++quantityToEdit.quantity;
        quantityToEdit.total_amount =
          quantityToEdit.selling_price * quantityToEdit.quantity;
        quantityToEdit.vat =
          quantityToEdit.selling_price * quantityToEdit.quantity * (15 / 115);
        quantityToEdit.total_exclusive =
          quantityToEdit.quantity * quantityToEdit.selling_price * (100 / 115);
      }
    },
    subtract_quantity: (state, { payload }) => {
      const quantityToEdit = state.find((item) => item.code === payload.code);

      if (quantityToEdit) {
        --quantityToEdit.quantity;

        quantityToEdit.total_amount =
          quantityToEdit.selling_price * quantityToEdit.quantity;
      }
    },
    manual_quantity: (state, { payload }) => {
      const quantityToEdit = state.find((item) => item.code === payload.code);

      if (quantityToEdit) {
        quantityToEdit.quantity = payload.quantity;
      }
    },
    get_total_amount: (state, { payload }) => {
      const view;
    },

    get_quantity: (state, { payload }) => {
      const quantityToDisplay = state.find(
        (item) => item.code === payload.code
      );

      if (quantityToDisplay) {
        return quantityToDisplay.quantity;
      } else {
        return;
      }
    },

    remove_one: (state, { payload }) => {
      const itemToDelete = state.findIndex(
        (item) => item.code === payload.code
      );

      if (itemToDelete !== -1) {
        state.splice(itemToDelete, 1);
      }
    },
    remove_all: (state, { payload }) => {
      return invoiceDetailsState;
    },
  },
});

export const {
  create: addInvoiceItems,
  view_quantity: getInvoiceQuantityItems,
  get_total_amount: getTotalAmount,
  add_quantity: incrementItemQuantity,
  subtract_quantity: decreaseItemQuantity,
  manual_quantity: typedItemQuantity,
  remove_one: removeItemFromDocument,
  remove_all: removeAllItems,
} = createInvoiceDetailsSlice.actions;
