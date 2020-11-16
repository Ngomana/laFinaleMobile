import React from "react";
import { StyleSheet, View, TextInput, Platform } from "react-native";

interface iTextInput {
  textPlaceHolder: string;
  textOnChange: any;
  textValue: string;
  textAutoCorrect: boolean;
}
export const DefaultTextInput = ({
  textOnChange,
  textPlaceHolder,
  textValue,
  textAutoCorrect,
}: iTextInput) => {
  return (
    <TextInput
      placeholder={textPlaceHolder}
      onChange={textOnChange}
      value={textValue}
      autoCorrect={textAutoCorrect}
      underlineColorAndroid={"transparent"}
      style={styles.body}
    />
  );
};

const styles = StyleSheet.create({
  body: {
    width: "95%",
    borderBottomWidth: 0.5,
    textAlign: "center",
    ...Platform.select({
      ios: {
        marginTop: 25,
      },
    }),
  },
});
