import React from 'react';
import {Button, TextInput, View, StyleSheet, Text} from 'react-native';
import {Picker} from '@react-native-community/picker';

const EditItems = (props: any) => {
  return (
    <View>
      <View>
        <Picker
          selectedValue={props.editItemsSelectItemType}
          onValueChange={props.editItemsOnChangeItemType}>
          <Picker.Item value={''} label={'Select Item Type'} />
          <Picker.Item value={'Physical Item'} label={'Physical'} />
          <Picker.Item value={'Service Item'} label={'Service'} />
        </Picker>
      </View>

      <View>
        <Text>Item Code</Text>
        <TextInput
          style={{borderWidth: 1, borderColor: 'blue'}}
          value={props.itemCodeValue}
          onChange={props.onChangeItemCode}
        />

        <Text>Item Description</Text>
        <TextInput
          style={{borderWidth: 1, borderColor: 'blue'}}
          value={props.itemDescriptionValue}
          onChange={props.onChangeItemDescription}
        />

        <Text>Item Quantity</Text>
        <TextInput
          style={{borderWidth: 1, borderColor: 'blue'}}
          value={props.itemQuantityValue}
          onChange={props.onChangeQuantity}
        />

        <Text>Item Cost Price</Text>
        <TextInput
          style={{borderWidth: 1, borderColor: 'blue'}}
          value={props.costPriceValue}
          onChange={props.onChangeCostPrice}
        />

        <Text>Item Selling Price</Text>
        <TextInput
          style={{borderWidth: 1, borderColor: 'blue'}}
          value={props.sellingPriceValue}
          onChange={props.onChangeSellingPrice}
        />
      </View>

      <View>
        <Button title={'Close'} onPress={props.cancelEditItems} />
        <Button title={'Save'} onPress={props.saveEditItems} />
      </View>
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
