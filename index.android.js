/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

import { 
  AppRegistry, 
} from 'react-native';

// import MainPage from './js/main/MainPage';

var _navigator;
var MainPage = require('./js/main/MainPage');

AppRegistry.registerComponent('AwesomeRn', () => MainPage);