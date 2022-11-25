import { View, Text, TouchableOpacity, Image } from 'react-native'
import Currency from "react-currency-formatter"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItemToBasket } from '../features/basketSlice'

export default function DishRow() {
    const [isPressed, setIsPressed] = useState(false)
    // const dispatch = useDispatch()

    // const addItemToBasket = () => {
    //     dispatch
    // }

    return (
        <>
            <TouchableOpacity
                onPress={() => setIsPressed(!isPressed)}
                className={`bg-white border p-4 border-gray-200 ${isPressed && "border border-b-0"}`}>
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">PERi-Peri Nuts</Text>
                        <Text className="text-gray-400"> Mouth watering spicy nut mix will satiate your hunger pangs &
                            fulfill your daily requirements of nutrition</Text>
                        <Text>
                            <Currency quantity={100} currency="GBP" />
                        </Text>
                    </View>
                    <View>
                        <Image
                            style={{
                                borderWidth: 1,
                                borderColor: "#F3F3F4"
                            }}
                            source={{ uri: "https://links.papareact.com/gn7" }}
                            className="h-20 w-20 bg-gray-300 p-4"
                        />
                    </View>
                </View>
            </TouchableOpacity>

            {
                isPressed && (
                    <View className="bg-white px-4">
                        <View className="flex-row items-center space-x-8 pb-3">
                            <TouchableOpacity>
                                <Text className="text-3xl pl-3">
                                    -
                                </Text>
                            </TouchableOpacity>
                            <Text>0</Text>
                            <TouchableOpacity>
                                <Text className="text-3xl">
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        </>
    )
}