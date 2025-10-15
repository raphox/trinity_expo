import { ChevronRightIcon } from "lucide-react-native";
import { Dimensions, View } from "react-native";
import {
  LineChart
} from "react-native-chart-kit";

import { ThemedText } from "@/components/themed-text";
import { Card } from "@/components/ui/card";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function SpendingScreen() {
  const theme = useColorScheme() ?? "light";
  let chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    backgroundGradientToOpacity: 0.5,
  };

  if (theme === "light") {
    chartConfig = {
      backgroundGradientFrom: "#ffffff",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#ffffff",
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      backgroundGradientToOpacity: 0.5,
    };
  }

  return (
    <View className="flex-1 pt-8">
      <ThemedText type="subtitle" className="mb-3">October</ThemedText>
      <ThemedText type="title">$363,000,400.00</ThemedText>
      <ThemedText type="subtitle">Total spending</ThemedText>

      <LineChart
        data={{
          labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width - 4}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        chartConfig={chartConfig}
        style={{ marginTop: 16 }}
        bezier
      />

      <Card className="my-8 p-4 bg-secondary-300">
        <HStack space="md" className="justify-between mb-2">
          <View>
            <ThemedText type="defaultSemiBold">Visa Platinum</ThemedText>
            <ThemedText type="default">*** **** **** 1234</ThemedText>
          </View>
          <View>
            <Icon as={ChevronRightIcon} size="xl" />
          </View>
        </HStack>
        <HStack space="md" className="justify-between mb-2">
          <View>
            <ThemedText type="defaultSemiBold" className="text-2xl">$363,000,400.00</ThemedText>
            <ThemedText type="default" className="opacity-70">Current balance</ThemedText>
          </View>
          <View>
            <ThemedText type="defaultSemiBold" className="text-xl">$0.00</ThemedText>
            <ThemedText type="default" className="opacity-70">Available</ThemedText>
          </View>
        </HStack>
      </Card>
    </View>
  );
}
