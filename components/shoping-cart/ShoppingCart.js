import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
import Header from "./header";
import Body from "../../components/shoping-cart/body";
import HeroImage from "./heroImage";

export default class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <View>
        <Header />
        <ScrollView style={styles.container}>
          <HeroImage />
          <Body />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "red",
    width: Dimensions.get("window").width,
  },
});
