import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface iFloatingButtonProps {
  buttonText: string;
  onPressButton: any;
}

const FloatingButton = ({
  buttonText,
  onPressButton,
}: iFloatingButtonProps) => {
  return (
    <TouchableOpacity onPress={onPressButton}>
      <Text>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  body: {},
});
export default FloatingButton;
