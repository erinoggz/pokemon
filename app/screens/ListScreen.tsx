import React from 'react';
import {View, ActivityIndicator, Pressable, StyleSheet} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {useNavigation} from '@react-navigation/native';

import {searchPokemon} from '../api/api';
import List from '../component/card/List';
import {getTypeColor} from '../../constants/helper';
import {COLORS, SIZES} from '../../constants/theme';
import Loader from '../component/Loader/Loader';

/**
 * ListScreen component for displaying a Pokemon card.
 * @param {Object} props - Component props.
 * @param {string} props.name - Name of the Pokemon.
 * @returns {JSX.Element} - Rendered component.
 */
const ListScreen = ({name}: {name: string}): JSX.Element => {
  // Fetch data using useQuery hook
  const {isLoading, error, data} = useQuery(['pokemon', name], () =>
    searchPokemon(name),
  );

  const navigation = useNavigation(); // Initialize navigation hook

  // Display loading indicator if data is loading
  if (isLoading) {
    return <Loader />;
  }

  /**
   * Function to navigate to details page.
   * @param {string} name - Name of the Pokemon.
   */
  const goToDetailsPage = (name: string) => {
    navigation.navigate('Details', {name});
  };

  return (
    <Pressable onPress={() => goToDetailsPage(name)}>
      <List
        name={data.name}
        background={getTypeColor(data.types[0].type.name)}
        imageUri={data.sprites.other['official-artwork'].front_default}
      />
    </Pressable>
  );
};

export default ListScreen; // Export ListScreen component
