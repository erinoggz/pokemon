import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

const List = ({data}): React.JSX.Element => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.circleCard}></View>
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <Icon name="chevron-small-right" size={23} color="grey" />
    </View>
  );
};

export default List;
