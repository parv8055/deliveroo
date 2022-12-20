import { View, Text, SafeAreaView, TouchableOpacity, Image, restaurant } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import * as Progress from "react-native-progress";

export default function DeliveryScreen() {

    const navigation = useNavigation();
    return (
        <View className="bg-[#00ccbb] flex-1 pt-12">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Text>❌</Text>
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>

                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                            <Text className="text-2xl font-bold">30-35 Minutes</Text>
                        </View>

                        <Image source={{ uri: "https://links.papareact.com/fls" }} className="h-20 w-20" />
                    </View>
                    <Progress.Bar size={30} color="#00ccbb" indeterminate={true} />

                    <Text className="mt-3 text-gray-500">
                        Your order is being prepared             </Text>
                </View>

                <View className="mt-96 bg-white flex-row items-center space-x-5 h-48">
                    <Image source={{ uri: "https://links.papareact.com/wru" }} className="h-14 w-14 bg-gray-300 p-4 rounded-full ml-5" />

                    <View className="flex-1">
                        <Text className="text-lg">Jald milenge</Text>
                        <Text className="text-gray-400">Your Rider</Text>
                    </View>

                    <Text className="text-[#b40626] text-lg mr-5 font-bold">Call</Text>
                </View>

            </SafeAreaView>
        </View >
    )
}