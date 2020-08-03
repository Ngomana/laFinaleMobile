import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const EditCustomer = ({
  onChangeCustomerId,
  onChangeCustomerCode,
  onChangeCustomerName,
  editCustomerIdValue,
  editCustomerCodeValue,
  editCustomerNameValue,

  //button handlers
  saveButtonHandler,
  closeButtonHandler,
}: any) => {
  return (
    <View style={styles.body}>
      <TextInput
        style={styles.text_body}
        placeholder={'Customer ID'}
        onChange={onChangeCustomerId}
        value={editCustomerIdValue}
      />
      <TextInput
        style={styles.text_body}
        placeholder={'Customer Code'}
        onChange={onChangeCustomerCode}
        value={editCustomerCodeValue}
      />
      <TextInput
        style={styles.text_body}
        placeholder={'Customer Name'}
        onChange={onChangeCustomerName}
        value={editCustomerNameValue}
      />

      <View>
        <Button title={'Save'} onPress={saveButtonHandler} />
        <Button title={'Close'} onPress={closeButtonHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#49b6d7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_body: {
    borderWidth: 1.5,
    borderColor: 'white',
    fontSize: 50,
  },
});

export default EditCustomer;
