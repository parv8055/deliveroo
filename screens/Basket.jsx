import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Currency from "react-currency-formatter";
import Basketorder from "../components/Basketorder";
import { Ionicons } from "@expo/vector-icons";
import BasketCard from "../components/BasketCard";

const Basket = () => {
  const navigation = useNavigation();
  const {
    params: { title },
  } = useRoute();
  return (
    <SafeAreaView className="flex-1">
      <Basketorder />
      <TouchableOpacity
          className="flex-row items-center p-2 bg-white"
          onPress={() => navigation.navigate("Restaurant")}
        >
          <Ionicons name="chevron-back-outline" size={24} color="black" />
          <Text className="text-2xl font-bold text-center">{title}</Text>
        </TouchableOpacity>
        <ScrollView className='mx-3 mb-44'>
        <View className="flex-row items-center px-4 py-3 my-2 bg-white rounded-xl">
            <Text className="">
              Deliver in <Text className="font-bold">25-30 min</Text>
            </Text>
          </View>
          <View className="my-2 mb-4">
            <Text className="text-lg text-center text-gray-600">
              ITEM(S) ADDED
            </Text>
          </View>

          <View>
            <BasketCard title="Burger" price={199} quantity={1} />
            <BasketCard title="Burger" price={249} quantity={2} />
            <BasketCard title="Burger" price={99} quantity={3} />
            <BasketCard title="Burger" price={99} quantity={1} />
            <BasketCard title="Burger" price={399} quantity={2} />
            <BasketCard title="Burger" price={299} quantity={9} />
          </View>
          <View className="my-2 mb-4">
            <Text className="text-lg text-center text-gray-600">
              BILL SUMMARY
            </Text>
          </View>
          <View className="p-2 bg-white rounded-xl">
            <View className="flex-row justify-between my-1">
              <Text className="text-base font-bold">Subtotal</Text>
              <Text className="text-base font-bold">
              ₹999
              </Text>
            </View>

            <View className="flex-row justify-between my-1">
              <Text className="text-sm">GST</Text>
              <Text className="text-sm">
              ₹52
              </Text>
            </View>
            <View className="flex-row justify-between my-1">
              <Text className="text-sm">Delivery partner fee (upto to 4 Km)</Text>
              <Text className="text-sm">
              ₹28
              </Text>
            </View>

            <View className="flex-row justify-between my-1">
              <Text className="text-base font-bold">Grand Total</Text>
              <Text className="text-base font-bold">
              ₹999
              </Text>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Basket;
