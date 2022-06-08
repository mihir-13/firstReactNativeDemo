import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';



class Profils extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.route.params);
    const dataP = this.props.route.params;
    return (
      <View style={styles.screen}>
        <Text>
          Profile Screen
        </Text>
        <Text>
          {dataP.name}
        </Text>
        <Text>
          {dataP.email}
        </Text>
        <View>
          <FlatList></FlatList>
        </View>
        <Button title="Press me" onPress={() => {

          this.props.navigation.navigate("DashboardSettings")
        }} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default Profils;