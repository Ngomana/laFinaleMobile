import React, { SyntheticEvent, useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import CustomerComboBox from "../GlobalComponents/CustomerComboBox";
import { useSelector, useDispatch } from "react-redux";
import SearchBox from "../items/SearchBox";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {
  addInvoiceItems,
  incrementItemQuantity,
  decreaseItemQuantity,
  typedItemQuantity,
  getInvoiceQuantityItems,
} from "../../redux/reducers/Invoice_reducer/createInvoice";
import BottomBarDocumentDetails from "../GlobalComponents/ButtomBarTotalList";

const CreateInvoice = ({ navigation }) => {
  const [dateModal, setDateModal] = useState(true);
  const [quantity, setQuantity] = useState("");

  const items = useSelector((state) => state.items);
  const customer = useSelector((state) => state.customerToInvoice);
  const invoiceItems = useSelector((state) => state.documentToInvoice);
  const data = useSelector((state) => state.documentToInvoice);

  const dispatch = useDispatch();

  const totalAmountCalculation = () => {
    // @ts-ignore
    return Array.from(invoiceItems)
      .reduce((acc, cur) => acc + cur.total_amount, 0)
      .toFixed(2);
  };

  const vatCalculation = () => {
    const totalAmount = Array.from(invoiceItems).reduce(
      (acc, cur) => acc + cur.total_amount,
      0
    );
    return ((totalAmount * 15) / 115).toFixed(2);
  };

  const vatExcludingCalculation = () => {
    const totalAmount = Array.from(invoiceItems).reduce(
      (acc, cur) => acc + cur.total_amount,
      0
    );
    return (totalAmount * (100 / 115)).toFixed(2);
  };

  return (
    <View style={styles.body}>
      <View>
        <Text>Customer Info:</Text>
        {customer.map((customerToInvoice: any) => (
          <View>
            <Text>{customerToInvoice.code}</Text>
            <Text>{customerToInvoice.name}</Text>
          </View>
        ))}

        <View>
          <Button title={"Edit Date"} onPress={() => {}} />
        </View>
      </View>
      <View>
        <SearchBox />
      </View>

      <View style={{ flex: 1, backgroundColor: "silver" }}>
        <FlatList
          data={items}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  // justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    // borderWidth: 0.5,
                    marginBottom: 5,
                    shadowColor: "silver",
                    backgroundColor: "white",
                  }}
                >
                  <View>
                    <Text>Item Code: {item.item_code}</Text>
                    <Text>Item Description: {item.item_description}</Text>
                    <Text>Item Quantity: {item.quantity}</Text>
                    <Text>Item Selling Price: {item.selling_price}</Text>
                  </View>

                  <View>
                    <Button title={"Remove"} onPress={() => {}} />
                    <Button
                      title={"Add"}
                      onPress={() => {
                        dispatch(
                          addInvoiceItems({
                            code: item.item_code,
                            description: item.item_description,
                            quantity: 1,
                            selling_price: parseFloat(item.selling_price),
                            total_amount: parseFloat(item.selling_price),
                          })
                        );
                        console.log(invoiceItems);
                      }}
                    />
                  </View>
                </View>

                <View>
                  {invoiceItems.map((product: any) => {
                    if (product.code === item.item_code) {
                      return (
                        <View>
                          <Text>{product.quantity.toString()}</Text>
                          <Text>{product.total_amount.toString()}</Text>
                          <Button
                            title={"Increment"}
                            onPress={() => {
                              dispatch(
                                incrementItemQuantity({
                                  code: item.item_code,
                                })
                              );
                            }}
                          />
                          <Button
                            title={"Decrease"}
                            onPress={() => {
                              dispatch(
                                decreaseItemQuantity({
                                  code: item.item_code,
                                })
                              );
                            }}
                          />
                        </View>
                      );
                    }
                  })}
                </View>
              </View>
            );
          }}
        />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button title={"Post & Share"} onPress={() => {}} />
        <Button title={"Post Only"} onPress={() => {}} />
      </View>
      <BottomBarDocumentDetails
        sum_total={totalAmountCalculation()}
        vat_amount={vatCalculation()}
        total_excluding={vatExcludingCalculation()}
      />

      <View>
        <Modal visible={false}>
          <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <Text>Date Picker</Text>

            <View>
              <Button
                title={"Set"}
                onPress={() => {
                  setDateModal(false);
                }}
              />
              <Button title={"Cancel"} onPress={() => {}} />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "white",
  },
});

export default CreateInvoice;
