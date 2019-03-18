// import a library to help creat a component
import React from 'react';
import { AppRegistry, Text} from 'react-native';
let a = 'hello';

 console.log(a);

//creat a component
const App = () => (
  <Text>Some Text</Text>
);
//render it to the device
AppRegistry.registerComponent('albums', () => App);
