import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {COLORS} from '../../constants/theme';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export const Router = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerBackTitleVisible: false,
          animation: 'fade',
        }}>
        <Stack.Screen
          component={HomeScreen}
          name="Home"
          options={{
            headerTitle: 'Pokémon',
            headerTintColor: COLORS.white,
            headerStyle: {
              backgroundColor: COLORS.black,
            },
            // headerTitleStyle: {fontWeight: '100'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          component={DetailsScreen}
          name="Details"
          options={{
            headerTitle: '',
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
