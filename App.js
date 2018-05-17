// step 1 : Import libraries

import React, { Component } from 'react';
import ReactNative, { Text, View } from 'react-native';
import ProductList from './src/components/ProductList';

// step 2: create components
export default class Main extends Component {
  render() {
    return (
        <ProductList />
    );
  }
}

// step 3: register components to App
ReactNative.AppRegistry.registerComponent('SkyShop', () => Main);
