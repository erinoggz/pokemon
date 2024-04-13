import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {COLORS} from '../../constants/theme';
import {DetailsScreen} from '../screens/DetailsScreen/DetailsScreen';
import {SearchScreen} from '../screens/SearchScreen/SearchScreen';
import {Pressable} from 'react-native';
import Search from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export const Router = (): React.JSX.Element => {
  const navigation = useNavigation();

  /**
   * Function to navigate to search page.
   */
  const goToSearchPage = () => {
    return (
      <Pressable onPress={() => navigation.navigate('Search')}>
        <Search name="search1" size={25} color="white" />
      </Pressable>
    );
  };

  return (
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
          headerLeft: () => goToSearchPage(),
        })}
      />
      <Stack.Screen
        component={DetailsScreen}
        name="Details"
        options={{
          headerTitle: '',
          headerTintColor: COLORS.secondary,
          headerShadowVisible: false,
        }}
      />
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
