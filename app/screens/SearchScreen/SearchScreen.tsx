import React, {useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {searchPokemon} from '../../api/api';
import Input from '../../component/Input/Input';
import Search from 'react-native-vector-icons/AntDesign';
import Loader from '../../component/Loader/Loader';
import styles from './styles';

export function SearchScreen({navigation}) {
  const [text, setText] = useState('');
  const {data, fetchStatus, error} = useQuery<any>(
    ['pokemon', text],
    () => searchPokemon(text.toLowerCase()),
    {
      enabled: !!text,
    },
  );

  useEffect(() => {
    if (data) {
      navigation.replace('Details', {
        name: data.name,
      });
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <View>
        <Input
          background={'white'}
          placeholder="Search for Pokemon..."
          onSubmitEditing={({nativeEvent}) => setText(nativeEvent.text)}
        />
        <View style={styles.iconContainer}>
          <Search name="search1" size={25} color="grey" />
        </View>
      </View>
      <View style={styles.error}>
        {!!error && (
          <View>
            <Text style={styles.errorText}>No results found for {text}</Text>
            <Pressable onPress={() => navigation.goBack()}>
              <Text style={styles.gobackButton}>Go Back</Text>
            </Pressable>
          </View>
        )}
        {fetchStatus === 'fetching' && <Loader />}
      </View>
    </View>
  );
}
