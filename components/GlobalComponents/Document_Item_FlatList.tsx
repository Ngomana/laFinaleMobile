import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import DocumentItemView from "./Document_Items_View";

const DocumentItemsFlatList = ({ itemData, addItem, removeItem }: any) => {
  return (
    <FlatList
      data={itemData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({
        item: { item_code, item_description, quantity, selling_price },
      }) => {
        return (
          <DocumentItemView
            item_code={item_code}
            item_description={item_description}
            quantity={quantity}
            selling_price={selling_price}
            addItemHandler={() => {
              addItem(item_code, item_description, quantity, selling_price);
            }}
            removeItemHandler={() => {
              removeItem(item_code, item_description, quantity, selling_price);
            }}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default DocumentItemsFlatList;
