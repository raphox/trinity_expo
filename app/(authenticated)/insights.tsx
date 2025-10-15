import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function InsightsScreen() {
  return (
    <ThemedView className="flex-1 p-5">
      <SafeAreaView>
        <ScrollView className="w-full" contentContainerStyle={{ justifyContent: 'flex-start', flexGrow: 1 }}>
          <ThemedText type="title">Insights</ThemedText>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}