/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { AppRegistry, Component, StyleSheet, Text, View, Image } from 'react-native';

class iPoop extends Component {
  clickMe() {
    alert('Sasha and Yan are awesome!');
  }
  render() {
    return (
      <View style={styles.container} onPress={this.clickMe.bind(this)}>
        <Image source={require('./poop.png')} />
        <Text onClick={this.clickMe.bind(this)} class="welcome" style={styles.welcome}>
          Welcome to iPoop!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('iPoop', () => iPoop);
