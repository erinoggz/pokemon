import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {COLORS} from '../../constants/theme';
import {DetailsScreen} from '../screens/DetailsScreen/DetailsScreen';
import {SearchScreen} from '../screens/SearchScreen';
import {TouchableOpacity} from 'react-native';
import Search from 'react-native-vector-icons/AntDesign';

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
          options={({navigation}) => ({
            headerTitle: 'Pokémon',
            headerTintColor: COLORS.white,
            headerStyle: {
              backgroundColor: COLORS.secondary,
            },
            // headerTitleStyle: {fontWeight: '100'},
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Search name="search1" size={25} color="white" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          component={DetailsScreen}
          name="Details"
          options={{
            headerTitle: '',
            headerShadowVisible: false,
          }}
        />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
