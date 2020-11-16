import React from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import MainButton from "./MainButton";
import QuantityButton from "./QuantityButtons";
import { UseLabel } from "../textLalbel";
import DocumentButtonView from "./DocumentButtons_View";
import { DocButton, DocDeleteButton } from "../documentButtons/documentButton";

interface iItemDetails {
  item_code: string;
  item_description: string;
  itemData: any;
}

const DocumentItemView = ({
  item_code,
  item_description,
  quantity,
  selling_price,
  addItemHandler,
  removeItemHandler,
  addQuantityHandler,
  minusQuantityHandler,
  itemData,
}: any) => {
  return (
    <View style={styles.body}>
      <View style={styles.itemsBody}>
        <UseLabel lblText={`Code: `} lblText2={item_code} />
        <UseLabel lblText={`Description: `} lblText2={item_description} />
        <UseLabel lblText={`Quantity: `} lblText2={quantity} />
        <UseLabel lblText={`Price: `} lblText2={selling_price} />
      </View>

      <View style={styles.vatBody}>
        <UseLabel lblText={"Charge VAT?"} />
        <Switch value={false} disabled={true} />
      </View>
      <View style={styles.mainItemButtons}>
        {itemData.item_description ? (
          <DocButton buttonText={"Add"} buttonPress={() => {}} />
        ) : (
          <DocDeleteButton buttonText={"Remove"} buttonPress={() => {}} />
        )}
      </View>
      <View style={styles.incrementButtons}>
        <DocButton buttonText={"+"} buttonPress={() => {}} />
        <TextInput
          placeholder={"Qty"}
          keyboardAppearance={"default"}
          keyboardType={"numeric"}
          style={styles.quantityInput}
        />

        <DocDeleteButton buttonText={"-"} buttonPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    borderRadius: 2,
    borderBottomWidth: 1.5,
    margin: 5,
  },
  itemsBody: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  vatBody: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "blue",
  },
  mainItemButtons: {
    flexDirection: "row",
  },
  incrementButtons: {
    flexDirection: "row",
  },
  quantityInput: {
    width: 100,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default DocumentItemView;
