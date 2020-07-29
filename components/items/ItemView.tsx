import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Modal,
  NativeSyntheticEvent,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteItemAction,
  updateItemAction,
} from '../../redux/reducers/item_reducer/items';
import EditItems from './EditItem';

const ItemView = () => {
  const [item_id, set_item_id] = useState('');
  const [item_code, set_item_code] = useState('');
  const [item_description, set_item_description] = useState('');
  const [item_cost_price, set_item_cost_price] = useState('');
  const [item_quantity, set_item_quantity] = useState('');
  const [item_selling_price, set_item_selling_price] = useState('');
  const [modal, setModal] = useState(false);

  // @ts-ignore
  const items = useSelector((state) => state.items);

  const dispatch = useDispatch();

  const update_items_handler = () => {
    dispatch(
      updateItemAction({
        item_id: item_id,
        item_code: item_code,
        item_description: item_description,
        cost_price: parseFloat(item_cost_price),
        quantity: parseFloat(item_quantity),
        selling_price: parseFloat(item_selling_price),
      }),
    );
  };

  const cancelEditItemsHandler = () => {
    set_item_id('');
    set_item_code('');
    set_item_description('');
    set_item_cost_price(0);
    set_item_quantity(0);
    set_item_selling_price(0);
    setModal(false);
  };

  const item_code_change_handler = (e: NativeSyntheticEvent<string>): void => {
    set_item_code(e.nativeEvent.text);
  };

  const item_description_change_handler = (
    e: NativeSyntheticEvent<string>,
  ): void => {
    set_item_description(e.nativeEvent.text);
  };

  const item_quantity_change_handler = (e: NativeSyntheticEvent<string>) => {
    set_item_quantity(e.nativeEvent.text);
  };

  const item_cost_price_change_handler = (e: NativeSyntheticEvent<string>) => {
    set_item_cost_price(e.nativeEvent.text);
  };

  const item_selling_price_change_handler = (
    e: NativeSyntheticEvent<string>,
  ) => {
    set_item_selling_price(e.nativeEvent.text);
  };
  return (
    <View style={styles.body}>
      <View style={styles.item_list_view}>
        <FlatList
          data={items}
          // keyExtractor={(item, index) => 'key' + index}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View key={item.item_code}>
              <Text>{item.item_id}</Text>
              <Text>{item.item_type}</Text>
              <Text>{item.item_code}</Text>
              <Text>{item.item_description}</Text>
              <Text>Item Cost: {item.cost_price}</Text>
              <Text>{item.quantity}</Text>
              <Text>{item.selling_price}</Text>
              <View>
                <Button
                  title="Delete"
                  onPress={() => {
                    dispatch(deleteItemAction({item_id: item.item_id}));
                  }}
                />
                <Button
                  title="Edit"
                  onPress={() => {
                    set_item_id(item.item_id);
                    set_item_code(item.item_code);
                    set_item_description(item.item_description);
                    set_item_cost_price(item.cost_price.toString());
                    set_item_quantity(item.quantity.toString());
                    set_item_selling_price(item.selling_price.toString());
                    setModal(true);
                  }}
                />
              </View>
            </View>
          )}
        />
      </View>
      <Modal visible={modal} animationType={'slide'}>
        <EditItems
          //item code
          onChangeItemCode={item_code_change_handler}
          itemCodeValue={item_code}
          //item description
          onChangeItemDescription={item_description_change_handler}
          itemDescriptionValue={item_description}
          //item quantity
          onChangeQuantity={item_quantity_change_handler}
          itemQuantityValue={item_quantity}
          //cost price
          onChangeCostPrice={item_cost_price_change_handler}
          costPriceValue={item_cost_price}
          //selling price
          onChangeSellingPrice={item_selling_price_change_handler}
          sellingPriceValue={item_selling_price}
          //buttons actions
          cancelEditItems={cancelEditItemsHandler}
          saveEditItems={update_items_handler}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  item_list_view: {
    flex: 1,
  },
  modal_body: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default ItemView;
