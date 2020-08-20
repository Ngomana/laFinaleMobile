import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainButton from "./MainButton";
import QuantityButton from "./QuantityButtons";

const DocumentItemView = ({
  item_code,
  item_description,
  quantity,
  selling_price,
  addItemHandler,
  removeItemHandler,
  addQuantityHandler,
  minusQuantityHandler,
}: any) => {
  return (
    <View style={styles.body}>
      <View>
        <Text>Code: {item_code}</Text>
        <Text>Description: {item_description}</Text>
        <Text>Quantity: {quantity}</Text>
        <Text>Selling Price: {selling_price}</Text>
      </View>

      <View>
        <MainButton buttonCaption={"Add"} onPressHandler={addItemHandler} />
        <MainButton
          buttonCaption={"Remove"}
          onPressHandler={removeItemHandler}
        />
        <QuantityButton
          addQuanity={() => {
            addQuantityHandler(item_code);
          }}
          minusQuantity={() => {
            minusQuantityHandler(item_code);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default DocumentItemView;
