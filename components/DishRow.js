import { View, Text, TouchableOpacity, Image } from "react-native";
import Currency from "react-currency-formatter";
import React, { useState } from "react";

export default function DishRow({ title, desc, price, img }) {
  return (
    <>
      <View className={`bg-white border p-4 border-gray-200`}>
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="mb-1 text-lg font-semibold">{title}</Text>
            <Text className="pb-2 text-sm">₹{price}</Text>
            <Text className="pb-2 text-sm text-gray-500">{desc}</Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              source={{ uri: img }}
              className="p-4 bg-gray-300 rounded-lg w-36 h-36"
            />
            <TouchableOpacity className="w-[80%] border p-2 rounded-lg border-red-500 m-auto relative -top-5 bg-red-50">
              <Text className="font-bold text-center text-red-950">ADD</Text>
            </TouchableOpacity>
        
          </View>
        </View>
      </View>
    </>
  );
}
