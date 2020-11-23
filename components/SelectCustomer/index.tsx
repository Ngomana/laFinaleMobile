import React from "react";
import { Text, View, Alert } from "react-native";
import CustomerFlatList from "../GlobalComponents/CustomerFlatList";
import { RootStateOrAny, useSelector } from "react-redux";
import {
  useInvoiceType,
  useQuotationType,
} from "../../functions/documentTypes";

const SelectCustomerScreen = ({ route, navigation }: any) => {
  const customers = useSelector((state: RootStateOrAny) => state.customers);
  const { documentType } = route.params;

  const selectCustomer = (
    name: string,
    code: string,
    email: string,
    balance: number
  ) => {
    if (documentType === useInvoiceType) {
      //navigate to create invoice screen
      return navigation.navigate("createDocumentScreen", {
        customerCode: code,
        customerName: name,
        customerEmail: email,
        customerBalance: balance,
        documentType: useInvoiceType,
      });
    }

    if (documentType === useQuotationType) {
      //navigate to create quotation screen
      return navigation.navigate("createDocumentScreen", {
        customerCode: code,
        customerName: name,
        customerEmail: email,
        customerBalance: balance,
        documentType: useQuotationType,
      });
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <CustomerFlatList
        customerData={customers}
        doc_type={documentType}
        onPressCustomer={selectCustomer}
      />
    </View>
  );
};

export default SelectCustomerScreen;
