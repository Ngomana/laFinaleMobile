import {Button, TextInput, View, Picker, Modal, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const EditItems = ({route, navigation}: any) => {
  const [type, setType] = useState('');
  const [id, setId] = useState('');
  const [code, setCode] = useState('');
  const [descritpion, setDescription] = useState();
  const [quantity, setQuantity] = useState('');

  const [cost, setCost] = useState('');
  const [sellingPrice, setSellinPrice] = useState();

  const [clientId, setClientId] = useState();
  const [deviceId, setDeviceId] = useState();

  const {item_type} = route.params;
  const {item_id} = route.params;
  const {item_code} = route.params;
  const {item_description} = route.params;
  const {item_quantity} = route.params;
  const {item_cost} = route.params;
  const {item_sellingPrice} = route.params;

  useEffect(() => {
    setCode(item_code);
  });
  return (
    <View>
      <Modal>
        <Picker
          selectedValue={item_type}
          onValueChange={() => {}}
          // enabled={true}
        >
          <Picker.Item value={''} label={'Select Item Type'} />
          <Picker.Item value={'Physical Item'} label={'Physical'} />
          <Picker.Item value={'Service Item'} label={'Service'} />
        </Picker>
        <TextInput placeholder="item description" />
        <TextInput placeholder="Item Number" value={code} />
        <TextInput placeholder="item code" />
        <TextInput placeholder="item description" />
        <TextInput placeholder="item cost" />
        <Button title={'Close'} onPress={() => {}} />
        <Button
          title={'Save'}
          onPress={() => navigation.navigate('tabNavigator')}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {},
  //Edit products & items Modal
  body_modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
});

export default EditItems;
