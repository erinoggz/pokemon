import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {COLORS} from '../../constants/theme';

const Stack = createNativeStackNavigator();

export const Router = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
