import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface labelTextProps {
  lblText: string;
  lblText2: string;
}
export const UseLabel = ({ lblText, lblText2 }: Partial<labelTextProps>) => {
  return (
    <View style={styles.mainBody}>
      <Text style={styles.body}>{lblText}</Text>
      <Text style={styles.body2}>{lblText2}</Text>
    </View>
  );
};

export const HeadingText = ({ lblText }: Partial<labelTextProps>) => {
  return (
    <View>
      <Text style={styles.headingTextBody}>{lblText}</Text>
    </View>
  );
};

export const HeaderTitle = ({ lblText }: Partial<labelTextProps>) => {
  return <Text style={styles.headerTitle}>{lblText}</Text>;
};

const styles = StyleSheet.create({
  body: {
    color: "black",
    fontSize: 14,
    fontWeight: "500",
    padding: 1.5,
  },
  body2: {
    color: "blue",
    fontSize: 14,
    marginLeft: 2,
  },
  mainBody: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headingTextBody: {
    fontWeight: "bold",
    fontSize: 15,
  },
  headerTitle: {
    fontSize: 50,
    fontWeight: "500",
  },
});
