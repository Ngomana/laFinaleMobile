import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const DeleteButton = ({ onPressButtonHandler, buttonCaption }) => {
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
    backgroundColor: "red",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "red",
    // flex: 1,
  },
  sub_body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    // backgroundColor: "w",
  },
  button_text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default DeleteButton;
