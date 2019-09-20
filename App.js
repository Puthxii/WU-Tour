/*Example of SQLite Database in React Native*/
import React from 'react';
//For react-navigation 3.0+
//import { createAppContainer, createStackNavigator } from 'react-navigation';
//For react-navigation 4.0+
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
 
import Home from './pages/Home';
import Staff from './pages/Staff';
import Customer from './pages/Customer';
import Product from './pages/Product';
import Booking from './pages/Booking';
import Edit from './pages/Edit';
import Map from './pages/Map';
import Profile from './pages/Profile';
import Chart from './pages/Chart';
import Booking2 from './pages/Booking2';
import Booked from './pages/Booked';






const App = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      headerStyle: { backgroundColor: '#fac9bb' },
      headerTintColor: '#715644',
    },
  },
  Staff: {
      screen: Staff,
      navigationOptions: {
        title: 'Staff',
        headerStyle: { backgroundColor: '#fac9bb' },
        headerTintColor: '#715644',
      },
  },
  Customer: {
    screen: Customer,
    navigationOptions: {
      title: 'Customer',
      headerStyle: { backgroundColor: '#fac9bb' },
      headerTintColor: '#715644',
    },
  },
  Product: {
    screen: Product,
    navigationOptions: {
      title: 'Package',
      headerStyle: { backgroundColor: '#fac9bb' },
      headerTintColor: '#715644',
    },
  },
  Booking: {
    screen: Booking,
    navigationOptions: {
      title: 'Booking',
      headerStyle: { backgroundColor: '#fac9bb' },
      headerTintColor: '#715644',
    },
  },
  Edit: {
    screen: Edit,
    navigationOptions: {
      title: 'Edit',
      headerStyle: { backgroundColor: '#fac9bb' },
      headerTintColor: '#715644',
    },
  },
  Map: {
    screen: Map,
    navigationOptions: {
      title: 'Map',
      headerStyle: { backgroundColor: '#fac9bb' },
      headerTintColor: '#715644',
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
      headerStyle: { backgroundColor: '#fac9bb' },
      headerTintColor: '#715644',
    },
  },
  Chart: {
    screen: Chart,
    navigationOptions: {
      title: 'Chart',
      headerStyle: { backgroundColor: '#fac9bb' },
      headerTintColor: '#715644',
    },
  },
  Booked: {
    screen: Booked,
    navigationOptions: {
      title: 'Booked',
      headerStyle: { backgroundColor: '#fac9bb' },
      headerTintColor: '#715644',
    },
  },
  Booking2: {
    screen: Booking2,
    navigationOptions: {
      title: 'Booking',
      headerStyle: { backgroundColor: '#fac9bb' },
      headerTintColor: '#715644',
    },
  },

});
export default createAppContainer(App);