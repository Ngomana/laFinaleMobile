import React, { SyntheticEvent, useEffect, useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
  View,
} from "react-native";
import { RootStateOrAny } from "react-redux";
import DocumentItemsFlatList from "../GlobalComponents/Document_Item_FlatList";
import BottomBarDocumentDetails from "../GlobalComponents/ButtomBarTotalList";
import { DefaultSearchBox } from "../textBox/searchBox";
import { appDispatch, appSelector } from "../../redux/index";
import { Item } from "redux/reducers/item_reducer/item_types";
import {
  addItemDocumentactions,
  deleteAction,
  incrementAction,
  decrementAction,
  editAction,
  vatChangeAction,
} from "../../redux/reducers/createDocuments/index";
import {
  vatAmountCalcu,
  vatExclusiveCalcu,
} from "../../functions/totalsCaluclations";

const CreateDocumentScreen = ({ route }: any) => {
  const [searchedItems, setSearchedItems] = useState("");

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

  useEffect(() => {
    console.log(documentItems);
  });

  //getting invoice number or document number
  //adding items
  const addItem = async (
    item_code: string,
    item_description: string,
    selling_price: number
  ) => {
    await dispatch(
      addItemDocumentactions({
        documentType: documentType,
        item_code,
        item_description,
        item_quauntity: 1,
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

  const editQuantityManualy = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    item_code
  ) => {
    const value = e.nativeEvent.text;

    console.log(item_code);
    // dispatch(
    //   editAction({
    //     item_code: item_code,
    //     item_quantity: value,
    //   })
    // );
  };

  //calculations
  const totalAmount = Array.from(documentItems).reduce(
    (acc: number, cur: number) => acc + parseFloat(cur.total_amount),
    0
  );

  const totalVatAmount = Array.from(documentItems).reduce(
    (acc: number, cur: number) => acc + parseFloat(cur.vat_amount),
    0
  );

  const totalVatExclusive = Array.from(documentItems).reduce(
    (acc: number, cur: number) => acc + parseFloat(cur.total_excluding),
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
        editQuantityValue={editQuantityManualy}
      />
      <BottomBarDocumentDetails
        sum_total={totalAmount}
        vat_amount={totalVatAmount}
        total_excluding={totalVatExclusive}
        customer_code={customerCode}
        customer_name={customerName}
        customer_balance={customerBalance}
      />
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
});

export default CreateDocumentScreen;
