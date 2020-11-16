import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, Switch } from "react-native-gesture-handler";
import { DocButton } from "../../documentButtons/documentButton";
import { HeaderTitle, UseLabel } from "../../textLalbel";

interface iItemData {
  itemData: any;
  item_code: string;
  item_description: string;
  item_selling_price: number;
  item_quantity: number;
  chargeVat: boolean;
}

const ItemFlatList = ({ itemData }: iItemData) => {
  return (
    <View style={styles.body}>
      <FlatList
        data={itemData}
        keyExtractor={(itemData: any) => itemData.item_code}
        renderItem={({
          item: { item_code, item_description, selling_price, chargeVatOnItem },
        }) => {
          return (
            <View style={styles.itemBody}>
              <HeaderTitle lblText={"Code:"} lblText2={item_code} />
              <View>
                <UseLabel lblText={"Description"} lblText2={item_description} />
                <UseLabel lblText="Price" lblText2={selling_price.toFixed(2)} />
              </View>
              <View>
                <UseLabel lblText="Charge V.A.T?" />
                <Switch value={chargeVatOnItem} />
              </View>
              <View>
                <DocButton buttonText={"Edit"} />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: { flex: 1 },
  itemBody: {
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
});

export default ItemFlatList;
