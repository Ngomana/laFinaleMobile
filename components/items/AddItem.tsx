import React, { useState } from "react";
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  Button,
  Modal,
} from "react-native";
import { Picker } from "@react-native-community/picker";

import { useDispatch } from "react-redux";
import { createItemAction } from "../../redux/reducers/item/items";

export const AddItem = (props: any) => {
  const [item_code, set_item_code] = useState("");
  const [item_id, setItem_Id] = useState("");
  const [item_type, setItem_Type] = useState("");
  const [item_description, setItem_description] = useState("");
  const [cost_price, setItem_Cost_Price] = useState("");
  const [quantity, setItem_Quantity] = useState("");
  const [selling_price, setItem_SellingPrice] = useState("");
  const [clientId, setClientId] = useState("Tony");
  const [deviceId, setDeviceId] = useState("ios");

  const [picker, setPicker] = useState(true);

  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(
      createItemAction({
        item_id: parseFloat(item_id),
        item_code: item_code,
        item_type: item_type,
        item_description: item_description,
        cost_price: parseFloat(cost_price),
        quantity: parseFloat(quantity),
        selling_price: parseFloat(selling_price),
      })
    );
    set_item_code("");
    setItem_Id("");
    setItem_description("");
    setItem_Cost_Price("");
    setItem_Quantity("");
    setItem_SellingPrice("");
  };

  const onChangeNumberHandler = (e: NativeSyntheticEvent<string>): void => {
    // @ts-ignore
    const value = e.nativeEvent.text;
    setItem_Id(value);
  };

  const onChangeTypeHandler = (itemValue: any) => {
    setItem_Type(itemValue);
  };

  const onChangeDescription = (description: NativeSyntheticEvent<string>) => {
    // @ts-ignore
    setItem_description(description.nativeEvent.text);
  };

  const onChangeItemCode = (code: NativeSyntheticEvent<string>): void => {
    // @ts-ignore
    set_item_code(code.nativeEvent.text);
  };

  const onChange_item_cost = (
    item_cost_price: NativeSyntheticEvent<string>
  ) => {
    const itemCostPrice = item_cost_price.nativeEvent.text;

    setItem_Cost_Price(itemCostPrice);
  };

  const onChange_item_selling_price = (
    item_selling_price: NativeSyntheticEvent<string>
  ) => {
    setItem_SellingPrice(item_selling_price.nativeEvent.text);
  };

  const onChange_item_quantity = (
    item_quantity: NativeSyntheticEvent<string>
  ) => {
    setItem_Quantity(item_quantity.nativeEvent.text);
  };
  return (
    <View>
      <Modal visible={props.add_item_modal_view} animationType={"slide"}>
        <Picker
          selectedValue={item_type}
          onValueChange={onChangeTypeHandler}
          enabled={picker}
          mode={"dropdown"}
        >
          <Picker.Item value={""} label={"Select Item Type"} />
          <Picker.Item value={"Physical Item"} label={"Physical"} />
          <Picker.Item value={"Service Item"} label={"Service"} />
        </Picker>
        <TextInput
          placeholder="Item Number"
          onChange={onChangeNumberHandler}
          value={item_id}
        />
        <TextInput
          placeholder="item code"
          onChange={onChangeItemCode}
          value={item_code}
        />
        <TextInput
          placeholder="item description"
          onChange={onChangeDescription}
          value={item_description}
        />
        <TextInput
          placeholder={"Quantity"}
          value={quantity}
          onChange={onChange_item_quantity}
        />
        <TextInput
          placeholder="Item Cost Price"
          onChange={onChange_item_cost}
          value={cost_price}
        />
        <TextInput
          placeholder={"Selling Price"}
          value={selling_price}
          onChange={onChange_item_selling_price}
        />
        <Button title="add" onPress={addHandler} />
        <Button title={"Close"} onPress={props.close_addItem_modal} />
      </Modal>
    </View>
  );
};
