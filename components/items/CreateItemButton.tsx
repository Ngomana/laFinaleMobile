import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const CreateItemButton = (props: any) => {
  return (
    <View style={styles.body_button}>
      <TouchableOpacity
        style={styles.global_buttons}
        onPress={props.create_item_button_handler}>
        <Text style={styles.global_button_text}>Create Product or Service</Text>
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
    color: '#2973f1',
    fontSize: 20,
  },
});

export default CreateItemButton;
