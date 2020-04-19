import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

export default class ImageComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return <Image source={this.props.imageSource} style={styles.image} />;
  }
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
