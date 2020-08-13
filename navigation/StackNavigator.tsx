import * as React from "react";
import { Button } from "react-native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import Home from "./TabNavigator";
import SelectCustomerScreen from "../components/invoice/SelectCustomerScreen";
import CreateInvoice from "../components/invoice/createInvoiceModal";
import { useDispatch } from "react-redux";
import { removeAllItems } from "../redux/reducers/Invoice_reducer/createInvoice";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const dispatch = useDispatch();

  const restInvoiceItems = () => {
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
              <Button
                title={"Invoice"}
                onPress={() =>
                  navigation.navigate("selectCustomerScreenInvoice")
                }
              />
            ),
            headerLeft: () => (
              <Button
                title={"Quote"}
                onPress={() =>
                  navigation.navigate("selectCustomerScreenInvoice")
                }
              />
            ),
          };
        }}
      />

      <Stack.Screen
        name={"selectCustomerScreenInvoice"}
        component={SelectCustomerScreen}
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
    </Stack.Navigator>
  );
};

export default StackNavigator;
