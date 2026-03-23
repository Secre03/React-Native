import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";

//defne the waht data this component needs
interface InfoCapsuleProps{
  img: ImageSourcePropType; //use this import if the img is local
  name: string;
  info: string;
  age: string;
  address: string;
}

const InfoCapsule = ({img, name, info, age, address}: InfoCapsuleProps) => { 
  //destructure all the propertry in InfocapsuleProp
   return (
    <View className="flex justify-center items-center p-4 w-full px-12">
      <Image
        className="rounded-full"
        source={img}
        style={{ width: 150, height: 150 }}
      />
      
      <Text className="font-bold text-3xl text-center mt-6 mb-4">
        {name}
      </Text>

      <View className="bg-gray-100 p-6 rounded-2xl w-full">
        
        <View className="flex-row justify-between border-b border-gray-200 py-2">
          <Text className="text-gray-500 font-bold text-sm">Work:</Text>
          <Text className="text-gray-800 text-sm">{info}</Text>
        </View>

        <View className="flex-row justify-between border-b border-gray-200 py-2">
          <Text className="text-gray-500 font-bold text-sm">Age:</Text>
          <Text className="text-gray-800 text-sm">{age}</Text>
        </View>

        <View className="flex-row justify-between py-2">
          <Text className="text-gray-500 font-bold text-sm">Address:</Text>
          <Text className="text-gray-800 text-sm text-right flex-1 ml-4">
            {address}
          </Text>
        </View>

      </View>
    </View>
  );
};

export default InfoCapsule;
