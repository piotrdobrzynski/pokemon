import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

const Pokemons = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const [searchfeild, setSearchfeild] = useState('');

    useEffect(() => {
     fetchPokemons();
    },[]);

    const fetchPokemons = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
            .then(response => response.json())
            .then(pokemons => setPokemons(pokemons.results));
    };
}
export default Pokemons;
