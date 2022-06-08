import React, { Component, useState } from 'react';
import { View, TextInput, StyleSheet, Button, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Input, SocialIcon } from 'react-native-elements';

import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';


class Login extends Component {

  // const[loggedIn, setloggedIn] = useState(false);
  // const[userInfo, setuserInfo] = useState([]);
  constructor() {
    super()
    this.state = {
      name: "",
      address: "",
      password: "",
      comment: "",
      data: {
        fullName: "Mihir",
        email: "test@test.com"
      },
      loggedIn: false,
      userInfo: []
    }
  }

  componentDidMount() {
    GoogleSignin.configure({
      // scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '1053142229593-cg8hjqjhts5g8as8pbhm9mbgnuk9qsji.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }



  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { accessToken, idToken } = await GoogleSignin.signIn();
      console.log("signInGoogle", signInGoogle);
      setloggedIn(true);
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      console.log("credential", credential);
      await auth().signInWithCredential(credential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        console.log("SOMETHING ELSE ", error);
        // some other error happened
      }
    }
  };

  submitForm() {
    console.warn("all values", this.state.data)
    // navigation.navigate("Home");
    this.props.navigation.replace("Dashboard", this.state.data);
    // this.props.navigation.navigate("Dashboard", this.state.data);

  }
  render() {
    const { navigate } = this.props.navigation;
    const staticData = "hello From Dashboard"
    return (
      <View style={styles.mainContainer}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View style={styles.container}>

            <View style={styles.formView}>
              {/* <FontAwesome5 name={'comments'} solid size={100} /> */}

              <Input
                placeholder="Email"
                leftIcon={{ type: 'fontisto', name: 'email' }}
                // style={styles}
                onChangeText={value =>
                  // console.log("FNSME", value)
                  this.setState({ data: { fullName: value } })
                }
                errorStyle={{ color: 'red' }}
                errorMessage='Error Message will display here'
              />
              <Input
                placeholder="Password"
                leftIcon={{ type: 'fontisto', name: 'locked' }}
                secureTextEntry={true}
                // style={styles}
                onChangeText={value => this.setState({ data: { email: value } })}
                errorStyle={{ color: 'red' }}
                errorMessage='Error Message will display here'
              />

              <View style={styles.btnView}><Button title="Submit" onPress={() => {
                this.submitForm()
              }} /></View>
              <SocialIcon
                title='Sign In With Facebook'
                button
                type='facebook'
                disabled={false}
                onPress={() => {
                  console.log("Button is working")
                }}
              />
              <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn}
              // disabled={this.state.isSigninInProgress} 
              />
            </View>
          </View>
        </ScrollView>
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
  mainContainer: {
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


export default Login;