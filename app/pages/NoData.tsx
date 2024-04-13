import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const NoData = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Data Available</Text>
    </View>
  );
};

export default NoData;
