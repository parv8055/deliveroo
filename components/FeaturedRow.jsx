import { View, Text, ScrollView } from "react-native";
import React from "react";
import RestaurantCard from "./RestaurantCard";
import { AntDesign } from "@expo/vector-icons";
const FeaturedRow = ({ title, description, id, data }) => {
  return (
    <View className="mt-2">
      <View className="flex-row w-full justify-between items-center px-2">
        <View>
          <Text className="text-lg font-bold">{title}</Text>
          <Text className="text-xs text-gray-500">{description}</Text>
        </View>
        <Text>
          <AntDesign name="arrowright" size={20} color="black" />
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <View className='mx-2'>
          <RestaurantCard
            id={123}
            imgUrl="https://rapidapi-prod-apis.s3.amazonaws.com/45e2cb52-3c42-4745-b325-ee5c60edbd57.png"
            title="Subway"
            time="25-30 min"
            genre="Janpanese"
          />
          <RestaurantCard
            id={123}
            imgUrl="https://rapidapi-prod-apis.s3.amazonaws.com/45e2cb52-3c42-4745-b325-ee5c60edbd57.png"
            title="Subway"
            time="25-30 min"
            genre="Janpanese"
          />
        </View>
        <View className='mx-2'>
          <RestaurantCard
            id={123}
            imgUrl="https://rapidapi-prod-apis.s3.amazonaws.com/45e2cb52-3c42-4745-b325-ee5c60edbd57.png"
            title="Subway"
            time="25-30 min"
            genre="Janpanese"
          />
          <RestaurantCard
            id={123}
            imgUrl="https://rapidapi-prod-apis.s3.amazonaws.com/45e2cb52-3c42-4745-b325-ee5c60edbd57.png"
            title="Subway"
            time="25-30 min"
            genre="Janpanese"
          />
        </View>
        <View className='mx-2'>
          <RestaurantCard
            id={123}
            imgUrl="https://rapidapi-prod-apis.s3.amazonaws.com/45e2cb52-3c42-4745-b325-ee5c60edbd57.png"
            title="Subway"
            time="25-30 min"
            genre="Janpanese"
          />
          <RestaurantCard
            id={123}
            imgUrl="https://rapidapi-prod-apis.s3.amazonaws.com/45e2cb52-3c42-4745-b325-ee5c60edbd57.png"
            title="Subway"
            time="25-30 min"
            genre="Janpanese"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
