import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const BasketIcon = ({ title }) => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const BasketTotal = useSelector(selectBasketTotal);

  // if (items.length == 0) return null;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Basket", {
          title,
        })
      }
      className="absolute bottom-0 z-50 items-center w-full p-2 bg-red-500 shadow-md rounded-t-xl"
    >
      <Text className="px-2 py-1 text-lg font-extrabold text-white">{items.length} items added</Text>
      <Text className="flex-1 text-sm font-extrabold text-center text-white">
       Congratulations! Your delivery is free.
      </Text>
    </TouchableOpacity>
  );
};

export default BasketIcon;
