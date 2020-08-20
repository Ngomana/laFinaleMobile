export interface Quotation {
  document_no: number;
  document_date: string;
  customer_code: string;
  customer: string;
  vat_amount: number;
  vat_excluding: number;
  total_amount: number;
}

export interface State {
  quotations: Quotation[];
}