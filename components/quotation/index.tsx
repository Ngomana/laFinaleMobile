import React from "react";
import { View } from "react-native";
import { RootStateOrAny, useSelector } from "react-redux";
import DocumentFlatList from "../GlobalComponents/DocumentFlatList";

const QuotationScreen = () => {
  const quotations = useSelector((state: RootStateOrAny) => state.quotations);
  return (
    <View>
      <DocumentFlatList documentData={quotations} />
    </View>
  );
};

export default QuotationScreen;
