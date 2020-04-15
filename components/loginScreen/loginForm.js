import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Username" style={styles.inputText} />
        <TextInput placeholder="Password" style={styles.inputText} />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  inputText: {
    height: 43,
    backgroundColor: "#f4f4f4",
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 4,
  },
  buttonContainer: {
    // backgroundColor: "black",
    borderRadius: 4,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 2,
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});
