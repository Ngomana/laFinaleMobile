import React, {SyntheticEvent, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import CustomerComboBox from '../GlobalComponents/CustomerComboBox';
import {useSelector} from 'react-redux';
import {Picker} from '@react-native-community/picker';

const CreateInvoice = () => {
  // const
  const [invoiceDetails, setInvoiceDetails] = useState([
    {
      code: '',
      description: '',
    },
  ]);
  const [selectedItem, setSelectedItem] = useState('Select Product');
  const [productPrice, setProductPrice] = useState('');

  const items = useSelector((state) => state.items);

  const onChangeProductItem = (e: any) => {
    setSelectedItem(e);

    console.log(e);
  };

  return (
    <View style={styles.body}>
      <View>
        <Text>Invoice Date</Text>
        <TextInput placeholder={'Invoice Date'} />
        {/*<CustomerComboBox />*/}
      </View>

      <View>
        <View style={{marginBottom: 100}}>
          <Picker
            selectedValue={selectedItem}
            onValueChange={onChangeProductItem}
            style={{
              height: 50,
              width: 400,
              fontSize: '',
            }}>
            <Picker.Item value={''} label={'Select Invoice Item'} />
            {items.map((item: any) => {
              return (
                <Picker.Item
                  value={item.item_code}
                  label={item.item_description}
                />
              );
            })}
          </Picker>
        </View>
        <View>
          <Button title={'+'} onPress={() => {}} />
          <Button title={'-'} onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default CreateInvoice;
