import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MainButton = ({ onPressHandler, buttonCaption }: any) => {
  return (
    <View style={styles.body}>
      <TouchableOpacity onPress={onPressHandler} style={styles.button_body}>
        <Text style={styles.button_text}>{buttonCaption}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: { justifyContent: "center", alignItems: "center", margin: 5 },
  button_body: {
    borderWidth: 0.3,
    borderColor: "rgb(5,34,79)",
    // width: "70%",
    borderRadius: 5,
  },
  button_text: {
    textAlign: "center",
    color: "blue",
    fontSize: 15,
    margin: 10,
  },
});

export default MainButton;
