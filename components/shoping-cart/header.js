import React, { Component } from "react";
import { StyleSheet, View, Image, Dimensions, Text } from "react-native";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <View style={styles.headerContainer}>
        <Image
          style={styles.icon}
          source={require("../../assets/104-1045998_shopping-cart-shopping-cart-icon-blue.png")}
        />
        <Text style={styles.logoTitle}>Love Diary</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,

    width: Dimensions.get("window").width,
    borderColor: "#c1c1c1",
    borderBottomWidth: 1,
    padding: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  icon: {
    height: 30,
    width: 30,
  },
  logoTitle: {
    paddingLeft: 15,
    fontSize: 14,
  },
});
