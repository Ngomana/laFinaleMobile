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
import {deleteItemAction} from '../../redux/reducers/item_reducer/items';
import {State} from 'react-native-gesture-handler';
import SearchBox from './SearchBox';
import CreateItemButton from './CreateItemButton';
import ItemView from './ItemView';
import {AddItem} from './AddItem';

const ItemListView = () => {
  const [modal, setModal] = useState(false);
  const items = useSelector((state: State) => state.items.items);
  const dispatch = useDispatch();

  return (
    <View style={styles.body}>
      <SearchBox />
      <CreateItemButton create_item_button_handler={() => setModal(true)} />
      <AddItem
        add_item_modal_view={modal}
        close_addItem_modal={() => setModal(false)}
      />
      <ItemView />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#04264a',
  },
});

export default ItemListView;
