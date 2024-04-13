import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {fetchFn, searchPokemon} from '../api/api';
import {getTypeColor, removeEscapeCharacters} from '../../constants/helper';
import {COLORS} from '../../constants/theme';

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
  if (!data) return null;
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
        <View>
          <Text>Description</Text>
          {!!species && (
            <Text style={{fontSize: 12, color: 'blue'}}>
              {removeEscapeCharacters(
                species.flavor_text_entries[0].flavor_text,
              )}
            </Text>
          )}
        </View>

        <View>
          <Text>Types</Text>
          <View style={{flexDirection: 'row'}}>
            {data.types.map(type => (
              <View
                key={type.type.name}
                style={{
                  backgroundColor: `${getTypeColor(type.type.name)}`,
                  padding: 4,
                  alignItems: 'center',
                  marginHorizontal: 4,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                  }}>
                  {type.type.name}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View>
          <Text>Weight</Text>
          <Text>{data?.weight}</Text>
        </View>
        <View>
          <Text>Abilities</Text>
          {data?.abilities.map(data => (
            <View key={data.ability.name}>
              <Text
                style={{
                  fontSize: 12,
                  textTransform: 'capitalize',
                }}>
                {data.ability.name}
              </Text>
            </View>
          ))}
        </View>
        <View>
          <Text>Stats</Text>
          {data?.stats.map(data => (
            <View key={data.stat.name}>
              <Text
                style={{
                  fontSize: 12,
                  textTransform: 'capitalize',
                }}>
                {data.stat.name}: {data.base_stat}
              </Text>
            </View>
          ))}
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
  inputViews: {
    paddingBottom: 16,
  },
  iconStyle: {
    position: 'absolute',
    top: 13,
    right: 15,
  },
  imageIconStyle: {
    position: 'absolute',
    bottom: 15,
    right: 2,
  },
  view3: {
    flex: 3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: COLORS.white,
    padding: 20,
    marginTop: 54,
  },
  paddingView: {paddingHorizontal: 21, marginBottom: 23},
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  text1: {
    fontFamily: 'Raleway',
    textTransform: 'capitalize',

    fontSize: 24,
    color: COLORS.white,
    marginTop: 18,
  },
});
