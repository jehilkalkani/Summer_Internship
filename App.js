import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet } from 'react-native';

import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import AddReviewScreen from './screens/AddReviewScreen';
import EditReviewScreen from './screens/EditReviewScreen';
// import SearchScreen from './screens/SearchScreen';
// import ReviewScreen from './screens/ReviewScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...TransitionPresets.FadeFromBottomAndroid,
        transitionSpec: {
          open: fadeAnimation,
          close: fadeAnimation,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'What Do you want to review ?',
        }}
      />
      <Stack.Screen
        name="AddReview"
        component={AddReviewScreen}
      />
      <Stack.Screen
        name="EditReview"
        component={EditReviewScreen}
      />
    </Stack.Navigator>
  );
};

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      setAppReady(true);
    }, 3000); // Change the duration to your desired splash screen duration
  }, []);

  return appReady ? (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#ff6b6b',
          inactiveTintColor: '#888888',
          style: {
            backgroundColor: '#ffffff',
            borderTopWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 5,
            height: 60, 
          },
          labelStyle: {
            fontWeight: 'bold',
            fontSize: 12,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={AppContainer}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('./images/home.png') : require('./images/home.png')}
                style={styles.tabIcon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="WatchList"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('./images/watchlist.png') : require('./images/watchlist.png')}
                style={styles.tabIcon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Review"
          component={ReviewScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? require('./images/review.png') : require('./images/review.png')}
                style={styles.tabIcon}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <SplashScreen />
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    width: 50,
    height: 26,
    resizeMode: 'contain',
  },
});

export default App;
