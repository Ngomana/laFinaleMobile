import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { RootStateOrAny, useSelector } from "react-redux";
import DocumentFlatList from "../GlobalComponents/DocumentFlatList";
import OfflineBanner from "../GlobalComponents/OfflineBanner";
import NetInfo from "@react-native-community/netinfo";

const QuotationScreen = () => {
  const [connected, setConnected] = useState(false);
  const quotations = useSelector((state: RootStateOrAny) => state.quotations);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      console.log(state.isInternetReachable);
      setConnected(state.isInternetReachable);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <View>
      {!connected ? <OfflineBanner /> : null}
      <DocumentFlatList documentData={quotations} />
    </View>
  );
};

export default QuotationScreen;
