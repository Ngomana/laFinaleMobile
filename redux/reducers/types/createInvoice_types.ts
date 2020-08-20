export interface ICustomer {
  customer_code: string;
  name: string;
}

export interface IDocumentDetails {
  code: string;
  description: string;
  quantity: number;
  selling_price: number;
  vat: number;
  total_exclusive: number;
  total_amount: number;
}

export interface ITotalAmount {
  totalAmount: Number;
}
