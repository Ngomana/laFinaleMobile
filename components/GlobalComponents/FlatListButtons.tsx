import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const FlatListButton = ({ onPressHandler, buttonCaption }) => {
  return (
    <View style={styles.body}>
      <TouchableOpacity style={styles.sub_body}>
        <Text style={styles.button_text}>{buttonCaption}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    borderColor: "white",
    borderWidth: 0.5,
    borderRadius: 5,
  },
  sub_body: {
    flex: 1,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  button_text: {
    color: "white",
  },
});

export default FlatListButton;
