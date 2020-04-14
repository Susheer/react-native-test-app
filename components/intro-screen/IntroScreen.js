import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <ScrollView horizontal pagingEnabled style={styles.container}>
        <View style={[styles.outer, styles.screen1]}>
          <Text style={styles.innerText}>Your Welcome !!</Text>
        </View>
        <View style={[styles.outer, styles.screen2]}>
          <Text style={styles.innerText}>How are you today?</Text>
        </View>
        <View style={[styles.outer, styles.screen3]}>
          <Text style={styles.innerText}>I am Good</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  outer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
  },
  innerText: {
    fontSize: 25,
    color: "#ffff",
  },
  screen1: {
    backgroundColor: "#e58a8a",
  },
  screen2: {
    backgroundColor: "#588da8",
  },
  screen3: {
    backgroundColor: "#d8345f",
  },
});
