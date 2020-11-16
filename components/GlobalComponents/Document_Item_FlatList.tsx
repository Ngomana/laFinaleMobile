import { DocButton, DocDeleteButton } from "../documentButtons/documentButton";
import { UseLabel } from "../textLalbel";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

interface iItemFlatList {
  itemData: any;
  addItem: any;
  removeItem: any;
  doucmentItems: any;
  incrementQuantity: any;
  decrementQuantity: any;
  editQuantityHandler: any;
  editQuantityValue: any;
  chargeVatOnChange: any;
  chargeVatValue: boolean;
}

const DocumentItemsFlatList = ({
  itemData,
  addItem,
  removeItem,
  documentItems,
  incrementQuantity,
  decrementQuantity,
  editQuantityHandler,
  editQuantityValue,
  chargeVatOnChange,
  chargeVatValue,
}) => {
  return (
    <FlatList
      data={itemData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({
        item: {
          item_code,
          item_description,
          quantity,
          selling_price,
          chargeVatOnItem,
        },
      }) => {
        return (
          <View style={styles.body}>
            <View style={styles.itemsBody}>
              <UseLabel lblText={`Code: `} lblText2={item_code} />
              <UseLabel lblText={`Description: `} lblText2={item_description} />
              <UseLabel lblText={`Quantity: `} lblText2={quantity} />
              <UseLabel lblText={`Price: `} lblText2={selling_price} />
            </View>

            <View style={styles.mainItemButtons}>
              {Array.from(documentItems).find(
                (x: any) => x.item_code === item_code
              ) ? (
                <DocDeleteButton
                  buttonText={"Remove"}
                  buttonPress={() => {
                    removeItem(item_code);
                  }}
                />
              ) : (
                <DocButton
                  buttonText={"Add"}
                  buttonPress={() => {
                    addItem(item_code, item_description, selling_price);
                  }}
                />
              )}
            </View>
            {Array.from(documentItems).find(
              (x: any) => x.item_code === item_code
            ) ? (
              <View style={styles.incrementBody}>
                {documentItems.map((product: any) => {
                  if (product.item_code === item_code) {
                    return (
                      <View style={styles.incrementButtons}>
                        <DocButton
                          buttonText={"+"}
                          buttonPress={() => {
                            incrementQuantity(item_code);
                          }}
                        />
                        <TextInput
                          value={product.item_quauntity.toString()}
                          onChange={() => {
                            editQuantityValue(product.item_code);
                          }}
                          placeholder={"Qty"}
                          keyboardAppearance={"default"}
                          keyboardType={"numeric"}
                          style={styles.quantityInput}
                        />
                        <DocDeleteButton
                          buttonText={"-"}
                          buttonPress={() => {
                            decrementQuantity(item_code);
                          }}
                        />
                      </View>
                    );
                  }
                })}
              </View>
            ) : null}
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  body: {
    borderRadius: 10,
    margin: 10,
    backgroundColor: "white",
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
    padding: 10,
  },
  itemsBody: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  vatBody: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  mainItemButtons: {
    flexDirection: "row",
  },
  incrementButtons: {
    flexDirection: "row",
    maxWidth: "50%",
  },
  incrementBody: {
    alignItems: "center",
    justifyContent: "center",
  },
  quantityInput: {
    width: 100,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default DocumentItemsFlatList;
