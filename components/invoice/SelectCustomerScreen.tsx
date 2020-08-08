import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import SearchBox from "../items/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import {
  addCustomerToInvoice,
  deleteCustomerToInvoice,
} from "../../redux/reducers/Invoice_reducer/createInvoice";

// @ts-ignore
const SelectCustomerScreen = ({ navigation }) => {
  // @ts-ignore
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  return (
    <View style={styles.body}>
      <SearchBox />

      <FlatList
        data={customers}
        renderItem={({ item }) => {
          return (
            <View>
              <View>
                <Text>{item.customer_id}</Text>
                <Text>{item.code}</Text>
                <Text>{item.name}</Text>
              </View>

              <View>
                <Button
                  title={"Select"}
                  onPress={async () => {
                    await dispatch(deleteCustomerToInvoice(0));

                    dispatch(
                      addCustomerToInvoice({
                        code: item.code,
                        name: item.name,
                      })
                    );

                    navigation.navigate("selectInvoiceItems");
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
    backgroundColor: "pink",
  },
});

export default SelectCustomerScreen;
