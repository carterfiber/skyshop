// step 1 : Import libraries

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Product from './Product'; //on same level so dont need ./src

export default class ProductList extends Component {
  state = {
    products: []
  }

  componentDidMount() {
      return fetch('https://demo0903773.mockable.io/drones').then((response) => response.json()).then((responseJson) => {
        this.setState({products: responseJson})
      })
  }


  render () {
    var products = this.state.products.map(function(item) {
        return (
          <Product name = {item.name} key = {item.id} />
        );
    })

    return (
      <ScrollView>
        {products}
      </ScrollView>
    );
  }
}
