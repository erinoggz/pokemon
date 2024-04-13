import React from 'react';
import {StyleSheet} from 'react-native';
import {useInfiniteQuery, QueryFunction} from '@tanstack/react-query';
import {fetchPokemon} from '../api/api';
import {FlashList} from '@shopify/flash-list';
import ListScreen from './ListScreen';
import {Loader} from '../component/Loader/Loader';
import {COLORS} from '../../constants/theme';
import NoData from '../pages/NoData';

interface PokemonResponse {
  count: number;
  next: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  };
}

/**
 * HomeScreen component displaying a FlashList of ListScreen card data.
 * Fetches and displays a list of Pokemon.
 * @returns {JSX.Element} - Rendered component.
 */
export function HomeScreen(): React.JSX.Element {
  // Fetch data using useInfiniteQuery hook
  const {data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage} =
    useInfiniteQuery<PokemonResponse, Error>(
      ['pokemons'],
      fetchPokemon as QueryFunction<PokemonResponse>,
      {
        getNextPageParam: lastPage => lastPage.next,
      },
    );

  // Function to load more data
  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  // Render loader while data is loading
  if (isLoading) {
    return <Loader />;
  }

  // If no data, return no data page
  if (!data) {
    return <NoData />;
  }

  return (
    // Render FlashList with fetched data
    <FlashList
      contentContainerStyle={styles.content}
      data={data?.pages?.flatMap(page => page.results)}
      // Provide an estimated item size for better scroll performance
      estimatedItemSize={62}
      keyExtractor={item => item?.name}
      // Render loading indicator at the bottom while fetching next page
      ListFooterComponent={isFetchingNextPage ? <Loader /> : null}
      ListFooterComponentStyle={styles.ListFooter}
      onEndReached={loadMore}
      renderItem={({item}) => <ListScreen name={item.name} />}
    />
  );
}

const styles = StyleSheet.create({
  content: {padding: 2, backgroundColor: COLORS.white},
  ListFooter: {paddingVertical: 20},
});

export default HomeScreen;
