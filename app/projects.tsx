import { View, Text, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Projects = () => {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-white px-4">
      
      <Text className="text-3xl font-bold mb-10">My Projects</Text>

      <View className="flex-row flex-wrap justify-center w-full gap-5">

        <View className="items-center">
          <Text className="font-bold mb-2 text-gray-500">Project 1</Text>
          <View className="px-6 py-10 border-2 rounded-2xl border-black items-center justify-center">
            <Text className="font-semibold">E-commerce</Text>
          </View>
        </View>

        <View className="items-center">
          <Text className="font-bold mb-2 text-gray-500">Project 2</Text>
          <View className="px-8 py-10 border-2 rounded-2xl border-black items-center justify-center">
            <Text className="font-semibold">Task Mangement</Text>
          </View>
        </View>

        <View className="items-center">
          <Text className="font-bold mb-2 text-gray-500">Project 3</Text>
          <View className="px-8 py-10 border-2 rounded-2xl border-black items-center justify-center">
            <Text className="font-semibold">AI Chatbot</Text>
          </View>
        </View>

      </View>

      <View className="mt-12">
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

export default Projects;