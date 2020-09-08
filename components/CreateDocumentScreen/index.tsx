import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStateOrAny, useSelector } from "react-redux";
import DocumentItemsFlatList from "../GlobalComponents/Document_Item_FlatList";
import BottomBarDocumentDetails from "../GlobalComponents/ButtomBarTotalList";
import SearchBox from "../items/SearchBox";

const CreateDocumentScreen = ({ route }: any) => {
  const [documentItems, setDocumentItems] = useState([]);
  const items = useSelector((state: RootStateOrAny) => state.items);
  const {
    customerCode,
    customerName,
    customerEmail,
    customerBalance,
    documentType,
  } = route.params;

  //adding items
  const addItem = (
    item_code: string,
    item_description: string,
    quantity: number,
    selling_price: number
  ) => {
    // @ts-ignore
    setDocumentItems([
      ...documentItems,
      {
        item_code,
        item_description,
        quantity,
        selling_price,
      },
    ]);
    console.log(documentItems);
  };

  const removeItem = (
    item_code: string,
    item_description: string,
    quantity: number,
    selling_price: number
  ) => {
    // console.log(item_code, item_description, quantity, selling_price);
    // @ts-ignore

    console.log(documentItems);
  };
  return (
    <View style={styles.body}>
      <SearchBox />
      <Text>Create: {documentType}</Text>
      <Text>Customer Name: {customerName}</Text>
      <DocumentItemsFlatList
        itemData={items}
        addItem={addItem}
        removeItem={removeItem}
      />
      <BottomBarDocumentDetails />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default CreateDocumentScreen;
