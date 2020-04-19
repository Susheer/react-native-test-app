import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";

export default class HeroImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <Image
        style={styles.hero}
        source={require("../../assets/pexels-photo-2597979.jpeg")}
      />
    );
  }
}

const styles = StyleSheet.create({
  hero: {
    height: 160,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
