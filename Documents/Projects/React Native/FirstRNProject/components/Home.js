import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';


const Home = props => {

  console.log(props);


  return (
    <View style={styles.screen}>
      <Text>
        Home Screen
      </Text>
      <View>
        <FlatList></FlatList>
      </View>
      <Button title="Press me" onPress={() => {
        // this.navigation.navigate();
        console.log("Dashboard Naivgation Button Press");
        props.navigation.navigate({
          routeName: "DashboardSettings",
        });
      }} />
    </View>
  );

}



const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});


export default Home;