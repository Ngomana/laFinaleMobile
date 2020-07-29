import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const CustomerSearchBox = ({
  CustomerSearchBoxValue,
  CustomerPlaceHolder,
}: any) => {
  return (
    <View style={styles.body}>
      <View style={styles.body_text_view}>
        <TextInput
          style={styles.search_box}
          placeholder={CustomerPlaceHolder}
          value={CustomerSearchBoxValue}
        />
      </View>
      <View style={styles.body_clear_text_button_View}>
        <Text style={styles.text_style}>X</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //Main body
  body: {
    backgroundColor: 'silver',
    height: 50,
    flexDirection: 'row',
  },

  //search box view attributes
  body_text_view: {
    width: '90%',
  },
  search_box: {
    backgroundColor: 'white',
    margin: 5,
    height: 40,
    width: '100%',
  },

  //clear button text on search items
  body_clear_text_button_View: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignContent: 'flex-end',
    alignItems: 'center',
  },

  text_style: {
    textAlign: 'center',
    fontSize: 40,
  },
});

export default CustomerSearchBox;
