export interface QuotationDocuments {
  quote_no: number;
  code: string;
  description: string;
  quantity: number;
  selling_price: number;
  total: number;
}

export interface State {
  quotationDocuments: QuotationDocuments[];
}
