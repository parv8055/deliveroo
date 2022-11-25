import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';

export default function Restaurantscreen() {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            // headerTitle:"Testing the fucki "
            headerShown: false
            ///for hidding
        })
    }, [])
    // const { params: {
    //     imgUrl,
    //     title,
    //     rating,
    //     genre
    // } } = useRoute()
    return (
        <>
            <BasketIcon />
            <ScrollView>
                <View>
                    <Image source={{ uri: "https://links.papareact.com/gn7" }}
                        className="h-56 w-full bg-gray-300 p-4"
                    />
                </View>
                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold">Yo! Sushi</Text>
                        <View className="flex-row space-x-6 my-1">
                            <View className="flex-row items-center space-x-1">
                                <Text className="text-xs text-gray-500">★
                                    <Text className="text-green-500">4.5</Text> . Offers
                                </Text>
                            </View>

                            <View className="flex-row items-center space-x-1">
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-gray-500">Nearby</Text> . 123 Main street
                                </Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 mt-2 pb-4">
                            YO! Sushi was founded in 1997, by British entrepreneur Simon Woodroffe.The current owner is Mayfair Equity Partners and members of the YO! Sushi Senior Management team.
                        </Text>
                    </View>
                    <View className="border border-gray-400 p-4 flex items-start">
                        <Text className="flex-1 text-md font-bold">Have a food allergy ?</Text>
                    </View>
                </View>
                <View className="pb-36">
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl">
                        Menu
                    </Text>
                    {/* Dish row */}

                    <DishRow />
                    <DishRow />
                    <DishRow />
                    <DishRow />
                    <DishRow />

                </View>
            </ScrollView>
        </>
    )
}