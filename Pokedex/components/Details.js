import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import FastImage from 'react-native-fast-image';

const Details = props => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = () => {
    const {state} = props.navigation;
    fetch(`https://pokeapi.co/api/v2/pokemon/${state.params.pokemon}`)
      .then(res => res.json())
      .then(details => setDetails(details));
  };
  return details.name ? (
    <View style={{flex: 1, alignItems: 'center'}}>
      <FastImage
        style={styles.image}
        source={{
          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
            details.name
          }.png`,
          priority: FastImage.priority.normal,
        }}
      />

      <Text style={styles.text}>Name: {details.name}</Text>
      <Text style={styles.text}>Height: {details.height}</Text>
      <Text style={styles.text}>Weight: {details.weight}</Text>

      <Text style={styles.text}>Ability 1: {
        typeof details.abilities[0].ability.name  !== 'undefined' || details.abilities[0].ability.name === null ?
        details.abilities[0].ability.name : 'none'
      } </Text>

      <Text style={styles.text}>Ability 2: {
      typeof details.abilities[1].ability.name  !== 'undefined' || details.abilities[1].ability.name === null ?
      details.abilities[1].ability.name : 'none'
      } </Text>

    </View>
  ) : (
    <View style={styles.indicator}>
      <ActivityIndicator size="large" color="#E63F34" />
    </View>
  );
};
export default Details;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 22,
    marginBottom: 15,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
