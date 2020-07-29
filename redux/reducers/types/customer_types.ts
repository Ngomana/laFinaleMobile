export interface Customer {
  customer_id: number;
  code: string;
  name: string;
}

export interface State {
  customers: Customer[];
}
