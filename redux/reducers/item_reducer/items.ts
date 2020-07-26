import {State} from 'react-native-gesture-handler';

export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAIL = 'FETCH_ITEMS_FAIL';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const ADD_ITEMS = 'ADD_ITEMS';
export const GET_ITEM = 'GET_ITEM';

const initialState = {
  items: [],
  // loading: false,
  // error: null,
};

export interface itemCode {
  item_code: string;
}

export default function (state = initialState, {type, payload}: any) {
  switch (type) {
    case GET_ITEM:
      return {
        ...state,
        loading: false,
        items: payload.items,
      };

    case ADD_ITEMS:
      return {
        ...state,
        items: [...state.items, payload],
      };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(({item_code}) => item_code !== payload),
      };

    case EDIT_ITEM:
      return {
        ...state,
        items: {...state.items, ...payload},
      };
    default:
      return state;
  }
}
