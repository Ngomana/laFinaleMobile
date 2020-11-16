import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface iDocButtons {
  buttonText: string;
  buttonPress: any;
}
export const DocButton = ({ buttonText, buttonPress }: iDocButtons) => {
  return (
    <TouchableOpacity
      style={styles.body}
      onPress={buttonPress}
      delayPressIn={2}
    >
      <Text style={styles.textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export const DocDeleteButton = ({ buttonPress, buttonText }: iDocButtons) => {
  return (
    <TouchableOpacity
      style={stylesDeleteButton.body}
      onPress={buttonPress}
      delayPressIn={2}
    >
      <Text style={stylesDeleteButton.textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export const ToInvoiceButton = ({ buttonPress, buttonText }) => {
  return (
    <TouchableOpacity
      style={stylesToInvoiceButton.body}
      onPress={buttonPress}
      delayPressIn={2}
    >
      <Text style={stylesToInvoiceButton.textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: 100,
    borderWidth: 1,
    margin: 2,
    borderRadius: 5,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontWeight: "500",
  },
});

const stylesDeleteButton = StyleSheet.create({
  body: {
    flex: 1,
    width: 100,
    borderWidth: 1,
    margin: 2,
    borderRadius: 5,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "red",
  },
  textStyle: {
    fontWeight: "500",
    color: "red",
  },
});

const stylesToInvoiceButton = StyleSheet.create({
  body: {
    flex: 1,
    width: 100,
    borderWidth: 1,
    margin: 2,
    borderRadius: 5,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    // borderColor: "rgb(67,250,4)",
    backgroundColor: "white",
    borderColor: "green",
  },
  textStyle: {
    fontWeight: "500",
    // color: "rgb(67,250,4)",
    color: "green",
  },
});
