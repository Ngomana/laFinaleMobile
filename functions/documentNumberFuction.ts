import { useQuotationType } from "./documentTypes";

interface iDocumentNumber {
  documentType: string;
  documentArray: any;
}

export const documentNumber = ({
  documentType,
}: //   documentArray,
Partial<iDocumentNumber>) => {
  console.log(documentType);
    try {
      if (documentType === useQuotationType) {
        return documentArray.filter((quotes) => {
          let itemToLowerCase = quotes.document_type.toLowerCase();
          let searchedItemToLowCase = useQuotationType.toLowerCase();
          return itemToLowerCase.indexOf(searchedItemToLowCase) > -1;
        });
      }
    } catch (error) {
      console.log(error);
    }
};

.then((data) => {
    const test =
    console.log(test);
  });

//   export const testingDocNumber =
