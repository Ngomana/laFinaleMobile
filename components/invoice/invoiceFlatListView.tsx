import React, {useState} from 'react';
import {Button, FlatList, Modal, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CreateInvoice from './createInvoiceModal';

const InvoiceFlatListView = () => {
  const [invoice_no, setInvoiceNo] = useState('');
  const [invoice_date, setInvoice_Date] = useState('');
  const [customer, setCustomer] = useState('');
  const [vatAmount, setVatAmount] = useState('');
  const [vatExcluding, setVatExcluding] = useState('');
  const [totalAmount, setAmount] = useState('');

  // @ts-ignore
  const invoices = useSelector((state) => state.invoices);

  const dispatch = useDispatch();

  return (
    <View style={styles.body}>
      <View>
        <FlatList
          data={invoices}
          renderItem={({item}) => {
            return (
              <View>
                <View>
                  <Text>{item.invoice_no}</Text>
                  <Text>{item.invoice_date}</Text>
                </View>

                <View>
                  <Button title={'Edit'} onPress={() => {}} />
                  <Button title={'Delete'} onPress={() => {}} />
                  <Button title={'Share'} onPress={() => {}} />
                </View>
              </View>
            );
          }}
        />
      </View>

      <View>
        <Modal visible={false}>
          <CreateInvoice />
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },

  modal_body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});

export default InvoiceFlatListView;
