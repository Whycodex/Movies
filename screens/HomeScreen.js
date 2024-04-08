import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Platform, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TrendingMovies from "../components/trendingMovies";
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline";
import { styles } from "../theme/theme";

const ios = Platform.OS === 'ios';
 
function HomeScreen() {
  const [trending, setTrending] = useState([1,2,3]);

  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={ios?"-mb-2":"mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="#fff" />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>
            ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="#fff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingBottom: 10}}>
        <TrendingMovies data={trending} />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
