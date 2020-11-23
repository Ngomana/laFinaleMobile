import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../screens/drawerContent/drawerContent";
import StackNavigator from "./StackNavigator";
import ReportScreen from "../screens/reports/reports";
import SettingsScreen from "../screens/settings/setting";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerContentOptions={{
        itemStyle: { marginVertical: 10 },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{
          title: "Home",
        }}
      />

      <Drawer.Screen
        name="Reports"
        component={ReportScreen}
        options={{
          title: "Reports",
          headerTitle: "Hello World",
        }}
      />

      <Drawer.Screen
        name="Company Settings"
        component={SettingsScreen}
        options={{
          title: "Company settings",
        }}
      />
    </Drawer.Navigator>
  );
}
