/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LayouComponent from './views/layout';

export default class test extends Component {
  render() {
    return <LayouComponent />
  }
}

AppRegistry.registerComponent('test', () => test);
