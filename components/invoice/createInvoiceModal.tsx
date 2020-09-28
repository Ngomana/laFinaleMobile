import React, { SyntheticEvent, useEffect, useState } from "react";
import { Button, FlatList, Modal, StyleSheet, Text, View } from "react-native";
import {
  VatCalculation,
  VatExclusiveCalculation,
} from "../../hardCodedFunctions/functions";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import SearchBox from "../items/SearchBox";
import {
  addInvoiceItems,
  decreaseItemQuantity,
  incrementItemQuantity,
  removeItemFromDocument,
} from "../../redux/reducers/Invoice_reducer/createInvoice";
import { createDocumentAction } from "../../redux/reducers/document_details/invoice_document";
import BottomBarDocumentDetails from "../GlobalComponents/ButtomBarTotalList";
import CustomerDetailsBanner from "../GlobalComponents/DocumentDetailsBanner";
import DateTimePicker from "@react-native-community/datetimepicker";
import LinearGradient from "react-native-linear-gradient";
import GeneralButtonDateButtons from "../GlobalComponents/GeneralButtonDateButtons";

const CreateInvoice = ({ navigation }: any) => {
  const invoice_type: string = "Invoice";
  const [dateModal, setDateModal] = useState(false);
  const [dueDateModal, setDueDateModal] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const [dueDate, setDueDate] = useState(new Date(1598027062433));
  const [searchValue, setSearchValue] = useState("");

  const { name, code } = useSelector(
    (state: RootStateOrAny) => state.customerToInvoice[0]
  );

  const invoiceDocumentsDetails = useSelector(
    (state) => state.invoiceDocumentDetails
  );
  const invoiceItems = useSelector(
    (state: RootStateOrAny) => state.documentToInvoice
  );

  const invoices = useSelector((state: RootStateOrAny) => state.invoices);

  
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

  
  // @ts-ignore
  const invoiceNumber = Math.max(
    ...invoices.map((invoice: number) => invoice.invoice_no),
    1
  );

  const totalAmount = parseFloat(
    Array.from(invoiceItems).reduce(
      (acc: any, cur: any) => acc + cur.total_amount,
      0
    )
  );
  // const totalAmount = parseFloat(
  //   invoiceItems.reduce((acc: any, cur: any) => acc + cur.total_amount, 0)
  // );
  // @ts-ignore
  const vatAmount = (totalAmount * VatCalculation).toFixed(2);
  // @ts-ignore
  const totalExcluding = (totalAmount * VatExclusiveCalculation).toFixed(2);

  const searchItems = (e: SyntheticEvent) => {
    // @ts-ignore
    const text = e.nativeEvent.text;
    setSearchValue(text);
  };

  const invoiceDateHandler = () => {
    setDateModal(true);
  };

  const dueDateHandler = () => {
    setDueDateModal(true);
  };

  const postInvoiceOnly = () => {
    //first post invoice to invoice list
    //vat amount calculation

    const incremented_invoice_no: number = invoiceNumber + 1;

    try {
      invoiceItems.forEach((x: any) => {
        dispatch(
          createDocumentAction({
            document_type: invoice_type,
            invoice_no: incremented_invoice_no,
            item_code: x.code,
            item_description: x.description,
            quantity: x.quantity,
            selling_price: x.selling_price,
            vat_amount: x.vat_amount,
            inline_total_exclusive: x.total_exclusive,
            inline_total_inclusive: x.total_amount,
          })
        );
      });
    } catch (err) {
      console.log(err);
    }

    invoiceItems.forEach((x: any) => {
      console.log(
        `Item Code: ${x.code}, Item Description: ${x.description} Item Quantity: ${x.quantity}`
      );
    });

    console.log(name);

    console.log(`Invoice Number: ${invoiceNumber}`);
    // @ts-ignore

    console.log(`Vat Amount: ${vatAmount.toString()}`);
    console.log(`Total Excluding : ${totalExcluding}`);
    console.log(`Total Amount: ${totalAmount}`);
    console.log(invoiceDocumentsDetails);
  };

  return (
    <View style={styles.body}>
      <CustomerDetailsBanner
        customerCode={code}
        customerName={name}
        invoiceDate={date.toLocaleDateString("en-GB")}
        invoiceNumber={invoiceNumber}
        invoiceDueDate={"28/02/2020"}
        invoiceDateButton={invoiceDateHandler}
        invoiceDueDateButton={dueDateHandler}
        onPressDateHandler={() => setDateModal(true)}
      />
      <SearchBox searchValue={searchValue} onChangeHandler={searchItems} />

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
                      (curr: any) => curr.code === item_code
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
                              vat: (
                                parseFloat(selling_price) * VatCalculation
                              ).toFixed(2),
                              total_exclusive: (
                                parseFloat(selling_price) *
                                VatExclusiveCalculation
                              ).toFixed(2),
                              selling_price: parseFloat(selling_price),
                              total_amount: parseFloat(selling_price).toFixed(
                                2
                              ),
                            })
                          );

                          console.log(
                            (
                              parseFloat(selling_price) * VatCalculation
                            ).toFixed(2)
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
                            <Text>Total: {product.total_amount}</Text>
                          </View>

                          <View style={styles.quantity_buttons_view_secondary}>
                            <Button
                              color={"#F9F871"}
                              title={"+ Increment"}
                              onPress={() => {
                                dispatch(
                                  incrementItemQuantity({
                                    code: item_code,
                                    // selling_price: selling_price,
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

      {/**Invoice date Modal*/}
      <Modal visible={dateModal} animationType={"slide"}>
        <LinearGradient
          colors={["#2769f1", "#3b6cc1", "#1b3177"]}
          style={styles.linearGradient}
          // start={{ x: 0, y: 0 }}
          // end={{ x: 1, y: 0 }}
        >
          <View style={styles.modal_body}>
            <Text style={styles.date_modal_heading}>Date</Text>
            <Text style={styles.date_modal_sub_heading}>Set Invoice Date</Text>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"date"}
              is24Hour={true}
              display={"calendar"}
              onChange={() => {}}
              style={{ height: "50%" }}
            />
            <View style={styles.modal_buttons}>
              <GeneralButtonDateButtons
                buttonCaption={"SET"}
                onPressHandler={() => setDateModal(false)}
              />
            </View>
          </View>
        </LinearGradient>
      </Modal>

      {/**due date Modal*/}
      <Modal visible={dueDateModal}>
        <LinearGradient
          colors={["#1f95cf", "#050101", "#1345e7"]}
          style={styles.linearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 60 }}
        >
          <View style={styles.modal_body}>
            <Text style={styles.date_modal_heading}>Due Date</Text>
            <Text style={styles.date_modal_sub_heading}>
              Set Invoice Due Date
            </Text>
            <DateTimePicker
              testID="dateTimePicker"
              value={dueDate}
              mode={"date"}
              is24Hour={true}
              display={"calendar"}
              onChange={() => {}}
            />
            <View style={styles.modal_buttons}>
              <GeneralButtonDateButtons buttonCaption={"Set"} />
            </View>
          </View>
        </LinearGradient>
      </Modal>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button
          title={"Post & Share"}
          onPress={() => {
            console.log(invoiceItems);
          }}
        />
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
  modal_body: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  date_modal_heading: {
    fontWeight: "200",
    fontSize: 34,
    textAlign: "center",
    color: "white",
  },
  date_modal_sub_heading: {
    textAlign: "center",
  },
  modal_buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

export default CreateInvoice;
