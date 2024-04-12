import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

const List = ({data}): React.JSX.Element => {
  return (
    <>
      {data.results.map((pokemon, index) => (
        <Pressable key={index} style={styles.item}>
          <View>
            <Text>{pokemon.name}</Text>
          </View>
          <Icon name="chevron-small-right" size={23} color="grey" />
        </Pressable>
      ))}
    </>
  );
};

export default List;
