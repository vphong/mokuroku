import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import BrowseScreen from '../screens/BrowseScreen';
import LoginScreen from '../screens/LoginScreen';
import UserScreen from '../screens/UserScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MediaDetailScreen from '../screens/MediaDetailScreen';
import FilterScreen from '../screens/SearchFilterScreen';

export default TabNavigator(
  {
      Home: {
        screen: StackNavigator({
          Media: { screen: StackNavigator({
            Browse: { screen: BrowseScreen },
            Details: { screen: MediaDetailScreen }
          }, { mode: 'card', headerMode: 'none' })},
          Filters: { screen: FilterScreen }
        }, { mode: 'modal' })
      },
      User: {
        screen: StackNavigator({
          User: { screen: UserScreen },
          Login: { screen: LoginScreen },
        }, {mode: 'modal'})
      },
      Settings: {
        screen: SettingsScreen,
      }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
          case 'Links':
            iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
            break;
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
