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
  body: { flex: 1, justifyContent: "center", alignItems: "center" },
  button_body: {
    borderWidth: 0.3,
    borderColor: "white",
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
