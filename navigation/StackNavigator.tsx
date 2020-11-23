import * as React from "react";
import { Button, Platform, View } from "react-native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import Home from "./TabNavigator";
import SelectCustomerScreen from "../components/SelectCustomer/index";
import MainButton from "../components/GlobalComponents/MainButton";
import { useState } from "react";
import CreateDocumentScreen from "../screens/createDocument";
import { useInvoiceType, useQuotationType } from "../functions/documentTypes";
import { DocButton } from "../components/documentButtons/documentButton";
import { appDispatch } from "../redux/index";
import { removeAllAction } from "../redux/reducers/createDocuments/index";
import IconButton from "../components/GlobalComponents/iconButton/IconButton";
const Stack = createStackNavigator();

const StackNavigator = ({ route }: any) => {
  const [titleData, setTitleData] = useState("");
  const dispatch = appDispatch();

  const clearDocuments = () => {
    dispatch(removeAllAction());
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"tabNavigator"}
        component={Home}
        options={({ navigation }) => {
          return {
            headerTitleAlign: "center",
            headerTitle: "",
            headerTitleAllowFontScaling: true,
            headerMode: "screen",
            headerRight: () => (
              <View style={{ padding: 5 }}>
                <DocButton
                  buttonText="Invoice"
                  buttonPress={() => {
                    navigation.navigate("selectCustomerScreenInvoice", {
                      documentType: useInvoiceType,
                    });

                    setTitleData(useInvoiceType);
                  }}
                />
              </View>
            ),
            headerLeft: () => (
              <View
                style={{
                  padding: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <IconButton
                  iconColor="black"
                  iconSize={35}
                  buttonPress={() => {
                    navigation.toggleDrawer();
                  }}
                  iconName="menu"
                />
                <DocButton
                  buttonText="Quote"
                  buttonPress={() => {
                    navigation.navigate("selectCustomerScreenInvoice", {
                      documentType: useQuotationType,
                    });

                    setTitleData(useQuotationType);
                  }}
                />
              </View>
            ),
          };
        }}
      />

      <Stack.Screen
        name={"selectCustomerScreenInvoice"}
        component={SelectCustomerScreen}
        options={{
          title: `Select Customer`,

          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "bold",
            // headerTitleAlign: "center",
          },
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
            headerRight: () => (
              <View
                style={{
                  padding: Platform.select({
                    ios: 5,
                    android: 10,
                  }),
                }}
              >
                <DocButton buttonText="Clear" buttonPress={clearDocuments} />
              </View>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
