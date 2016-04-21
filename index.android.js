/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import { 
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity,
} from 'react-native';

var _navigator;
var MainPage = require('./js/main/MainPage');

AppRegistry.registerComponent('AwesomeRn', () => MainPage);
