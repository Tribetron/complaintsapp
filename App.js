/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NativeRouter, Route, Switch } from "react-router-native";
import Home from './src';
import Complaint from './src/components/complaint';
import Compliment from './src/components/compliment';
import Rating from './src/components/rating';
import Satisfaction from './src/components/satisfaction';

// const [isUserLoggedin,onLogChange] = useState(false);

// const getData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('loggedInValue')
//     if(value !== null) {
//       if(value =="true"){
//       onLogChange(true);
//       }
//     }else{
//       onLogChange(false);
//     }
//   } catch(e) {
//   }
// }
const isUserLoggedin = false;

// getData();



const App = () => {

  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/complaint" component={Complaint}/>
        <Route path="/satisfaction" component={Satisfaction}/>
        <Route path="/rating" component={Rating}/>
        <Route path="/compliment" component={Compliment}/>
      </Switch>
    </NativeRouter>
   
  );
};



export default App;
