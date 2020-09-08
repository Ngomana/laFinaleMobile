import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import database from "../../watermellonDb";

const ItemsScreen = () => {
  const [itemCode, setItemCode] = useState("");
  const itemCodeInput = (e) => {
    const value = e.nativeEvent.text;
    setItemCode(value);
  };

  const testing = async () => {
    const itemCollection = database.collections.get("items");
    return await itemCollection.create((item) => {
      item.item_code = itemCode;
    });
  };
  return (
    <View style={styles.body}>
      {/*<ItemListView />*/}
      <Text>Testing Watermelon DB</Text>
      <TextInput
        placeholder={"item code"}
        onChange={itemCodeInput}
        value={itemCode}
      />
      <TextInput placeholder={"item description"} />
      <TextInput placeholder={"item quantity"} />
      <TextInput placeholder={"item selling_price"} />
      <TextInput placeholder={"item created_at"} />
      <TextInput placeholder={"item updated at"} />
      <Button title={"add"} onPress={testing} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default ItemsScreen;
