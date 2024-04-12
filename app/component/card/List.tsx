import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {pokemonDummyData} from '../../../constants/data';
import styles from './styles';

const List = ({data}): React.JSX.Element => {
  return (
    <>
      {data.results.map((pokemon, index) => (
        <TouchableOpacity key={index} style={styles.item}>
          <View>
            <Text>{pokemon.name}</Text>
          </View>
          <Icon name="chevron-small-right" size={23} color="grey" />
        </TouchableOpacity>
      ))}
    </>
  );
};

export default List;
