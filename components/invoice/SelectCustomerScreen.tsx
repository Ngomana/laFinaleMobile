import React from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import SearchBox from '../items/SearchBox';
import {useSelector} from 'react-redux';
import {Picker} from '@react-native-community/picker';

const SelectCustomerScreen = ({navigation}) => {
  // @ts-ignore
  const customers = useSelector((state) => state.customers);
  return (
    <View style={styles.body}>
      <SearchBox />

      <FlatList
        data={customers}
        renderItem={({item}) => {
          return (
            <View>
              <View>
                <Text>{item.customer_id}</Text>
                <Text>{item.code}</Text>
                <Text>{item.name}</Text>
              </View>

              <View>
                <Button
                  title={'Select'}
                  onPress={() => {
                    navigation.navigate('selectInvoiceItems');
                  }}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'pink',
  },
});

export default SelectCustomerScreen;
