export interface Customer {
  customer_id: number;
  code: string;
  name: string;
  email: string;
  balance: number;
}

export interface State {
  customers: Customer[];
}
