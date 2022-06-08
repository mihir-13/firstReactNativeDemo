import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


class DashboardSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.screen}>
        <Text>Dashboard Settings Screen</Text>
        <Button title="Go Back" onPress={() => {
          this.props.navigation.goBack();
        }} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default DashboardSettings;