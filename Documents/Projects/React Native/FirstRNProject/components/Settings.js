import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';


class SettingsScreen extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      address: "",
      password: ""
    }
  }

  submitForm() {
    // console.warn("all values", this.state)
    // navigation.navigate("Home");
    this.props.navigation.navigate("ScreenDetails");

  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <View style={styles.formView}>
          <TextInput
            style={styles.textInputView}
            placeholder={"Enter "}
            placeholderTextColor='black'
            onChangeText={(e) => {
              // console.warn(e)
              this.setState({ name: e })
            }}></TextInput>
          <TextInput
            style={styles.textInputView}
            secureTextEntry={true}
            placeholder={"Enter your Password"}
            placeholderTextColor='black'
            onChangeText={(e) => {
              // console.warn(e)
              this.setState({ password: e })
            }}></TextInput>
          <TextInput
            style={styles.textInputView}
            placeholder={"Enter "}
            placeholderTextColor='black'
            onChangeText={(e) => {
              // console.warn(e)
              this.setState({ address: e })
            }}>

          </TextInput>
          <View style={styles.btnView}><Button title="Submit" onPress={() => {
            this.submitForm()
          }} /></View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white'
  },
  textInputView: {
    backgroundColor: 'lightgrey',
    color: 'black',
    borderColor: 'skyblue',
    borderWidth: 2,
    padding: 10,
    margin: 10
  },
  textView: {
    // backgroundColor: 'black',
    fontSize: 20,
    height: 40
  },
  formView: {
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
  },
  btnView: {
    margin: 10,
    height: 40
  }
});


export default SettingsScreen;