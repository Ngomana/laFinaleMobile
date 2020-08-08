import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";

const TestingItems = ({ la_item, dem_items }: any) => {
  return dem_items.map((product: any) => {
    if (product.code === la_item.item_code) {
      return (
        <View>
          <Text>{product.quantity.toString()}</Text>
          <Button title={"Increment"} onPress={() => {}} />
          <Button title={"Decrease"} onPress={() => {}} />
        </View>
      );
    } else {
      return <Text>I love you</Text>;
    }
  });
};

export default TestingItems;
