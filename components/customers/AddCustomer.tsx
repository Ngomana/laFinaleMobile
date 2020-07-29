import React from 'react';
import {Button, Modal, StyleSheet, Text, TextInput, View} from 'react-native';

const AddCustomer = ({
  customerNameValue,
  onChangeCustomerName,
  customerCodeValue,
  onChangeCustomerCode,
  customerIdValue,
  onChangeCustomerId,
  addCustomer,
  closeCustomerModal,
}: any) => {
  return (
    <View style={styles.body}>
      <Text>Customer ID</Text>
      <TextInput
        placeholder={'Customer ID'}
        value={customerIdValue}
        onChange={onChangeCustomerId}
      />

      <Text>Customer Code</Text>
      <TextInput
        placeholder={'Enter Customer Code'}
        value={customerCodeValue}
        onChange={onChangeCustomerCode}
      />

      <Text>Name</Text>
      <TextInput
        placeholder={'Customer Name'}
        value={customerNameValue}
        onChange={onChangeCustomerName}
      />

      <View>
        <Button title={'Add'} onPress={addCustomer} />
        <Button title={'Close'} onPress={closeCustomerModal} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AddCustomer;
