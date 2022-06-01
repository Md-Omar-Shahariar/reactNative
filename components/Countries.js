import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, SetCountries] = useState();
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => SetCountries(data));
  }, []);
  return (
    <View>
      <Text>Countries: {countries?.length}</Text>
      <ScrollView>
        {countries?.map((country, index) => (
          <Country key={index} country={country}></Country>
        ))}
      </ScrollView>
      <Text>Countries: {countries?.length}</Text>
    </View>
  );
}
