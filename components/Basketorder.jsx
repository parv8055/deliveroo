import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";
import { FontAwesome5 } from "@expo/vector-icons";

const Basketorder = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const BasketTotal = useSelector(selectBasketTotal);

  // if (items.length == 0) return null;

  return (
    <View className="absolute bottom-0 z-50 w-full shadow-md">
      <View className="p-2 bg-red-500 rounded-t-xl">
        <Text className="text-xs font-extrabold text-white">
          Add item(s) worth ₹80 to reduce surge charges by ₹10
        </Text>
      </View>
      <View className="px-2 bg-white rounded-t-xl">
        <View className="flex-row justify-between py-2 border-b border-gray-200">
          <View>
            <Text className="text-base">
              delivery at <Text className="text-lg font-semibold">Home</Text>
            </Text>
            <Text className="text-sm text-gray-500">
              Malviya Nagar, Jaipur, Rajasthan, India
            </Text>
          </View>
          <Text className="text-lg font-extrabold"></Text>
        </View>
        <View className="flex-row items-center justify-between py-1 pt-2">
          <View className="items-center flex-1">
            <View className="flex-row items-center">
              <Text className="text-xs text-gray-500">PAYING USING</Text>
              <FontAwesome5 name="caret-up" size={14} color="gray" />
            </View>
            <Text className="text-sm font-semibold">Paytm Postpaid</Text>
          </View>
          <TouchableOpacity
            className="w-[60%] bg-red-500 py-3 p-3 rounded-xl flex-row justify-between items-center"
            onPress={() => navigation.navigate("PreparingOrderScreen")}
          >
            <View>
              <Text className="text-lg font-semibold text-white">
              ₹999 
              </Text>
              <Text className="text-xs text-white">TOTAL</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-lg font-semibold text-white">
                Place Order{" "}
              </Text>
              <FontAwesome5 name="caret-right" size={14} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Basketorder;
