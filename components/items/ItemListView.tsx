import React, {useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  FlatList,
  Modal,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteItemAction} from '../../redux/actions/item_actions/item_action';
import {State} from 'react-native-gesture-handler';

const ItemListView = ({navigation}: any) => {
  const items = useSelector((state: State) => state.items.items);
  const dispatch = useDispatch();

  return (
    <View style={styles.body}>
      <View style={styles.body_search_box}>
        <TextInput
          style={styles.search_box}
          placeholder={'Search Products & Service Items'}
        />
      </View>
      <View>
        <Button title="Create Product OR Service Item" />
      </View>
      <View>
        <View>
          <FlatList
            data={items}
            keyExtractor={items.item_id}
            renderItem={({item}) => (
              <View key={item.item_code}>
                <Text>{item.item_id}</Text>
                <Text>{item.item_type}</Text>
                <Text>{item.item_code}</Text>
                <Text>{item.item_description}</Text>
                <Text>{item.cost_price}</Text>
                <Text>{item.quantity}</Text>
                <Text>{item.selling_price}</Text>
                <View>
                  <Button
                    title="Delete"
                    onPress={() => {
                      dispatch(deleteItemAction(item.item_code));
                    }}
                  />
                  <Button
                    title="Edit"
                    onPress={() => {
                      // console.log(item.item_code);
                      // navigation.navigate('EditItemsScreen', {
                      //   item_code: item.item_code,
                      // });
                    }}
                  />
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },

  //Search box view
  body_search_box: {
    backgroundColor: 'silver',
    height: 50,
  },
  search_box: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
  },
});

export default ItemListView;
