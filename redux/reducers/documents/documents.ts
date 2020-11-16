import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iDocumentTypes } from "./documentTypes";

const quotationsState: iDocumentTypes[] = [
  {
    document_type: "quotation",
    document_no: 1,
    document_date: "20/12/2019",
    customer_code: "123TON",
    customer: "Tony",
    vat_amount: 15,
    vat_excluding: 100,
    total_amount: 115,
    createdAt: "20/02/2020",
    updatedAt: "",
  },
  {
    document_type: "quotation",
    document_no: 2,
    document_date: "20/06/2019",
    customer_code: "123DRA",
    customer: "Drake",
    vat_amount: 30,
    vat_excluding: 200,
    total_amount: 230000000,
    createdAt: "20/02/2020",
    updatedAt: "",
  },
  {
    document_type: "invoice",
    document_no: 1,
    document_date: "20/06/2019",
    customer_code: "123DRA",
    customer: "Drake",
    vat_amount: 30,
    vat_excluding: 200,
    total_amount: 2300000,
    createdAt: "20/02/2020",
    updatedAt: "",
  },
  {
    document_type: "invoice",
    document_no: 2,
    document_date: "20/06/2019",
    customer_code: "123DRA",
    customer: "Drake",
    vat_amount: 30,
    vat_excluding: 200,
    total_amount: 230,
    createdAt: "20/02/2020",
    updatedAt: "",
  },
  {
    document_type: "invoice",
    document_no: 3,
    document_date: "20/06/2019",
    customer_code: "123DRA",
    customer: "Drake",
    vat_amount: 30,
    vat_excluding: 200,
    total_amount: 230,
    createdAt: "20/02/2020",
    updatedAt: "",
  },
];

const documentsSlice = createSlice({
  name: "quotations",
  initialState: quotationsState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<iDocumentTypes>) => {
        state.push(payload);
      },
      prepare: (quotation: iDocumentTypes) => ({
        payload: quotation,
      }),
    },
    edit: (state, { payload }) => {
      const quotationToEdit = state.find(
        (quotation) => quotation.document_no === payload.document_no
      );

      if (quotationToEdit) {
        quotationToEdit.document_date = payload.document_date;
        quotationToEdit.total_amount = payload.total_amount;
        quotationToEdit.customer = payload.customer;
        quotationToEdit.vat_amount = payload.vat_amount;
        quotationToEdit.vat_excluding = payload.vat_excluding;
      }
    },
    remove: (state, { payload }) => {
      const quotationToDelete = state.findIndex(
        (quotation) => quotation.document_date === payload.quote_date
      );

      if (quotationToDelete !== -1) {
        state.splice(quotationToDelete, 1);
      }
    },
  },
});

export const {
  create: createDocument,
  edit: updateDocument,
  remove: deleteDocument,
} = documentsSlice.actions;

export default documentsSlice;
