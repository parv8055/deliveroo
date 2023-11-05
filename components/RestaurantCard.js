import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const RestaurantCard = ({ id, imgUrl, title, time, genre }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          time,
          genre,
        });
      }}
      className="bg-white rounded-lg shadow flex-row mb-2"
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className="w-24 rounded-l-lg h-24"
      />
      <View className="p-2 flex-col justify-between">
        <View>
          <Text className="text-base font-bold">{title}</Text>
          <Text className="text-xs text-gray-500">{genre}</Text>
        </View>
        <View className="flex-row items-center">
          <Entypo name="time-slot" size={10} color="green" />
          <Text className="text-xs text-gray-500">{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
