import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import ImageComp from "../../components/shoping-cart/imageComp";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.coulmn1}>
          <ImageComp
            imageSource={require("../../assets/pexels-photo-41068.jpeg")}
          />
        </View>
        <View style={styles.coulmn2}>
          <ImageComp
            imageSource={require("../../assets/pexels-photo-236287.jpeg")}
          />
        </View>
        <View style={styles.full}>
          <ImageComp
            imageSource={require("../../assets/pexels-photo-326650.jpeg")}
          />
        </View>

        <View style={styles.coulmn1}>
          <ImageComp
            imageSource={require("../../assets/pexels-photo-1449670.jpeg")}
          />
        </View>
        <View style={styles.coulmn2}>
          <ImageComp
            imageSource={require("../../assets/pexels-photo-1464565.jpeg")}
          />
        </View>
        <View style={styles.full}>
          <ImageComp
            imageSource={require("../../assets/pexels-photo-2597979.jpeg")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 1,
    backgroundColor: "#c1c1c1",
  },
  coulmn1: {
    flex: 1,
    padding: 1,
  },
  coulmn2: {
    flex: 1,
    padding: 1,
  },
  full: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
