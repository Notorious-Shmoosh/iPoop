'use strict';
import React, { AppRegistry, Component, StyleSheet, Text, View, Image, TouchableHighlight, NavigatorIOS } from 'react-native';
import Main from './app/views/main';

class iPoop extends Component {
  render() {
    return (
      <NavigatorIOS
          initialRoute = {{
            component: Main,
            title: 'Main Page'
          }} />
      )
  }
}

AppRegistry.registerComponent('iPoop', () => iPoop);
