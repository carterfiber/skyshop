// step 1 : Import libraries

import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';

// step 2: create components
export default class Product extends Component {

  state = {
    qty: 0
  }


  buy = () => this.setState({
    qty: this.state.qty + 1
  });
  // buy() {
  //   this.setState({
  //     qty: this.state.qty + 1
  //   });
  // }

  show() {
    Alert.alert("You get me, you silly mann!");
  }

  render() {
    return (
      <View>
        <Text style = { style.textStyle }>{ this.props.name }</Text>
        <Text style = { style.textStyle }>Quantity: { this.state.qty }</Text>
        <Button title="Buy" onPress = { this.buy } />
      </View>
    );
  }
}

const style = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 20
  }
});
