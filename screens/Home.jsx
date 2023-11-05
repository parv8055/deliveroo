import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
const Home = () => {
  const navigation = useNavigation();
  const [featured, setFeatured] = useState([]);
  const [tastyDiscount, setTastyDiscount] = useState([]);
  const [offer, setOffer] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "TES",
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* <View className='absolute w-full border mt-6 p-2 border-b-lg rounded-b-lg bg-white'>
      <View className="flex-row items-center bg-white">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="p-4 bg-gray-300 rounded-full h-7 w-7"
        />
        <View>
          <Text className="text-xs font-bold text-gray-400">Deliver Now!</Text>
          <Text className="text-xl font-bold">Current Location</Text>
        </View>
      </View>
      <View className="p-2 bg-white rounded-lg">
          <TextInput
            placeholder="Restaurants and cuisines......"
            keyboardType="default"
          ></TextInput>
        </View>
      </View> */}

      <ScrollView className="bg-gray-100">
        <View className="w-full h-96">
          <Image
            source={require("../assets/banner.jpg")}
            className="h-full w-full"
          />
        </View>
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements for our partners"
          data={featured}
        />
        <View className="my-2 mb-4">
          <Text className="text-lg text-center text-gray-600">
            WHATS ON YOUR MIND ?
          </Text>
        </View>
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
