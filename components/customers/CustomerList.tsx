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
import {useDispatch, useSelector} from 'react-redux';
import {
  createCustomerAction,
  deleteCustomerAction,
} from '../../redux/reducers/Customer_reducer/customer';
import CustomerSearchBox from './CustomerSearchBox';

const CustomerList = () => {
  const [customerId, setCustomerId] = useState('');
  const [customerCode, setCustomerCode] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [addCustomerModal, setCustomerModal] = useState(false);

  const customers = useSelector((state) => state.customers);

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

  const editFlatListButton = (customer_id) => {
    dispatch(deleteCustomerAction({customer_id}));
    console.log(customer_id.item_code);
  };

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
      <CustomerView
        customerData={customers}
        editCustomerButton={editFlatListButton}
      />
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
    backgroundColor: 'white',
  },
});

export default CustomerList;
