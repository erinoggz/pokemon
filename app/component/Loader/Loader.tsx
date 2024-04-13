import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {COLORS} from '../../../constants/theme';

/**
 * Loader component. Shows a spinner
 * @returns {JSX.Element} - Rendered component.
 */
export const Loader = (): React.JSX.Element => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={COLORS.secondary} />
  </View>
);

// Styles for the Loader component
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default Loader;
