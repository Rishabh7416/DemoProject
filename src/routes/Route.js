import * as Sentry from '@sentry/react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Men from '../screens/Home/men/Men';
import Like from '../screens/likeScreen/Like';
import Profile from '../screens/profile/Profile';
import Category from '../screens/categories/Category';
import Home from '../screens/Home';

const BottomTab = createBottomTabNavigator();

function Route() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 30, width: 30}}
              source={
                focused
                  ? require('../assets/images/home-active.png')
                  : require('../assets/images/home.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Category"
        component={Category}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 30, width: 30}}
              source={
                focused
                  ? require('../assets/images/categories-active.png')
                  : require('../assets/images/categories.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Men"
        component={Men}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 30, width: 30}}
              source={
                focused
                  ? require('../assets/images/influencer-super-star.png')
                  : require('../assets/images/influencer-star.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Like"
        component={Like}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 30, width: 30}}
              source={
                focused
                  ? require('../assets/images/wishlist-active.png')
                  : require('../assets/images/wishlist.png')
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 30, width: 30}}
              source={
                focused
                  ? require('../assets/images/account-active.png')
                  : require('../assets/images/account.png')
              }
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default Sentry.withProfiler(React.memo(Route));