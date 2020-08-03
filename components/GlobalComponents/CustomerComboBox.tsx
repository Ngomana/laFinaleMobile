import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import React from 'react';
import {useSelector} from 'react-redux';

const CustomerComboBox = ({selectedCustomer, onSelectCustomerHandler}: any) => {
  // @ts-ignore
  const customers = useSelector((state) => state.customers);
  return (
    <View>
      <Picker
        style={styles.customer_combo_box}
        selectedValue={selectedCustomer}
        onValueChange={onSelectCustomerHandler}>
        <Picker.Item value={''} label={'Select Customer'} />
        {customers.map((customer: any) => {
          return (
            <Picker.Item
              value={customer.name}
              label={'Name: ' + customer.name + ' ' + 'Code: ' + customer.code}
            />
          );
        })}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  customer_combo_box: {
    height: 50,
    width: 500,
  },
});

export default CustomerComboBox;
