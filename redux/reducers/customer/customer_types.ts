export interface iCustomer {
  customerId: number;
  customerCode: string;
  customerName: string;
  customerContactNumber: string;
  customerEmail: string;

  createdAt: Date;
  updatedAt: Date;
  balance: number;
}
