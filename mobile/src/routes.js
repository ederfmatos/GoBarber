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
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import { SignIn, SignUp, Dashboard, Profile } from './pages';

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
