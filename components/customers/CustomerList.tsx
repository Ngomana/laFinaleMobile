import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  NativeSyntheticEvent,
  Button,
} from 'react-native';
import AddCustomer from './AddCustomer';
import CustomerView from './CustomerFlatList';
import {useDispatch} from 'react-redux';
import {createCustomerAction} from '../../redux/reducers/Customer_reducer/customer';
import CustomerSearchBox from './CustomerSearchBox';

const CustomerList = () => {
  const [customerId, setCustomerId] = useState('');
  const [customerCode, setCustomerCode] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [addCustomerModal, setCustomerModal] = useState(false);

  const onChangeCustomerID = (e: NativeSyntheticEvent<string>) => {
    setCustomerId(e.nativeEvent.text);
  };

  const onChangeCustomerCode = (e: NativeSyntheticEvent<string>) => {
    setCustomerCode(e.nativeEvent.text);
  };

  const onChangeCustomerName = (e: NativeSyntheticEvent<string>) => {
    setCustomerName(e.nativeEvent.text);
  };

  const showAddCustomerModal = () => {
    setCustomerModal(true);
  };

  const hideCustomerModal = () => {
    setCustomerModal(false);
  };

  const dispatch = useDispatch();

  const addCustomer = () => {
    dispatch(
      createCustomerAction({
        customer_id: parseFloat(customerId),
        code: customerCode,
        name: customerName,
      }),
    );
  };
  return (
    <View style={styles.body}>
      <CustomerSearchBox CustomerPlaceHolder={'Search Customers'} />
      <View>
        <Button title={'Add New Customer'} onPress={showAddCustomerModal} />
      </View>
      <CustomerView />
      <Modal visible={addCustomerModal}>
        <AddCustomer
          customerNameValue={customerName}
          onChangeCustomerName={onChangeCustomerName}
          customerCodeValue={customerCode}
          onChangeCustomerCode={onChangeCustomerCode}
          customerIdValue={customerId}
          onChangeCustomerId={onChangeCustomerID}
          addCustomer={addCustomer}
          closeCustomerModal={hideCustomerModal}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'pink',
  },
});

export default CustomerList;
