'use strict';
import React, { Component, StyleSheet, Text, View, Image, TouchableHighlight, NavigatorIOS } from 'react-native';

class Hello extends Component {
  clickMe() {
  }
  render() {
    return (
      <View>
        <Text onClick={this.clickMe.bind(this)}>
          Hello World!
        </Text>
      </View>
    );
  }

}
