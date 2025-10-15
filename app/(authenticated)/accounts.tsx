import { BellIcon, SparklesIcon, UserIcon, ZapIcon } from "lucide-react-native";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SceneMap } from "react-native-tab-view";

import {
  All,
  Credit,
  Insurance,
  Invest,
  Loans,
  Money,
  Mortgages,
} from "@/components/app/home/accounts";
import { Badge, BadgeIcon, BadgeText } from "@/components/ui/badge";
import { HStack } from "@/components/ui/hstack";
import { TabView } from "@/components/ui/tab-view";

const renderScene = SceneMap({
  first: All,
  second: Credit,
  third: Money,
  fourth: Mortgages,
  fifth: Invest,
  sixth: Loans,
  seventh: Insurance,
});

const routes = [
  { key: "first", title: "All" },
  { key: "second", title: "Credit" },
  { key: "third", title: "Money" },
  { key: "fourth", title: "Mortgages" },
  { key: "fifth", title: "Invest" },
  { key: "sixth", title: "Loans" },
  { key: "seventh", title: "Insurance" },
];

export default function AccountsScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-4">
        <HStack space="md" className="mb-2">
          <Badge size="xl" className="rounded-full px-4">
            <BadgeIcon as={SparklesIcon} className="mr-2" />
            <BadgeText>$0.79</BadgeText>
          </Badge>
          <Badge size="xl" action="info" className="rounded-lg">
            <BadgeIcon as={ZapIcon} />
          </Badge>
          <View className="flex-1" />
          <Badge size="xl" className="rounded-lg">
            <BadgeIcon as={BellIcon} />
          </Badge>
          <Badge size="xl" className="rounded-lg">
            <BadgeIcon as={UserIcon} />
          </Badge>
        </HStack>
        <TabView routes={routes} renderScene={renderScene} />
      </View>
    </SafeAreaView>
  );
}
