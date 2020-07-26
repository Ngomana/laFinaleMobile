import {
  ADD_ITEMS,
  DELETE_ITEM,
  EDIT_ITEM,
  FETCH_ITEMS_FAIL,
  GET_ITEMS_SUCCESS,
  GET_ITEMS,
  SAVE_ITEM,
} from '../../types/item_types';

export interface itemProperties {
  item_id: number;
  item_type: string;
  item_code: string;
  item_description: string;
  cost_price: number;
  quantity: number;
  selling_price: number;
}

export interface itemCode {
  item_code: string;
}

//get items
export const getItemsAction = (item: itemProperties) => ({
  type: GET_ITEMS,
  payload: [item],
});

//Adding items
export const addItemAction = (item: itemProperties) => ({
  type: ADD_ITEMS,
  payload: item,
});

//delete items
export const deleteItemAction = (item_code) => {
  return {type: DELETE_ITEM, payload: item_code};
};

export const editItemsAction = (item: itemProperties) => ({
  type: EDIT_ITEM,
  payload: item,
});
