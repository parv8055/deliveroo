import * as Animatable from "react-native-animatable";
import * as Progress from 'react-native-progress';
import { SafeAreaView, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from "@react-navigation/native";

export default function PreparingOrderScreen() {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery");
        }, 4000);

    }, []);

    useEffect
    return (
        <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center">
            <Animatable.Image
                source={require("../assets/gifff.gif")}
                iterationCount={1}
                className="h-96"
            />
            <Animatable.Text
                animation="slideInLeft"
                iterationCount={1}
                className="text-xm my-12 font-bold text-center"
            >Waiting for Restaurant to accept your order!</Animatable.Text>

            <Progress.Bar progress={0.2} color="white" width={300} indeterminate={true} />
        </SafeAreaView >
    )
}