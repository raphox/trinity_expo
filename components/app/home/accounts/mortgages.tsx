import { View } from "react-native";

import { ThemedText } from "@/components/themed-text";

export default function MortgagesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ThemedText type="title">Mortgages</ThemedText>
    </View>
  );
}
