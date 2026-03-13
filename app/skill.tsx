import { View, Text, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Skill = () => {
  const router = useRouter();

  return (

    <View className="flex-1 bg-white items-center justify-center px-6">
      
      <Text className="text-3xl font-bold mb-10">My Skills</Text>

      <View className="flex-row flex-wrap justify-center gap-4 w-full">

        <View className="border-2 border-black rounded-2xl px-6 py-4 bg-gray-50">
          <Text className="font-bold text-lg">Cooking</Text>
        </View>

        <View className="border-2 border-black rounded-2xl px-6 py-4 bg-gray-50">
          <Text className="font-bold text-lg">Hard Working</Text>
        </View>

        <View className="border-2 border-black rounded-2xl px-6 py-4 bg-gray-50">
          <Text className="font-bold text-lg">Business Minded</Text>
        </View>

        <View className="border-2 border-black rounded-2xl px-6 py-4 bg-gray-50">
          <Text className="font-bold text-lg">Competitive</Text>
        </View>

      </View>

      <View className="mt-16">
        <Pressable
          className="bg-black px-5 py-2 rounded-full shadow-lg"
          onPress={() => router.dismissTo("/")}
        >
          <Text className="color-white text-lg font-bold">Go back</Text>
        </Pressable>
      </View>

    </View>
  );
};

export default Skill;