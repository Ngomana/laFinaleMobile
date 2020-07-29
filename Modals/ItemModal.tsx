class ItemModal {
  private item_id: number;
  private item_type: string;
  private item_code: string;
  private item_description: string;
  private cost_price: number;
  private quantity: number;
  private selling_price: number;
  constructor(
    item_id: number,
    item_type: string,
    item_code: string,
    item_description: string,
    cost_price: number,
    quantity: number,
    selling_price: number,
  ) {
    this.item_id = item_id;
    this.item_type = item_type;
    this.item_code = item_code;
    this.item_description = item_description;
    this.cost_price = cost_price;
    this.quantity = quantity;
    this.selling_price = selling_price;
  }
}

export default ItemModal;
