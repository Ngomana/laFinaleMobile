import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  addInvoiceItems,
  decreaseItemQuantity,
  incrementItemQuantity,
  removeItemFromDocument,
} from "../../redux/reducers/Invoice_reducer/createInvoice";

const DocumentFlatListView = ({}) => {
  return (
    <View style={styles.body}>
      <View style={styles.sub_body2}>
        <View>
          <Text>Item Code: {item_code}</Text>
          <Text>Item Description: {item_description}</Text>
          <Text>Item Quantity: {quantity}</Text>
          <Text>Item Selling Price: {selling_price}</Text>
        </View>

        <View>
          {Array.from(invoiceItems).find((curr) => curr.code === item_code) ? (
            <Button
              color={"red"}
              title={"Remove"}
              onPress={() => {
                dispatch(
                  removeItemFromDocument({
                    code: item_code,
                  })
                );
              }}
            />
          ) : (
            <Button
              title={"Add"}
              onPress={() => {
                dispatch(
                  addInvoiceItems({
                    code: item_code,
                    description: item_description,
                    quantity: 1,
                    selling_price: parseFloat(selling_price),
                    total_amount: parseFloat(selling_price),
                  })
                );
              }}
            />
          )}
        </View>
      </View>

      <View style={styles.quantity_buttons}>
        {invoiceItems.map((product: any) => {
          if (product.code === item_code) {
            return (
              <View style={styles.quantity_buttons_view}>
                <View style={styles.quantity_text_view}>
                  <Text>Quantity: {product.quantity.toString()}</Text>
                  <Text>Total: {product.total_amount.toFixed(2)}</Text>
                </View>

                <View style={styles.quantity_buttons_view_secondary}>
                  <Button
                    color={"#F9F871"}
                    title={"+ Increment"}
                    onPress={() => {
                      dispatch(
                        incrementItemQuantity({
                          code: item_code,
                        })
                      );
                    }}
                  />
                  <Button
                    color={"white"}
                    title={"- Decrease"}
                    onPress={() => {
                      dispatch(
                        decreaseItemQuantity({
                          code: item_code,
                        })
                      );
                    }}
                  />
                </View>
              </View>
            );
          }
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
    backgroundColor: "white",
    marginBottom: 5,
  },
  sub_body2: {
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "silver",
    borderRadius: 201,
  },
});
