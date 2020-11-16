import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { RootStateOrAny, useSelector } from "react-redux";
import DocumentFlatList from "../GlobalComponents/DocumentFlatList";
import OfflineBanner from "../GlobalComponents/OfflineBanner";
import NetInfo from "@react-native-community/netinfo";
import { useQuotationType } from "../../functions/documentTpyes";

const QuotationScreen = () => {
  const [connected, setConnected] = useState(false);
  const quotations = useSelector((state: RootStateOrAny) => state.documents);

  const testing = useSelector((state: any) => {
    return state.documents.filter((quotes: any) => {
      let itemToLowerCase = quotes.document_type.toLowerCase();
      let searchedItemToLowCase = useQuotationType.toLowerCase();
      return itemToLowerCase.indexOf(searchedItemToLowCase) > -1;
    });
  });
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      console.log(state.isConnected);
      setConnected(state.isConnected);
      console.log(testing);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <View>
      {connected ? null : <OfflineBanner />}

      <DocumentFlatList documentData={testing} />
    </View>
  );
};

export default QuotationScreen;
