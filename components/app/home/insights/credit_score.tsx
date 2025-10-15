import { View } from "react-native";

import { ThemedText } from "@/components/themed-text";

export default function CreditScore() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ThemedText type="title">Credit Score</ThemedText>
    </View>
  );
}
