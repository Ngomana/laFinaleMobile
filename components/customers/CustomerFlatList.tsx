import React from 'react';
import {Text, View, Button, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const CustomerView = ({
  editCustomerButton,
  deleteCustomerButton,
  customerData,
  customerItem,
}: any) => {
  const customers = useSelector((state) => state.customers);
  return (
    <View style={styles.body}>
      <FlatList
        data={customers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View>
            <View>
              <Text>Customer ID: {item.customer_id}</Text>
              <Text>Customer Code: {item.code}</Text>
              <Text>Customer Name: {item.name}</Text>
            </View>
            <View>
              {item.name === 'Cash Customer' ? (
                <View>
                  <Button title={'Testing'} onPress={() => {}} />
                  <Button title={'Testing'} onPress={() => {}} />
                </View>
              ) : (
                <View>
                  <Button title={'Delete'} onPress={deleteCustomerButton} />
                  <Button title={'Edit'} onPress={editCustomerButton} />
                </View>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    // flex: 1,
  },
});

export default CustomerView;
