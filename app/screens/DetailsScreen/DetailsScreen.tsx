import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {fetchFn, searchPokemon} from '../../api/api';
import {filterString, removeEscapeCharacters} from '../../../constants/helper';
import styles from './styles';
import Loader from '../../component/Loader/Loader';

type DetailsProps = {
  route: {params: {name: string}};
};

export function DetailsScreen({route}: DetailsProps) {
  const {name} = route.params;
  const {data} = useQuery(['pokemon', name], () => searchPokemon(name));
  const {isLoading: isSpeciesLoading, data: species} = useQuery(
    ['species', name],
    () => fetchFn(data?.species.url || ''),
    {
      enabled: !!data,
    },
  );

  // Render loader while species is loading
  if (isSpeciesLoading) {
    return <Loader />;
  }

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
