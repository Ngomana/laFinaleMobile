import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const QuantityButton = ({ addQuantity, minusQuantity }: any) => {
  return (
    <View>
      <TouchableOpacity onPress={addQuantity}>
        <Icon name={"plus"} size={20} />
        <Text>{}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={minusQuantity}>
        <Icon name={"minus"} size={20} />
        <Text>{}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default QuantityButton;
