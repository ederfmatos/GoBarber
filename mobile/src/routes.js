import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SignIn, SignUp } from './pages';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  }),
);
