export interface Invoice {
  invoice_no: number;
  invoice_date: string;
  customer_code: string;
  customer: string;
  vat_amount: number;
  vat_excluding: number;
  total_amount: number;
}

export interface State {
  invoices: Invoice[];
}
