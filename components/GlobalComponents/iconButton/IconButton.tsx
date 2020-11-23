import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Entypo";

interface IconButtonProps {
  iconName: string;
  iconSize: number;
  iconColor: string;
  buttonPress: any;
  buttonText: string;
}

const IconButton = ({
  iconName,
  iconSize,
  iconColor,
  buttonPress,
  buttonText,
}: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={buttonPress} style={styles.container}>
      <Text>{buttonText}</Text>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
  },
});
