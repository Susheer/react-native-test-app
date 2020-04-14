import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TestComponent from "./TestComponent";
import IntroScreen from "./components/intro-screen/IntroScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <IntroScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
