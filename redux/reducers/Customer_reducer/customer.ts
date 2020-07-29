import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Customer} from '../types/customer_types';

const initialState: Customer[] = [
  {
    customer_id: 1,
    code: '123',
    name: 'Cash Customer',
  },
  {
    customer_id: 2,
    code: '321',
    name: 'Tony',
  },
  {
    customer_id: 3,
    code: '456',
    name: 'Kulungwana',
  },
];

const customerSlice = createSlice({
  name: 'Customers',
  initialState: initialState,
  reducers: {
    create: {
      reducer: (state, {payload}: PayloadAction<Customer>) => {
        state.push(payload);
      },
      prepare: (customer: Partial<Customer>) => ({
        payload: customer,
      }),
    },
    edit: (state, {payload}) => {
      const customerToEdit = state.find(
        (customer) => customer.customer_id === payload.customer_id,
      );

      if (customerToEdit) {
        customerToEdit.code = payload.code;
        customerToEdit.name = payload.name;
      }
    },
    remove: (state, {payload}) => {
      const customerToDelete = state.findIndex(
        (customer) => customer.customer_id === payload.customer_id,
      );

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
