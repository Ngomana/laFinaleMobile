import { DefaultSearchBox } from "../textBox/searchBox";
import React, { SyntheticEvent, useState } from "react";
import {
  Modal,
  StyleSheet,
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  ActivityIndicator,
  Platform,
} from "react-native";
import CustomerFlatList from "../GlobalComponents/CustomerFlatList";
import { DocButton, ToInvoiceButton } from "../documentButtons/documentButton";
import AddCustomer from "../GlobalComponents/AddCustomer";
import { createCustomer } from "../../functions/customers";
import { appSelector } from "../../redux/index";

const CustomerScreen = () => {
  const [searchCustomers, setSearchedCustomers] = useState("");
  const [addCustomerModal, setAddCustomerModal] = useState(false);
  const [newCustomer, setNewCustomer] = useState(false);
  const [errorText, setErrorText] = useState("");

  //loading indicator
  const [loading, setLoading] = useState(false);

  //customer
  const [customerCode, setCustomerCode] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");

  const customers = appSelector((state: any) => {
    if (searchCustomers.length === 0) {
      return state.customers;
    }

    return state.customers.filter((customer) => {
      let customerNameToLower = customer.name.toLowerCase();
      let enterdCustomerName = searchCustomers.toLowerCase();

      return customerNameToLower.indexOf(enterdCustomerName) > -1;
    });
  });

  const currentDate = new Date(Date.now());
  const currentCustomerId: any = 0;

  const addCustomer = async () => {
    createCustomer({
      customerId: currentCustomerId,
      customerCode: customerCode,
      customerName: customerName,
      customerContactNumber: contactNumber,
      customerEmail: email,
      createdAt: currentDate,
    });
  };
  const addOrSaveCustomer = () => {
    //opening modal
    setAddCustomerModal(true);

    //if its a new customer set true
    setNewCustomer(true);
  };
  const saveCustomer = () => {};
  const closeModal = () => {
    setAddCustomerModal(false);
  };

  const editCustomer = (code, name, balance, email, contanctNumber) => {
    //setting new customer to false because we editing current customer
    setNewCustomer(false);
  };

  //text input events
  const customerCodeOnChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;

    //checking if code already exits
    customers.find((o, i) => {
      if (o.code === value && value.length > 0) {
        return setErrorText("Customer Code Already Exists...");
      }

      if (value.length === 0) {
        return setErrorText("");
      }
    });

    setCustomerCode(value);
  };

  const customerNameOnChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;

    setCustomerName(value);
  };

  const contactNumberOnChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setContactNumber(value);
  };

  const emailOnChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;

    setEmail(value);
  };
  return (
    <View style={styles.body}>
      <DefaultSearchBox
        textPlaceholder="Search"
        textValue={searchCustomers}
        textChange={(e) => {
          const value = e.nativeEvent.text;

          setSearchedCustomers(value);
        }}
      />
      <CustomerFlatList
        customerData={customers}
        onPressCustomer={(code, name, email, balance) => {
          console.log(`Customer Code: ${code}`);
        }}
      />

      <View style={styles.addCustomerBody}>
        <ToInvoiceButton buttonText="ADD" buttonPress={addOrSaveCustomer} />
      </View>
      <Modal visible={addCustomerModal} animationType={"slide"}>
        <ActivityIndicator size="large" color="#0000ff" />
        <AddCustomer
          closeModal={closeModal}
          onErrorText={errorText}
          saveCustomer={addCustomer}
          //customer code
          onChangeCustomerCode={customerCodeOnChange}
          valueCustomerCode={customerCode}
          //customer name
          onChangeCustomerName={customerNameOnChange}
          valueCustomerName={customerName}
          //contact number
          onChangeContactNumber={contactNumberOnChange}
          valueCustomerContactNumber={contactNumber}
          //email
          onChangeCustomerEmail={emailOnChange}
          valueCustomerEmail={email}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    borderBottomWidth: 2.5,
    borderBottomColor: "grey",
    // alignItems: "center",
    // justifyContent: "center",
  },
  addCustomerBody: {
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "absolute",
    bottom: 20,
    right: 20,

    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: Platform.select({
      // android: 3,
      ios: 5,
    }),
    padding: 10,
  },
});

export default CustomerScreen;
