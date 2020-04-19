import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import TestComponent from "./TestComponent";
//import IntroScreen from "./components/intro-screen/IntroScreen";
//import LoginScreen from "./components/loginScreen/login";
import ShopingCart from "./components/shoping-cart/ShoppingCart";
export default function App() {
  return (
    <View style={styles.container}>
      <ShopingCart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
