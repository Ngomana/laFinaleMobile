import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import DocumentView from "./Dcoument_View";
import DocumentButtonView from "./DocumentButtons_View";

const DocumentFlatList = ({ documentData }: any) => {
  return (
    <View>
      <FlatList
        data={documentData}
        keyExtractor={(documentData) => documentData.document_no.toString()}
        renderItem={({
          item: {
            document_no,
            document_date,
            customer_code,
            customer,
            vat_amount,
            vat_excluding,
            total_amount,
          },
        }) => {
          return (
            <View>
              <DocumentView
                document_no={document_no}
                document_date={document_date}
                customer_code={customer_code}
                customer_name={customer}
                vat_amount={vat_amount}
                vat_excluding={vat_excluding}
                total_amount={total_amount}
              />
              <DocumentButtonView />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // body: { flex: 1 },
});

export default DocumentFlatList;
