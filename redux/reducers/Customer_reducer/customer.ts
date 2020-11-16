import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iCustomer } from "./customer_types";

const initialState: iCustomer[] = [
  {
    customerId: 0,
    customerCode: "CASH001",
    customerName: "Cash Customer",
    customerContactNumber: "",
    customerEmail: "",
    createdAt: null,
    updatedAt: null,
    balance: 0,
  },
];

const customerSlice = createSlice({
  name: "Customers",
  initialState: initialState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<iCustomer>) => {
        state.push(payload);
      },
      prepare: (customer: any) => ({
        payload: customer,
      }),
    },
    edit: (state, { payload }) => {
      const customerToEdit = state.find(
        (customer) => customer.customerId === payload.customer_id
      );
      if (customerToEdit) {
        customerToEdit.customerCode = payload.customerCode;
        customerToEdit.customerName = payload.customerName;
      }
    },
    remove: (state, { payload }) => {
      const customerToDelete = state.findIndex(
        (customer) => customer.customerId === payload.customer_id
      );
      // state.customers.filter(({item_code}) => item_code !== payload

      // return state.findIndex((customer) => customer.customer_id !== payload);
      if (customerToDelete !== -1) {
        state.splice(customerToDelete, 1);
      }
    },
  },
});

export const {
  create: createCustomerAction,
  edit: updateCustomerAction,
  remove: deleteCustomerAction,
} = customerSlice.actions;

export default customerSlice;
