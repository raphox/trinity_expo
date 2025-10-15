import { View } from "react-native";

import { ThemedText } from "@/components/themed-text";

export default function InvestScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ThemedText type="title">Invest</ThemedText>
    </View>
  );
}
