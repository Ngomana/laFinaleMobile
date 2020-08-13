import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const SearchBox = ({ onChangeHandler, searchValue }: any) => {
  return (
    <View style={styles.body}>
      <View style={styles.body_text_view}>
        <TextInput
          style={styles.search_box}
          placeholder={"Search Products & Service Items"}
          onChange={onChangeHandler}
          value={searchValue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //Main body
  body: {
    backgroundColor: "silver",
    height: 40,
    flexDirection: "row",
  },

  //search box view attributes
  body_text_view: {
    flex: 1,
  },
  search_box: {
    backgroundColor: "white",
    margin: 5,
    height: 30,
  },
});

export default SearchBox;
