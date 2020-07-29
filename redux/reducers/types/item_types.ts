export interface Item {
  item_id: number;
  item_type: string;
  item_code: string;
  item_description: string;
  quantity: number;
  cost_price: number;
  selling_price: number;
}

export interface State {
  items: Item[];
}
