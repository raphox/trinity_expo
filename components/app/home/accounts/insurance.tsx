import { View } from "react-native";

import { ThemedText } from "@/components/themed-text";

export default function InsuranceScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ThemedText type="title">Insurance</ThemedText>
    </View>
  );
}
