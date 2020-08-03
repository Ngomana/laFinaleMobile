import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const GlobalDisabledButton = ({
  buttonText,
  buttonHandler,
  buttonDisabledProperty,
}: any) => {
  return (
    <View style={styles.body_button}>
      <TouchableOpacity
        style={styles.global_buttons}
        onPress={buttonHandler}
        disabled={buttonDisabledProperty}>
        <Text style={styles.global_button_text}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body_button: {
    alignItems: 'center',
  },
  global_buttons: {
    backgroundColor: 'transparent',
    paddingHorizontal: 5,
  },
  global_button_text: {
    color: '#ccd2d6',
    fontSize: 20,
  },
});

export default GlobalDisabledButton;
