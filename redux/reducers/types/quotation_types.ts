export interface Quotation {
  quote_no: number;
  quote_date: string;
  customer: string;
  vat_amount: number;
  vat_excluding: number;
  total_amount: number;
}

export interface State {
  quotations: Quotation[];
}
