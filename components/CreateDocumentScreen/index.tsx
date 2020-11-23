import React, { SyntheticEvent, useEffect, useState } from "react";
import {
  Button,
  Modal,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInputChangeEventData,
  View,
} from "react-native";
import moment from "moment";
import { RootStateOrAny } from "react-redux";
import DocumentItemsFlatList from "../GlobalComponents/Document_Item_FlatList";
import BottomBarDocumentDetails from "../GlobalComponents/BottomBarTotalList";
import { DefaultSearchBox } from "../textBox/searchBox";
import { appDispatch, appSelector } from "../../redux/index";
import { Item } from "redux/reducers/item/item_types";
import {
  addItemDocumentActions,
  deleteAction,
  incrementAction,
  decrementAction,
  editAction,
  vatChangeAction,
} from "../../redux/reducers/createDocuments/index";
import {
  vatAmountCalcu,
  vatExclusiveCalcu,
} from "../../functions/totalsCalculations";
import IconButton from "../GlobalComponents/iconButton/IconButton";
import { Platform } from "react-native";
import { iCreateDocument } from "../../redux/reducers/createDocuments/types";
import DatePicker from "../date/index";
import { useInvoiceType } from "../../functions/documentTypes";
import { TextInput } from "react-native-gesture-handler";

const CreateDocumentScreen = ({ route }: any) => {
  const [searchedItems, setSearchedItems] = useState("");
  const [documentDate, setDocumentDate] = useState(false);

  const {
    customerCode,
    customerName,
    customerEmail,
    customerBalance,
    documentType,
  } = route.params;

  const dispatch = appDispatch();
  const items = appSelector((state: RootStateOrAny) => {
    if (searchedItems.length === 0) {
      return state.items;
    }

    return state.items.filter((item: Item) => {
      let itemDescription = item.item_description.toLowerCase();
      let enteredSearchValue = searchedItems.toLowerCase();

      return itemDescription.indexOf(enteredSearchValue) > -1;
    });
  });
  const documentItems = appSelector(
    (state: RootStateOrAny) => state.createDocuments
  );

  const documents = appSelector((state: RootStateOrAny) => {
    return state.documents.filter((document) => {
      let itemToLowerCase = document.document_type.toLowerCase();
      let searchedItemToLowCase = documentType.toLowerCase();
      return itemToLowerCase.indexOf(searchedItemToLowCase) > -1;
    });
  });

  const documentNumber =
    Math.max(
      ...documents.map(
        (docuNumber: any) => parseFloat(docuNumber.document_no),
        0
      )
    ) + 1;

  //getting invoice number or document number
  //adding items
  const addItem = async (
    item_code: string,
    item_description: string,
    selling_price: number
  ) => {
    await dispatch(
      addItemDocumentActions({
        documentType: documentType,
        item_code,
        item_description,
        item_quantity: 1,
        item_selling_price: selling_price.toFixed(2),
        vat_amount: (selling_price * vatAmountCalcu).toFixed(2),
        total_excluding: (selling_price * vatExclusiveCalcu).toFixed(2),
        total_amount: selling_price.toFixed(2),
        chargeVat: true,
      })
    );
  };

  const removeItem = (item_code: string) => {
    dispatch(
      deleteAction({
        item_code: item_code,
      })
    );
  };

  const incrementItem = (item_code) => {
    dispatch(
      incrementAction({
        item_code: item_code,
      })
    );
  };

  const decrementItem = (item_code) => {
    dispatch(
      decrementAction({
        item_code: item_code,
      })
    );
  };

  const searchValueEventHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    const value = e.nativeEvent.text;
    setSearchedItems(value);
  };

  const onChangeChargeVat = async (item_code, chargeVatOnItem) => {
    if (chargeVatOnItem === true) {
      //change vat to false
      await dispatch(
        vatChangeAction({
          item_code: item_code,
          chargeVat: false,
        })
      );
    }

    if (chargeVatOnItem === false) {
      console.log("else");
    }
    chargeVatOnItem ? console.log(false) : null;
  };

  const editQuantityManually = (
    item_code,
    e
    // e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    // const value = e.nativeEvent.text;

    // console.log(item_code, e);
    dispatch(
      editAction({
        item_code: item_code,
        item_quantity: e,
      })
    );
  };

  //calculations
  const totalAmount: any = Array.from(documentItems).reduce(
    (acc: number, cur: any) => acc + parseFloat(cur.total_amount),
    0
  );

  const totalVatAmount: any = Array.from(documentItems).reduce(
    (acc: number, cur: any) => acc + parseFloat(cur.vat_amount),
    0
  );

  const totalVatExclusive: any = Array.from(documentItems).reduce(
    (acc: number, cur: any) => acc + parseFloat(cur.total_excluding),
    0
  );

  return (
    <View style={styles.body}>
      <DefaultSearchBox
        textChange={searchValueEventHandler}
        textValue={searchedItems}
        textPlaceholder={"Search"}
      />
      <DocumentItemsFlatList
        itemData={items}
        addItem={addItem}
        removeItem={removeItem}
        documentItems={documentItems}
        incrementQuantity={incrementItem}
        decrementQuantity={decrementItem}
        editQuantityValue={editQuantityManually}
      />

      <View style={styles.documentFunctions}>
        <IconButton
          iconName="calendar"
          iconColor="black"
          iconSize={30}
          buttonText="Date & Details"
        />

        <IconButton
          iconName="share-alternative"
          iconColor="black"
          iconSize={30}
          buttonText="Save & Share"
          buttonPress={() => {
            documentItems.forEach((docItems: Partial<iCreateDocument>) => {
              console.log(
                `item Code: ${docItems.item_code} Description: ${docItems.item_description} Quantity: ${docItems.item_quantity}`
              );
            });
          }}
        />

        <IconButton
          iconName="save"
          iconColor="black"
          iconSize={30}
          buttonText="Save Only"
        />
      </View>

      <BottomBarDocumentDetails
        sum_total={totalAmount.toFixed(2)}
        vat_amount={totalVatAmount.toFixed(2)}
        total_excluding={totalVatExclusive.toFixed(2)}
        customer_code={customerCode}
        customer_name={customerName}
        customer_balance={customerBalance}
      />

      <Modal visible={true}>
        <View style={styles.body}>
          <View style={styles.datePickerView}>
            <Text>{documentType} Date</Text>

            <View>
              {documentType.toLowerCase() === useInvoiceType.toLowerCase() ? (
                <Text>{documentType} Due Date</Text>
              ) : (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text>{documentType} is valid for:</Text>
                  <TextInput
                    placeholder="Enter no."
                    style={{ borderBottomWidth: 1 }}
                    keyboardType="number-pad"
                  />
                  <Text>days</Text>
                </View>
              )}
            </View>
            <View>
              <DatePicker displayType="spinner" />
            </View>
          </View>
          <Button title="Close" />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  customerInfoBody: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
  },
  documentFunctions: {
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "absolute",
    bottom: -100,
    right: 10,

    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: Platform.select({
      android: 3,
      ios: 5,
    }),
    // padding: 10,
    paddingBottom: 70,
    marginBottom: "30%",
  },
  datePickerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreateDocumentScreen;
