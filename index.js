import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json'; // Check the path to app.json

AppRegistry.registerComponent('DashBoard', () => App); // 'DashBoard' should match your component name
