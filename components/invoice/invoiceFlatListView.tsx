import React, { useState } from "react";
import { Button, FlatList, Modal, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CreateInvoice from "./createInvoiceModal";
import MainButton from "../GlobalComponents/MainButton";
import DeleteButton from "../GlobalComponents/DeleteButton";
import FlatListButton from "../GlobalComponents/FlatListButtons";

const InvoiceFlatListView = () => {
  const [invoice_no, setInvoiceNo] = useState("");
  const [invoice_date, setInvoice_Date] = useState("");
  const [customer, setCustomer] = useState("");
  const [vatAmount, setVatAmount] = useState("");
  const [vatExcluding, setVatExcluding] = useState("");
  const [totalAmount, setAmount] = useState("");

  // @ts-ignore
  const invoices = useSelector((state) => state.invoices);

  const dispatch = useDispatch();

  return (
    <View style={styles.body}>
      <FlatList
        data={invoices}
        renderItem={({ item }) => {
          return (
            <View>
              <View>
                <Text>{item.invoice_no}</Text>
                <Text>{item.invoice_date}</Text>
                <Text>{item.customer_code}</Text>
                <Text>{item.customer}</Text>
                <Text>{item.vat_amount}</Text>
                <Text>{item.vat_excluding}</Text>
                <Text>{item.total_amount.toString()}</Text>
              </View>

              <View style={styles.button_body}>
                <FlatListButton buttonCaption={"E-Mail"} />
                <FlatListButton buttonCaption={"Share"} />
                <FlatListButton buttonCaption={"Edit"} />
                <DeleteButton buttonCaption={"Delete"} />
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
  },

  modal_body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },

  button_body: {
    flexDirection: "row",
    height: 40,
    justifyContent: "space-between",
  },
});

export default InvoiceFlatListView;
