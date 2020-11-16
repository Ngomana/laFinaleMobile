import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import DocumentView from "./Dcoument_View";

const DocumentFlatList = ({ documentData }: any) => {
  return (
    <View>
      <FlatList
        style={styles.listView}
        data={documentData}
        keyExtractor={(documentData) => documentData.document_no.toString()}
        renderItem={({
          item: {
            document_type,
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
                document_type={document_type}
                document_no={document_no}
                document_date={document_date}
                customer_code={customer_code}
                customer={customer}
                vat_amount={vat_amount}
                vat_excluding={vat_excluding}
                total_amount={total_amount}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listView: {
    // flex: 1,
  },
});

export default DocumentFlatList;
