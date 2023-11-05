import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { SafeAreaView, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function PreparingOrder() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
        navigation.navigate("Delivery");
    }, 3000);
  }, []);

  useEffect;
  return (
    <SafeAreaView className="items-center justify-center flex-1 bg-white">
      <Animatable.Image
        source={require("../assets/gifff.gif")}
        iterationCount={1}
        className="w-full h-40"
      />
      <Animatable.Text
        animation="slideInLeft"
        iterationCount={1}
        className="my-10 font-bold text-center text-xm"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Bar
        progress={0.2}
        color="green"
        width={300}
        indeterminate={true}
      />
    </SafeAreaView>
  );
}
