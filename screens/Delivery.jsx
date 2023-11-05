import { View, Text, TouchableOpacity, Image, restaurant } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";
import * as Loc from "expo-location";
import { useEffect } from "react";
import { Entypo } from "@expo/vector-icons";

export default function Delivery() {
  const navigation = useNavigation();

  const [mapRegion, setMapRegion] = useState({
    latitude: 26.853066817006457,
    longitude: 75.80469954747353,
    latitudeDelta: 0.005,
    longitudeDelta: 0.0005,
  });
  const [mapRegionNow, setMapRegionNow] = useState({
    latitude: 26.8499595,
    longitude: 75.8157419,
    latitudeDelta: 0.005,
    longitudeDelta: 0.0005,
  });
  const userLocation = async () => {
    let { status } = await Loc.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }
    let location = await Loc.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setMapRegionNow({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.0005,
    });
    console.log(location.coords.latitude, location.coords.longitude);
  };
  useEffect(() => {
    userLocation();
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <MapView region={mapRegion} className="h-[100%] w-[100%]">
        <Marker coordinate={mapRegionNow} title="MarkerNow" />
        <Marker coordinate={mapRegion} title="Marker" />
        {/* <MapViewDirections
    origin={mapRegion}
    destination={mapRegionNow}
    apikey={GOOGLE_MAPS_APIKEY}
  /> */}
      </MapView>

      <View className="absolute top-0 w-full bg-red-400">
        <View className="flex-row justify-between mt-10 mx-2 h-40">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text>
              <Entypo name="cross" size={24} color="black" />
            </Text>
          </TouchableOpacity>
          <Text className="text-lg font-light">Order Help</Text>
        </View>

        <View className="bg-white rounded-lg p-4 w-full m-auto absolute -bottom-16">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-2xl font-bold">30-35 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="w-20 h-20"
            />
          </View>
          <Progress.Bar size={30} color="green" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order is being prepared{" "}
          </Text>
        </View>
      </View>

      <View className="absolute bottom-0 flex-row items-center w-full justify-around bg-white border-t-xl p-2">
        <View className="flex-row items-center w-[40%] justify-between">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="bg-gray-300 rounded-full h-10 w-10"
          />

          <View className="">
            <Text className="text-base ">Ajay Singh</Text>
            <Text className="text-gray-400">Your Rider</Text>
          </View>
        </View>

        <Text className="text-[#b40626] text-lg font-bold">Call</Text>
      </View>
    </SafeAreaView>
  );
}
