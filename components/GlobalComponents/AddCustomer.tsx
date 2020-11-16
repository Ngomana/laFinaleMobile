import React from "react";

import { DocButton } from "../documentButtons/documentButton";
import { Platform, StyleSheet, View } from "react-native";
import { HeaderTitle } from "../textLalbel";
import { DefaultTextInput } from "./textInput";
import ErrorText from "./errorText";

interface iAddCustomer {
  saveCustomer: any;
  closeModal: any;

  //onChange
  onChangeCustomerCode: any;
  onChangeCustomerName: any;
  onChangeContactNumber: any;
  onChangeCustomerEmail: any;

  //value
  valueCustomerCode: string;
  valueCustomerName: string;
  valueCustomerContactNumber: string;
  valueCustomerEmail: string;

  //text label
  onErrorText: string;
}

const AddCustomer = ({
  //buttonActions
  saveCustomer,
  closeModal,

  //onChange
  onChangeContactNumber,
  onChangeCustomerCode,
  onChangeCustomerEmail,
  onChangeCustomerName,

  //value
  valueCustomerCode,
  valueCustomerContactNumber,
  valueCustomerEmail,
  valueCustomerName,

  onErrorText,
}: iAddCustomer) => {
  return (
    <View style={styles.body}>
      <View style={styles.headerBody}>
        <HeaderTitle lblText="Create Customer" />
      </View>
      <View style={styles.addCustomerBody}>
        <DefaultTextInput
          textPlaceHolder="Customer Code"
          textOnChange={onChangeCustomerCode}
          textValue={valueCustomerCode}
          textAutoCorrect={false}
        />
        <DefaultTextInput
          textPlaceHolder={"Customer Name"}
          textOnChange={onChangeCustomerName}
          textValue={valueCustomerName}
          textAutoCorrect={true}
        />
        <DefaultTextInput
          textPlaceHolder={"Contanct Number"}
          textOnChange={onChangeContactNumber}
          textValue={valueCustomerContactNumber}
          textAutoCorrect={false}
        />
        <DefaultTextInput
          textPlaceHolder={"E-Mail"}
          textOnChange={onChangeCustomerEmail}
          textValue={valueCustomerEmail}
          textAutoCorrect={false}
        />

        <View style={styles.errorTextBody}>
          <ErrorText errorText={onErrorText} />
        </View>
      </View>

      <View style={styles.buttonsBody}>
        <View style={styles.buttons}>
          <DocButton buttonText="Save" buttonPress={saveCustomer} />
          <DocButton buttonText="Close" buttonPress={closeModal} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    ...Platform.select({
      ios: {
        marginTop: 50,
      },
      android: {},
    }),
  },
  headerBody: {
    marginLeft: 10,
  },
  addCustomerBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonsBody: {
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        marginBottom: 20,
      },
    }),
    height: 50,
    flexDirection: "row",
    width: "100%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  errorTextBody: {
    paddingTop: 20,
  },
});
export default AddCustomer;
