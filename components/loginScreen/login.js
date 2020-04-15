import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import LoginForm from "./loginForm";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("./logoIcons/logo.jpg")} />
          <Text style={styles.screenText}>Simple Login Screen</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "red",
    backgroundColor: "#00acee",
    width: Dimensions.get("window").width,
  },
  logoContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    height: 120,
    width: 100,
  },
  screenText: {
    fontSize: 20,
    marginTop: 15,
    color: "#fff",
  },
  formContainer: {
    flex: 2,
  },
});
