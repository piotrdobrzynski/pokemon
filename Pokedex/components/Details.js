import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';

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
  return(<View></View>);
}
export default Details;

const styles = StyleSheet.create({  
  container: {    
   display: 'flex',    
   flexDirection: 'row',    
   flexWrap: 'wrap',    
   justifyContent: 'center',    
   marginTop: 30,  
  }, 
});
