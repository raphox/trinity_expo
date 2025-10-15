import { View } from "react-native";

import { ThemedText } from "@/components/themed-text";

export default function Spending() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ThemedText type="title">Spending</ThemedText>
    </View>
  );
}
