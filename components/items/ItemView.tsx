import React, {useEffect, useState} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteItemAction} from '../../redux/actions/item_actions/item_action';

// @ts-ignore
const ItemView = ({navigation}: any) => {
  const items = useSelector((state) => state.items.items);

  const dispatch = useDispatch();

  return (
    <View>
      <View>
        <FlatList
          data={items}
          keyExtractor={items.item_code}
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
                  onPress={() => navigation.navigate('EditItemsScreen')}
                />
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default ItemView;
