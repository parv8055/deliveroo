import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { supabase } from "./api";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { menuData } from "../data/data";
export default function Restaurant() {
  const navigation = useNavigation();
  const [menu, setmenu] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // const { data, error } = await supabase
      // .from('restaurantmenu')
      // .select('*')      
      // console.log(menuData);
      // console.log(data);
    };
    setmenu(menuData);
    fetchData();
  }, []);

  const { params: {
      imgUrl,
      title,
      rating,
      genre
  } } = useRoute()
  return (
    <SafeAreaView className='flex-1'>
      <BasketIcon title={title}/>
      <ScrollView>
        <View>
          <Image
            source={{ uri: "https://links.papareact.com/gn7" }}
            className="w-full h-56 p-4 bg-gray-300"
          />
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row my-1 space-x-6">
              <View className="flex-row items-center space-x-1">
                <Text className="text-xs text-gray-500">
                  ★<Text className="text-green-500">{rating}</Text> . Offers
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Text className="text-xs text-gray-500">
                  <Text className="text-gray-500">Nearby</Text> . 123 Main
                  street
                </Text>
              </View>
            </View>
            <Text className="pb-4 mt-2 text-gray-500">
              YO! Sushi was founded in 1997, by British entrepreneur Simon
              Woodroffe.The current owner is Mayfair Equity Partners and members
              of the YO! Sushi Senior Management team.
            </Text>
          </View>
        </View>
        <View className="bg-white">
          <Text className="p-2 text-xl font-bold">Recommended</Text>
          <View className="mb-6">
            {menu?.map((e) => (
              <DishRow
              key={e?.id}
                title={e?.title}
                desc={e?.desc}
                price={e?.price}
                img={e?.img}
              /> 
            ))}

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>    
  );
}
