import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import * as React from "react";
import {
  StyleSheet,
  Linking,
  SafeAreaView,
  View,
  Image,
  Text,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

interface DrawerContentProps {}

const DrawerContent = (props: DrawerContentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.imageView}>
        <Image
          source={require("../assets/images/marsLogo.png")}
          style={styles.image}
        />
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Support"
        onPress={() => Linking.openURL("https://mywebsite.com/help")}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {},
  logoView: {
    borderWidth: 1,
    width: "100%",
    height: "60%",
    alignContent: "center",
    justifyContent: "center",
    resizeMode: "center",
  },
  imageView: {
    height: 150,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
});
