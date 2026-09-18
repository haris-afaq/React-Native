/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './app1';
import { name as appName } from './app.json';
import AppPro from './app1';

AppRegistry.registerComponent(appName, () => AppPro);
