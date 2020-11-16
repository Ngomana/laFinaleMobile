import { addItemDocumentactions } from "../redux/reducers/createDocuments";
import { appDispatch } from "../redux/index";
import { iCreateDocument } from "redux/reducers/createDocuments/types";

export const addDocumentItems = ({
  documentType,
  documentNumber,
  item_code,
  item_description,
  item_quauntity,
  item_selling_price,
  vat_amount,
  total_excluding,
  line_total,
}: iCreateDocument) => {
  try {
    appDispatch(
      addItemDocumentactions({
        documentType: documentType,
        documentNumber: documentNumber,
        item_code: item_code,
        item_description: item_description,
        item_quauntity: item_quauntity,
        item_selling_price: item_selling_price,
        vat_amount: vat_amount,
        total_excluding: total_excluding,
        line_total: line_total,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
