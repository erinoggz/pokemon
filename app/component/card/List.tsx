import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './listStyles';

interface ListProps {
  name: string;
  background: string;
  imageUri: string;
}

/**
 * List component representing a Pokemon card.
 * @param {ListProps} props - Component props.
 * @returns {JSX.Element} - Rendered component.
 */
const List = ({name, background, imageUri}: ListProps): React.JSX.Element => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View
          style={[
            styles.circleCard,
            // Set background color based on Pokemon type
            {backgroundColor: `${background}`},
          ]}>
          <Image
            source={{
              uri: imageUri,
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
      <Icon name="chevron-small-right" size={23} color="grey" />
    </View>
  );
};

export default List;
