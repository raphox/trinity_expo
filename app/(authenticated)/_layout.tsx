import { Tabs } from "expo-router";
import {
  ArrowUpDownIcon,
  ChartNoAxesCombinedIcon,
  CircleDollarSignIcon,
  SparklesIcon,
} from "lucide-react-native";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/haptic-tab";
import { Icon } from "@/components/ui/icon";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarItemStyle: Platform.select({ native: { paddingVertical: 16 } }),
        tabBarStyle: Platform.select({ native: { height: 110 } }),
      }}
    >
      <Tabs.Screen
        name="accounts"
        options={{
          title: "Accounts",
          tabBarIcon: ({ color }) => (
            <Icon size="xl" as={CircleDollarSignIcon} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          title: "Insights",
          tabBarIcon: ({ color }) => (
            <Icon size="xl" as={ChartNoAxesCombinedIcon} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="rewards"
        options={{
          title: "Rewards",
          tabBarIcon: ({ color }) => (
            <Icon size="xl" as={SparklesIcon} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: "Payments",
          tabBarIcon: ({ color }) => (
            <Icon size="xl" as={ArrowUpDownIcon} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
