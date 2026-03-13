import { useRouter } from "expo-router";
import { View, Image, Text, Pressable } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">

      <Image
        className="rounded-full"
        source={require("../assets/images/image.png")} 
        style={{ width: 150, height: 150 }} 
      />
      
      <Text className="font-bold text-3xl text-center mt-6">
        Mark John Milano
      </Text>
      
      <Text className="text-gray-400 text-lg text-center mt-1">
        Frontend Developer
      </Text>

      <View className="flex-row justify-center items-center mt-10 gap-4">

        <Pressable
          className="bg-black rounded-full px-6 py-3 shadow-lg"
          onPress={() => router.push("/projects")}
        >
          <Text className="text-white text-sm font-bold">
            View My Projects
          </Text>
        </Pressable>

        <Pressable
          className="bg-white rounded-full px-6 py-3 shadow-lg"
          onPress={() => router.push("/skill")}
        >
          <Text className="text-black text-sm font-bold">
            My Skill
          </Text>
        </Pressable>

      </View>
    </View>
  );
}