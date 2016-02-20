'use strict';
import React, { AppRegistry, Component, StyleSheet, Text, View, Image, TouchableHighlight, NavigatorIOS } from 'react-native';
import Main from './app/views/main';

class iPoop extends React.Component {
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
    return (
      <View>
        <NavigatorIOS
          ref={(navigator) => {this.navigator = navigator; }}
          renderScene = {this.renderScene}
          initialRoute = {{
            component: Main,
            title: 'Main Page'
          }} />
          <Main />
      </View>
      )
  }
}

AppRegistry.registerComponent('iPoop', () => iPoop);
