import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mb-2 mx-2 border">
        <Image source={{
            uri: imgUrl
        }}
        className='object-contain w-24 h-24 rounded-lg'
        />
      <Text className="text-center">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard