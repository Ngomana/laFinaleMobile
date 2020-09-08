import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OfflineBanner = ({}) => {
  return (
    <View style={styles.body}>
      <Text style={styles.textBody}>You are not connected to the internet</Text>
    </View>
  );
};

export default OfflineBanner;

const styles = StyleSheet.create({
  body: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    height: 25,
  },
  textBody: {
    color: "white",
    fontWeight: "bold",
  },
});
