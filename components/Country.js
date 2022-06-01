import { View, Text, Image } from "react-native";
import React from "react";

export default function Country({ country }) {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>
        Country Name: {country?.name?.common}
      </Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: country.flags.png }}
      ></Image>
    </View>
  );
}
