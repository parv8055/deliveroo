import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="">
      <View className="">
        <CategoryCard
          imgUrl="https://indibites.in/wp-content/uploads/2021/03/paneer-makhni.png"
          title="panner"
        />
        <CategoryCard
          imgUrl="https://links.papareact.com/gn7"
          title="Testing"
        />
      </View>
      <View className="">
        <CategoryCard
          imgUrl="https://indibites.in/wp-content/uploads/2021/03/paneer-makhni.png"
          title="panner"
        />
        <CategoryCard
          imgUrl="https://links.papareact.com/gn7"
          title="Testing"
        />
      </View>
      <View className="">
        <CategoryCard
          imgUrl="https://indibites.in/wp-content/uploads/2021/03/paneer-makhni.png"
          title="panner"
        />
        <CategoryCard
          imgUrl="https://links.papareact.com/gn7"
          title="Testing"
        />
      </View>
      <View className="">
        <CategoryCard
          imgUrl="https://indibites.in/wp-content/uploads/2021/03/paneer-makhni.png"
          title="panner"
        />
        <CategoryCard
          imgUrl="https://links.papareact.com/gn7"
          title="Testing"
        />
      </View>
    </ScrollView>
  );
};

export default Categories;
