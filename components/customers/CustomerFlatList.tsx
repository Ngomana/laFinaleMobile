import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  Modal,
  NativeSyntheticEvent,
} from 'react-native';
import GlobalDisabledButton from '../GlobalComponents/DisabledButton';
import {useSelector, useDispatch} from 'react-redux';
import {
  deleteCustomerAction,
  updateCustomerAction,
} from '../../redux/reducers/Customer_reducer/customer';
import EditCustomer from './EditCustomers';

const CustomerView = () => {
  const [customerId, setCustomerId] = useState('');
  const [customerCode, setCustomerCode] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const onChangeCustomerID = (e: NativeSyntheticEvent<string>) => {
    setCustomerId(e.nativeEvent.text);
  };

  const onChangeCustomerCode = (e: NativeSyntheticEvent<string>) => {
    setCustomerCode(e.nativeEvent.text);
  };

  const onChangeCustomerName = (e: NativeSyntheticEvent<string>) => {
    setCustomerName(e.nativeEvent.text);
  };

  const closeModal = () => {
    setModal(false);
    setCustomerCode('');
    setCustomerId('');
    setCustomerName('');
  };
  const customers = useSelector((state) => state.customers);
  return (
    <View style={styles.body}>
      <FlatList
        data={customers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View>
            <View style={styles.text_body}>
              <Text>Customer ID: {item.customer_id}</Text>
              <Text>Customer Code: {item.code}</Text>
              <Text>Customer Name: {item.name}</Text>
            </View>
            <View>
              {item.name === 'Cash Customer' ? (
                <View style={styles.button_body}>
                  <GlobalDisabledButton
                    buttonText={'Edit'}
                    buttonDisabledProperty={true}
                  />
                  <GlobalDisabledButton
                    buttonText={'Delete'}
                    buttonDisabledProperty={true}
                  />
                </View>
              ) : (
                <View style={styles.button_body}>
                  <View>
                    <Button
                      title={'Edit'}
                      onPress={() => {
                        //setting items variables first
                        setCustomerId(item.customer_id.toString());
                        setCustomerName(item.name);
                        setCustomerCode(item.code);

                        //showing the modal
                        setModal(true);
                      }}
                    />
                  </View>
                  <View>
                    <Button
                      title={'Delete'}
                      onPress={() => {
                        dispatch(
                          deleteCustomerAction({customer_id: item.customer_id}),
                        );
                      }}
                    />
                  </View>
                </View>
              )}
            </View>
          </View>
        )}
      />

      <Modal visible={modal}>
        <EditCustomer
          //on change handlers
          onChangeCustomerId={onChangeCustomerID}
          onChangeCustomerCode={onChangeCustomerCode}
          onChangeCustomerName={onChangeCustomerName}
          editCustomerIdValue={customerId}
          editCustomerCodeValue={customerCode}
          editCustomerNameValue={customerName}
          //button handlers
          saveButtonHandler={() => {
            dispatch(
              updateCustomerAction({
                customer_id: parseFloat(customerId),
                code: customerCode,
                name: customerName,
              }),
            );
          }}
          closeButtonHandler={closeModal}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  flatList_body: {},
  text_body: {},
  button_body: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default CustomerView;
