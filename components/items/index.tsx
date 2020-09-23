import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const ItemsScreen = () => {
  const [itemCode, setItemCode] = useState("");

  const itemCodeInput = (e) => {
    const value = e.nativeEvent.text;
    setItemCode(value);
  };
  const testing = async () => {};
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
