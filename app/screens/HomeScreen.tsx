import React from 'react';
import {View} from 'react-native';
import Input from '../component/Input/Input';
import Search from 'react-native-vector-icons/AntDesign';
import List from '../component/card/List';
import {pokemonDummyData} from '../../constants/data';

const HomeScreen = (): React.JSX.Element => {
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
      <List data={pokemonDummyData} />
    </View>
  );
};

export default HomeScreen;
