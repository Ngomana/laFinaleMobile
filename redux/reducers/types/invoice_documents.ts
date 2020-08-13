export interface InvoiceDocuments {
  document_type: string;
  invoice_no: number;
  item_code: string;
  item_description: string;
  quantity: number;
  selling_price: number;
  vat_amount: number;
  inline_total_exclusive: number;
  inline_total_inclusive: number;
}
