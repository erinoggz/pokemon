import React from 'react';
import {View} from 'react-native';
import Input from '../component/Input/Input';

export function SearchScreen({navigation}) {
  return (
    <View style={{flex: 1, padding: 16}}>
      <Input
        placeholder="Search for Pokémon..."
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          paddingHorizontal: 16,
          paddingVertical: 12,
          fontSize: 14,
        }}
      />
    </View>
  );
}
