export interface iCreateDocument {
  documentType: string;
  item_code: string;
  item_description: string;
  item_quauntity: number;
  item_selling_price: number;
  vat_amount: number;
  total_excluding: number;
  total_amount: number;
  chargeVat: boolean;
}
