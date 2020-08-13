import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types/item_types";

const itemInitialState: Item[] = [
  {
    item_id: 1,
    item_type: "Physical",
    item_code: "SR71",
    item_description: "Keyboard",
    quantity: 80,
    cost_price: 50,
    selling_price: 166.99,
  },
  {
    item_id: 2,
    item_type: "Physical",
    item_code: "15",
    item_description: "Cement",
    quantity: 809809809,
    cost_price: 50,
    selling_price: 129.99,
  },
  {
    item_id: 3,
    item_type: "Physical",
    item_code: "10",
    item_description: "chrome",
    quantity: 809809809,
    cost_price: 50,
    selling_price: 20,
  },

  {
    item_id: 4,
    item_type: "Physical",
    item_code: "11",
    item_description: "Heets",
    quantity: 809809809,
    cost_price: 50,
    selling_price: 20,
  },
  {
    item_id: 5,
    item_type: "Physical",
    item_code: "12",
    item_description: "modifier",
    quantity: 809809809,
    cost_price: 50,
    selling_price: 20,
  },
];

const itemsSlice = createSlice({
  name: "items",
  initialState: itemInitialState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<Item>) => {
        state.push(payload);
      },
      prepare: (item: Partial<Item>) => ({
        payload: item,
      }),
    },
    edit: (state, { payload }) => {
      const itemToEdit = state.find((item) => item.item_id === payload.item_id);
      if (itemToEdit) {
        itemToEdit.item_code = payload.item_code;
        itemToEdit.item_description = payload.item_description;
        itemToEdit.cost_price = payload.cost_price;
        itemToEdit.quantity = payload.quantity;
        itemToEdit.selling_price = payload.selling_price;
      }
    },
    remove: (state, { payload }) => {
      const itemToDelete = state.findIndex(
        (item) => item.item_id === payload.item_id
      );
      if (itemToDelete !== -1) {
        state.splice(itemToDelete, 1);
      }
    },
  },
});

export const {
  create: createItemAction,
  edit: updateItemAction,
  remove: deleteItemAction,
} = itemsSlice.actions;

export default itemsSlice;
