import { View } from "react-native";

import { ThemedText } from "@/components/themed-text";

export default function CashFlow() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ThemedText type="title">Cash Flow</ThemedText>
    </View>
  );
}
