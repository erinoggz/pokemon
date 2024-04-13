import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {fetchFn, searchPokemon} from '../api/api';
import {filterString, removeEscapeCharacters} from '../../constants/helper';
import {COLORS, FONTS} from '../../constants/theme';

export function DetailsScreen({route}) {
  const {name} = route.params;
  const {data} = useQuery(['pokemon', name], () => searchPokemon(name));
  const {isLoading: isSpeciesLoading, data: species} = useQuery(
    ['species', name],
    () => fetchFn(data?.species.url || ''),
    {
      enabled: !!data,
    },
  );

  return (
    <ScrollView style={styles.view1}>
      <View style={styles.view2}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: data.sprites.other['official-artwork'].front_default,
            }}
          />
        </View>
        <View>
          <Text style={styles.text1}>{name}</Text>
        </View>
      </View>
      <View style={styles.view3}>
        <View style={styles.container}>
          <Text style={styles.title}>Description</Text>
          {!!species && (
            <Text style={styles.description}>
              {removeEscapeCharacters(
                species.flavor_text_entries[0].flavor_text,
              )}
            </Text>
          )}
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Types</Text>
          <View style={styles.typesWrapper}>
            {data.types.map(type => (
              <View key={type.type.name} style={styles.types}>
                <Text style={styles.text2}>{type.type.name}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Stats</Text>
          {data?.stats.map(data => (
            <View key={data.stat.name} style={styles.barContainer}>
              <View>
                <Text style={styles.statsText}>
                  {filterString(data.stat.name)}
                </Text>
              </View>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressBarInner,
                    {width: `${data.base_stat}%`},
                  ]}>
                  <Text style={styles.baseStats}>{data.base_stat}%</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Weight</Text>
          <Text style={styles.description}>{data?.weight}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Abilities</Text>

          <View style={styles.typesWrapper}>
            {data.abilities.map(type => (
              <View key={type.ability.name} style={styles.types}>
                <Text style={styles.text2}>{type.ability.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    flexDirection: 'column',
  },
  view2: {
    flex: 2,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  view3: {
    flex: 3,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: COLORS.primary,
    padding: 30,
    marginTop: 20,
  },
  container: {
    marginBottom: 15,
  },
  title: {
    ...FONTS.base,
    textTransform: 'uppercase',
    marginBottom: 5,
    color: COLORS.secondary,
  },
  description: {
    ...FONTS.base_small,
  },
  text2: {
    ...FONTS.small,
    color: COLORS.white,
    textTransform: 'uppercase',
  },
  typesWrapper: {flexDirection: 'row'},
  types: {
    backgroundColor: COLORS.secondary,
    borderRadius: 25,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  typesText: {
    ...FONTS.base_small,
    textTransform: 'capitalize',
  },
  statsText: {
    ...FONTS.base_small,
    textTransform: 'capitalize',
    width: 50,
  },
  baseStats: {
    ...FONTS.small,
    paddingLeft: 5,
    color: COLORS.white,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 999,
    borderColor: COLORS.white,
    borderWidth: 2,
  },
  text1: {
    ...FONTS.large,
    textTransform: 'capitalize',
    color: COLORS.white,
    marginTop: 18,
  },
  barContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
  },
  progressBar: {
    backgroundColor: COLORS.grey,
    height: 15,
    borderRadius: 12,
    marginBottom: 7,
    marginLeft: 10,
    width: '100%',
  },
  progressBarInner: {
    backgroundColor: COLORS.secondary,
    height: 16,
    borderRadius: 12,
    width: '30%',
    textAlign: 'center',
  },
});
