export interface InvoiceDocument {
  invoice_no: number;
  code: string;
  description: string;
  quantity: number;
  selling_price: number;
  total: number;
}

export interface State {
  invoiceDocuments: InvoiceDocument[];
}
