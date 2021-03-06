import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InvoiceScreen from "../components/invoice";
import QuotationScreen from "../components/quotation";
import CustomerScreen from "../screens/customer";
import ItemsScreen from "../components/items";

const MainScreen = createBottomTabNavigator();

const Home = () => {
  return (
    <MainScreen.Navigator>
      <MainScreen.Screen name="Invoices" component={InvoiceScreen} />
      <MainScreen.Screen name="Quotations" component={QuotationScreen} />
      <MainScreen.Screen name="Customers" component={CustomerScreen} />
      <MainScreen.Screen name="Items" component={ItemsScreen} />
    </MainScreen.Navigator>
  );
};

export default Home;
