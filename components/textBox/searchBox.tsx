import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface iDefaultTextType {
  textChange: any;
  textValue: string;
  textPlaceholder: string;
}
export const DefaultSearchBox = ({
  textChange,
  textValue,
  textPlaceholder,
}: iDefaultTextType) => {
  return (
    <View style={styles.body}>
      <TextInput
        onChange={textChange}
        value={textValue}
        placeholder={textPlaceholder}
        style={styles.textBody}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    minHeight: 40,
    width: "100%",
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },

  textBody: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "white",
    height: 10,
    width: "99%",
    borderWidth: 5,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
});
