import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const DefaultSearchBox = ({
  searchBoxValue,
  searchBoxOnChange,
  searchBoxPlaceHolder,
}: any) => {
  return (
    <View style={styles.body}>
      <TextInput
        style={styles.search_box}
        value={searchBoxValue}
        onChange={searchBoxOnChange}
        placeholder={searchBoxPlaceHolder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "silver",
  },

  search_box: {
    padding: 5,
  },
});
