// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { SignIn, SignUp, Dashboard } from './pages';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// function getSignedRoutes() {
//   return (
//     <Tab.Navigator initialRouteName="Dashboard">
//       <Tab.Screen name="Dashboard" component={Dashboard} />
//     </Tab.Navigator>
//   );
// }

// function getUnsignedRoutes() {
//   return (
//     <Stack.Navigator initialRouteName="SignIn">
//       <Stack.Screen name="SignIn" component={SignIn} />
//       <Stack.Screen name="SignUp" component={SignUp} />
//     </Stack.Navigator>
//   );
// }

// export default (isSigned = false) => {
//   return (
//     <NavigationContainer>
//       {isSigned ? getSignedRoutes() : getUnsignedRoutes()}
//     </NavigationContainer>
//   );
// };

import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  SignIn,
  SignUp,
  Dashboard,
  Profile,
  SelectDateTime,
  Confirm,
  Provider,
} from './pages';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            New: {
              screen: createStackNavigator(
                {
                  Provider: { screen: Provider },
                  SelectDateTime: { screen: SelectDateTime },
                  Confirm: { screen: Confirm },
                },
                {
                  initialRouteName: 'Provider',
                  defaultNavigationOptions: {
                    headerTitleAlign: 'center',
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                },
              ),
              navigationOptions: {
                tabBarLabel: 'Agendar',
                tabBarVisible: false,
                tabBarIcon: () => (
                  <Icon name="add-circle-outline" size={20} color="#fffffd66" />
                ),
              },
            },
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: '#ffffff77',
              style: {
                backgroundColor: '#8d41a8',
              },
            },
          },
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );
