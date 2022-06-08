import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import axios from 'axios';


class ScreenDetails extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.callAPI();
  }

  async callAPI() {
    // From basic Fetch API call
    // let resp = await fetch('https://reactnative.dev/movies.json');
    // let respJson = await resp.json();
    // // console.warn(respJson);
    // this.setState({ data: respJson.movies })


    //From axios
    let resp = await axios.get("https://reactnative.dev/movies.json");
    console.log("AxioAPIData", resp.data.movies);
    this.setState({ data: resp.data.movies })

  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.screen}>
        <Text>
          Screen Details
        </Text>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) =>
            <Text style={styles.textView}>{item.title}</Text>
          } />
        <Button title="Press me" onPress={() => { }} />
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
    backgroundColor: 'skyblue',
    margin: 10,
    fontSize: 30
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


export default ScreenDetails;