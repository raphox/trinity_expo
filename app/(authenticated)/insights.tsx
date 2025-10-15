import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SceneMap } from "react-native-tab-view";

import {
  CashFlow,
  CreditScore,
  Spending,
} from "@/components/app/home/insights";
import { ThemedText } from "@/components/themed-text";
import { TabView } from "@/components/ui/tab-view";

const renderScene = SceneMap({
  first: Spending,
  second: CashFlow,
  third: CreditScore,
});

const routes = [
  { key: "first", title: "Spending" },
  { key: "second", title: "Cash Flow" },
  { key: "third", title: "Credit Score" },
];

export default function InsightsScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-4">
        <ThemedText type="title">Insights</ThemedText>
        <TabView routes={routes} renderScene={renderScene} />
      </View>
    </SafeAreaView>
  );
}
