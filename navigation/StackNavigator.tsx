import * as React from "react";
import { Button } from "react-native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import Home from "./TabNavigator";
import SelectCustomerScreen from "../components/SelectCustomer/index";
import CreateInvoice from "../components/invoice/createInvoiceModal";
import { useDispatch } from "react-redux";
import MainButton from "../components/GlobalComponents/MainButton";
import { useState } from "react";
import CreateDocumentScreen from "../components/CreateDocumentScreen";
import { useInvoiceType, useQuotationType } from "../functions/documentTpyes";

const Stack = createStackNavigator();

const StackNavigator = ({ route }: any) => {
  const [titleData, setTitleData] = useState("");
  const dispatch = useDispatch();

  const restInvoiceItems = () => {
    // @ts-ignore
    dispatch(removeAllItems());
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"tabNavigator"}
        component={Home}
        options={({ navigation }) => {
          return {
            headerTitleAlign: "center",
            headerTitle: "Mars Industries",
            headerMode: "screen",
            headerRight: () => (
              <MainButton
                buttonCaption={"Invoice"}
                onPressHandler={() => {
                  navigation.navigate("selectCustomerScreenInvoice", {
                    documentType: useInvoiceType,
                  });

                  setTitleData(useInvoiceType);
                }}
              />
            ),
            headerLeft: () => (
              <MainButton
                buttonCaption={"Quote"}
                onPressHandler={() => {
                  navigation.navigate("selectCustomerScreenInvoice", {
                    documentType: useQuotationType,
                  });

                  setTitleData(useQuotationType);
                }}
              />
            ),
          };
        }}
      />

      <Stack.Screen
        name={"selectCustomerScreenInvoice"}
        component={SelectCustomerScreen}
        options={{
          title: `Select Customer To ${titleData}`,
          headerTitleStyle: {
            fontSize: 18,
          },
        }}
      />

      <Stack.Screen
        name={"selectInvoiceItems"}
        component={CreateInvoice}
        options={{
          title: "Select Invoice Items",
          headerRight: () => (
            <Button title={"Reset"} onPress={restInvoiceItems} />
          ),
        }}
      />

      <Stack.Screen
        name={"createDocumentScreen"}
        component={CreateDocumentScreen}
        options={({ route }: any) => {
          // @ts-ignore
          const { documentType }: string = route.params;
          return {
            title: `Create ${documentType}`,
            headerRight: () => <MainButton buttonCaption={"Clear"} />,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
