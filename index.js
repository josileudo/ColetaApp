require('react-native').unstable_enableLogBox();
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Routes from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routes);
