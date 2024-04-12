import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

interface ListItemProps {
  data: {name: string};
}

const List = ({data}: ListItemProps): React.JSX.Element => {
  return (
    <View style={styles.item}>
      <View>
        <Text>{data.name}</Text>
      </View>
      <Icon name="chevron-small-right" size={23} color="grey" />
    </View>
  );
};

export default List;
