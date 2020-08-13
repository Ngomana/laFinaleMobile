import React, { useState } from "react";
import { Button, FlatList, Modal, StyleSheet, Text, View } from "react-native";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import SearchBox from "../items/SearchBox";
import {
  addInvoiceItems,
  decreaseItemQuantity,
  incrementItemQuantity,
  removeItemFromDocument,
} from "../../redux/reducers/Invoice_reducer/createInvoice";
import BottomBarDocumentDetails from "../GlobalComponents/ButtomBarTotalList";
import CustomerDetailsBanner from "../GlobalComponents/DocumentDetailsBanner";

const CreateInvoice = ({ navigation }: any) => {
  const [dateModal, setDateModal] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const { name, code } = useSelector(
    (state: RootStateOrAny) => state.customerToInvoice[0]
  );

  const invoiceItems = useSelector(
    (state: RootStateOrAny) => state.documentToInvoice
  );

  const invoices = useSelector((state) => state.invoices);

  const items = useSelector((state: RootStateOrAny) => {
    if (searchValue.length === 0) {
      return state.items;
    }

    return state.items.filter((item: any) => {
      let itemToLowerCase = item.item_description.toLowerCase();
      let searchedItemToLowCase = searchValue.toLowerCase();
      return itemToLowerCase.indexOf(searchedItemToLowCase) > -1;
    });
  });
  const dispatch = useDispatch();

  const invoiceNumber = Math.max(
    ...invoices.map((invoice: number) => invoice.invoice_no),
    1
  );

  // @ts-ignore
  const totalAmount = Array.from(invoiceItems)
    .reduce((acc, cur) => acc + cur.total_amount, 0)
    .toFixed(2);

  // @ts-ignore
  const vatAmount = ((totalAmount * 15) / 115).toFixed(2);
  // @ts-ignore
  const totalExcluding = (totalAmount * (100 / 115)).toFixed(2);

  const searchItems = (e) => {
    const text = e.nativeEvent.text;
    setSearchValue(text);
  };

  const postInvoiceOnly = () => {
    //first post invoice to invoice list
    //vat amount calculation

    console.log(name);

    console.log(`Invoice Number: ${invoiceNumber}`);
    // @ts-ignore

    console.log(`Vat Amount: ${vatAmount.toString()}`);
    console.log(`Total Excluding : ${totalExcluding}`);
    console.log(`Total Amount: ${totalAmount}`);
  };

  return (
    <View style={styles.body}>
      <CustomerDetailsBanner
        customerCode={code}
        customerName={name}
        invoiceDate={"20/02/2020"}
        invoiceNumber={invoiceNumber}
        invoiceDueDate={"28/02/2020"}
      />
      <View>
        <SearchBox searchValue={searchValue} onChangeHandler={searchItems} />
      </View>

      <View style={{ flex: 1, backgroundColor: "silver" }}>
        <FlatList
          data={items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({
            item: { item_code, item_description, quantity, selling_price },
          }) => {
            return (
              <View
                style={{
                  flexDirection: "column",
                  backgroundColor: "white",
                  marginBottom: 5,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    shadowColor: "silver",
                    borderRadius: 201,
                  }}
                >
                  <View>
                    <Text>Item Code: {item_code}</Text>
                    <Text>Item Description: {item_description}</Text>
                    <Text>Item Quantity: {quantity}</Text>
                    <Text>Item Selling Price: {selling_price}</Text>
                  </View>

                  <View>
                    {Array.from(invoiceItems).find(
                      (curr) => curr.code === item_code
                    ) ? (
                      <Button
                        color={"red"}
                        title={"Remove"}
                        onPress={() => {
                          dispatch(
                            removeItemFromDocument({
                              code: item_code,
                            })
                          );
                        }}
                      />
                    ) : (
                      <Button
                        title={"Add"}
                        onPress={() => {
                          dispatch(
                            addInvoiceItems({
                              code: item_code,
                              description: item_description,
                              quantity: 1,
                              selling_price: parseFloat(selling_price),
                              total_amount: parseFloat(selling_price),
                            })
                          );
                        }}
                      />
                    )}
                  </View>
                </View>

                <View style={styles.quantity_buttons}>
                  {invoiceItems.map((product: any) => {
                    if (product.code === item_code) {
                      return (
                        <View style={styles.quantity_buttons_view}>
                          <View style={styles.quantity_text_view}>
                            <Text>Quantity: {product.quantity.toString()}</Text>
                            <Text>
                              Total: {product.total_amount.toFixed(2)}
                            </Text>
                          </View>

                          <View style={styles.quantity_buttons_view_secondary}>
                            <Button
                              color={"#F9F871"}
                              title={"+ Increment"}
                              onPress={() => {
                                dispatch(
                                  incrementItemQuantity({
                                    code: item_code,
                                  })
                                );
                              }}
                            />
                            <Button
                              color={"white"}
                              title={"- Decrease"}
                              onPress={() => {
                                dispatch(
                                  decreaseItemQuantity({
                                    code: item_code,
                                  })
                                );
                              }}
                            />
                          </View>
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
        <Button title={"Post Only"} onPress={postInvoiceOnly} />
      </View>
      <BottomBarDocumentDetails
        sum_total={totalAmount}
        vat_amount={vatAmount}
        total_excluding={totalExcluding}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
  },
  quantity_buttons: {
    backgroundColor: "#2983F1",
    borderRadius: 15,
    margin: 10,
  },
  quantity_buttons_view: {
    padding: 10,
  },
  quantity_text_view: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  quantity_buttons_view_secondary: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});

export default CreateInvoice;

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
