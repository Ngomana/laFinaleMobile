import React from "react";
import { StyleSheet, Text } from "react-native";

interface iErrorText {
  errorText: string;
}
const ErrorText = ({ errorText }: iErrorText) => {
  return <Text style={styles.textBody}>{errorText}</Text>;
};

const styles = StyleSheet.create({
  textBody: {
    color: "red",
    fontSize: 12,
  },
});
export default ErrorText;
