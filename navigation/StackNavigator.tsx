import * as React from 'react';
import {Button} from 'react-native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import ItemsScreen from '../components/items';
import EditItems from '../components/items/EditItem';
import EditScreen from '../components/items/EditScreen';
import ItemListView from '../components/items/ItemListView';
import CustomerList from '../components/customers/CustomerList';
import CustomerScreen from '../components/customers/index';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'tabNavigator'}
        component={CustomerScreen}
        options={({navigation}) => {
          return {
            headerTitleAlign: 'center',
            headerTitle: 'Mars Industries',
            headerMode: 'screen',
            headerRight: () => (
              <Button
                title={'Invoice'}
                onPress={() => navigation.navigate('createInvoiceScreen')}
              />
            ),
            headerLeft: () => (
              <Button
                title={'Quote'}
                onPress={() => navigation.navigate('createQuoteScreen')}
              />
            ),
          };
        }}
      />
      {/* <Stack.Screen
        name={'EditItemsScreen'}
        component={EditItems}
        options={{
          title: 'Edit Product or Service',
        }}
      /> */}
      {/*<Stack.Screen*/}
      {/*  name={'createQuoteScreen'}*/}
      {/*  component={PostQuotation}*/}
      {/*  options={() => {*/}
      {/*    return {*/}
      {/*      headerTitle: 'Create Quotation',*/}
      {/*    };*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Stack.Screen*/}
      {/*  name={'createInvoiceScreen'}*/}
      {/*  component={PostInvoice}*/}
      {/*  options={() => {*/}
      {/*    return {*/}
      {/*      headerTitle: 'Create Invoice',*/}
      {/*    };*/}
      {/*  }}*/}
      {/*/>*/}
    </Stack.Navigator>
  );
};

export default StackNavigator;
