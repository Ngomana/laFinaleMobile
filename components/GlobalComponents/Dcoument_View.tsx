import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { HeadingText, UseLabel } from "../textLalbel";
import {
  DocButton,
  DocDeleteButton,
  ToInvoiceButton,
} from "../documentButtons/documentButton";
import {
  useInvoiceType,
  useQuotationType,
} from "../../functions/documentTpyes";
import { iDocumentTypes } from "../../redux/reducers/documents/documentTypes";

const DocumentView = ({
  document_type,
  document_no,
  customer_code,
  customer,
  document_date,
  total_amount,
}: Partial<iDocumentTypes>) => {
  const typeChecking = (
    currentType: string,
    originalType: string,
    component: any
  ) => {
    return currentType === originalType.toLowerCase() ? component : null;
  };
  return (
    <View style={styles.body}>
      <TouchableOpacity
        delayPressIn={2}
        onPress={() => {
          console.log("Show the modal");
        }}
      >
        <View>
          {/*If its quotations return quotation view*/}
          {typeChecking(
            document_type,
            useQuotationType,
            <HeadingText lblText={`${useQuotationType} Details:`} />
          )}

          {/*  if its invoices return invoice view*/}
          {typeChecking(
            document_type,
            useInvoiceType,
            <HeadingText lblText={`${useInvoiceType} Details:`} />
          )}
        </View>

        <View style={styles.documentInfo}>
          {/*If its quotations return quotation view*/}
          {/*  if its invoices return invoice view*/}

          <UseLabel
            lblText={`${useQuotationType} No:`}
            lblText2={document_no.toString()}
          />
          <UseLabel lblText={`Date:`} lblText2={document_date} />
          <UseLabel lblText={`Amount:`} lblText2={total_amount.toString()} />
        </View>

        <View>
          <HeadingText lblText={"Customer Info:"} />
        </View>
        <View style={styles.documentInfo}>
          <UseLabel lblText={`Name: ${customer}`} />
          <UseLabel lblText={`Code: ${customer_code}`} />
        </View>

        <View style={styles.buttonView}>
          <DocButton
            buttonText={"Share"}
            buttonPress={() => {
              console.log("Its working");
            }}
          />
          <DocButton buttonText={"Edit"} buttonPress={() => {}} />
          <DocDeleteButton buttonText={"Delete"} buttonPress={() => {}} />
          <ToInvoiceButton buttonText={"To Invoice"} buttonPress={() => {}} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DocumentView;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    margin: 5,
    borderBottomColor: "blue",
    borderBottomWidth: 2.5,
  },
  documentInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  documentStatus: {
    backgroundColor: "green",
    flex: 1,
    borderWidth: 3,
  },
  buttonView: {
    flexDirection: "row",
  },
});
