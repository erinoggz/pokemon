import React from 'react';
import {Pressable, View} from 'react-native';
import Input from '../component/Input/Input';
import Search from 'react-native-vector-icons/AntDesign';
import List from '../component/card/List';
import {pokemonDummyData} from '../../constants/data';
interface Pokemon {
  name: string;
  url: string;
}

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  navigation,
}): React.ReactElement => {
  const navigateToDetails = (pokemon: Pokemon) => {
    navigation.navigate('Details', {pokemon});
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <Input
          background={'white'}
          placeholder="Search for Pokemon..."
          style={{paddingHorizontal: 50}}
        />
        <View style={{position: 'absolute', top: 18, left: 15}}>
          <Search name="search1" size={25} color="grey" />
        </View>
      </View>
      {pokemonDummyData.results.map((pokemon: Pokemon, index: number) => (
        <Pressable key={index} onPress={() => navigateToDetails(pokemon)}>
          <List data={pokemon} />
        </Pressable>
      ))}
    </View>
  );
};

export default HomeScreen;
