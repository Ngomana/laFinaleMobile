import React, { useEffect, useState } from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ItemListView from "./ItemListView";
import { DocButton, ToInvoiceButton } from "../documentButtons/documentButton";
import { DefaultSearchBox } from "../textBox/searchBox";
import DocumentItemsFlatList from "../GlobalComponents/Document_Item_FlatList";
import { appSelector } from "../../redux/index";
import ItemFlatList from "../GlobalComponents/itemFlatList";

const ItemsScreen = () => {
  const [searchedItem, setSearchItem] = useState("");

  const items = appSelector((state: any) => {
    if (searchedItem.length === 0) {
      return state.items;
    }
  });
  return (
    <View style={styles.body}>
      <DefaultSearchBox textPlaceholder="Search" textChange={() => {}} />
      <ItemFlatList itemData={items} />
      <View style={styles.addNewItemBody}>
        <ToInvoiceButton buttonText="Add" buttonPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
  },
  addNewItemBody: {
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "absolute",
    bottom: 20,
    right: 20,

    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: Platform.select({
      // android: 3,
      ios: 5,
    }),
    padding: 10,
  },
});

export default ItemsScreen;
