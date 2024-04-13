import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, Pressable} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {searchPokemon} from '../../api/api';
import Input from '../../component/Input/Input';
import Search from 'react-native-vector-icons/AntDesign';
import {COLORS, FONTS} from '../../../constants/theme';
import Loader from '../../component/Loader/Loader';

export function SearchScreen({navigation}) {
  const [text, setText] = useState('');
  const {data, fetchStatus, error} = useQuery<any>(
    ['pokemon', text],
    () => searchPokemon(text.toLowerCase()),
    {
      enabled: !!text,
    },
  );
  console.log(data);

  useEffect(() => {
    if (data) {
      navigation.replace('Details', {
        name: data.name,
      });
    }
  }, [data]);

  return (
    <View style={{flex: 1, padding: 16}}>
      <View>
        <Input
          background={'white'}
          placeholder="Search for Pokemon..."
          onSubmitEditing={({nativeEvent}) => setText(nativeEvent.text)}
        />
        <View style={{position: 'absolute', top: 18, left: 15}}>
          <Search name="search1" size={25} color="grey" />
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {!!error && (
          <View>
            <Text style={{fontSize: 18, color: 'gray'}}>
              No results found for {text}
            </Text>
            <Pressable onPress={() => navigation.goBack()}>
              <Text
                style={{
                  ...FONTS.base,
                  color: COLORS.secondary,
                  marginHorizontal: 10,
                  textAlign: 'center',
                }}>
                Go Back
              </Text>
            </Pressable>
          </View>
        )}
        {fetchStatus === 'fetching' && <Loader />}
      </View>
    </View>
  );
}
