'use strict';
import React, { AppRegistry, Component, StyleSheet, Text, View, Image, TouchableHighlight, NavigatorIOS } from 'react-native';
import Main from './app/views/main';

class iPoop extends Component {
  renderScene(route, navigator) {
    const Component = route.component;
    return (
      <View style={styles.container}>
        <Component
          route={route}
          navigator={navigator}
        />
      </View>
    )
  }

  render() {
    return <Main/>
  }
}

AppRegistry.registerComponent('iPoop', () => iPoop);
