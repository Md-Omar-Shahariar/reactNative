import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, SetCountries] = useState([]);
  const [searched, setSearched] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setSearched(data);
        SetCountries(data);
      });
  }, []);

  const handleSearch = (text) => {
    const filter = countries.filter((country) =>
      country.name.common.includes(text)
    );
    setSearched(filter);
  };
  return (
    <View style={{ marginTop: 20, padding: 20 }}>
      <ScrollView>
        <Text style={styles.header}>Countries: {searched?.length}</Text>
        <TextInput onChangeText={handleSearch} style={styles.input}></TextInput>
        {searched?.map((country, index) => (
          <Country key={index} country={country}></Country>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    fontSize: 40,
    color: "red",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
});
