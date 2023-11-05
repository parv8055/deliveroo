import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function BasketCard({ title, price, quantity }) {
  return (
    <View className="flex-row justify-between p-4 mb-2 bg-white rounded-2xl">
      <View>
        <Text className="text-base font-bold">{title}</Text>
        <Text className="pt-1 text-xs font-semibold">₹120</Text>
        <View className="flex-row items-center mt-2">
          <Text className="text-xs font-semibold">Edit </Text>
          <FontAwesome5 name="caret-right" size={14} color="gray" />
        </View>
      </View>
      <View>
        <View className="flex-row items-center px-2 py-1 border border-red-500 rounded-lg bg-red-50">
          <TouchableOpacity className="px-1">
            <Text className="font-bold text-red-950">-</Text>
          </TouchableOpacity>
          <Text className="px-2 font-bold">{quantity}</Text>

          <TouchableOpacity className="px-1">
            <Text className="font-bold text-center text-red-950">+</Text>
          </TouchableOpacity>
        </View>
        <Text className="mt-1 text-xs font-semibold text-right">₹{price*quantity}</Text>
      </View>
    </View>
  );
}
