/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { AppRegistry, Component, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

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
        <View style={styles.buttonBox}>
          <TouchableHighlight style={styles.button} onPress={this.clickMe}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.clickMe}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableHighlight>
        </View>
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
  button: {
    backgroundColor: '#6495ed',
    borderRadius: 10,
    padding: 5,
    margin: 5
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  buttonBox: {
    flexDirection: 'row'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('iPoop', () => iPoop);
