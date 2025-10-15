import { Link } from "expo-router";
import { Text, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { ChevronRightIcon } from "lucide-react-native";

export default function AllScreen() {
  return (
    <View className="flex-1 pt-8">
      <ThemedText type="title">Welcome, <Text className="text-green-600">Neo</Text></ThemedText>

      <ThemedText type="subtitle">Credit</ThemedText>

      <Card className="my-4 p-4 bg-secondary-300">
        <HStack space="md" className="justify-between mb-2">
          <ThemedText type="defaultSemiBold">Visa Platinum</ThemedText>
          <HStack className="items-center">
            <ThemedText type="default" className="text-lg mr-2">
              $1,200.00
            </ThemedText>
            <Icon as={ChevronRightIcon} size="xl" />
          </HStack>
        </HStack>
        <ThemedText type="default">*** **** **** 1234</ThemedText>
      </Card>

      <ThemedText type="subtitle">Cash</ThemedText>

      <Card className="my-4 p-4 bg-secondary-300">
        <HStack space="md" className="justify-between mb-2">
          <ThemedText type="defaultSemiBold">Real Life</ThemedText>
          <HStack className="items-center">
            <ThemedText type="default" className="text-lg mr-2">
              $9.18
            </ThemedText>
            <Icon as={ChevronRightIcon} size="xl" />
          </HStack>
        </HStack>
        <ThemedText type="default">Coin Bank</ThemedText>

        <Divider className="my-4" />

        <HStack space="md" className="justify-between mb-2">
          <ThemedText type="defaultSemiBold">Matrix</ThemedText>
          <HStack className="items-center">
            <ThemedText type="default" className="text-lg mr-2">
              $363,000,400.00
            </ThemedText>
            <Icon as={ChevronRightIcon} size="xl" />
          </HStack>
        </HStack>
        <ThemedText type="default">Digital Wallet</ThemedText>
      </Card>

      <Link href="/(home)" asChild>
        <Button className="data-[active=true]:bg-secondary-500">
          <ButtonText className="data-[active=true]:text-typography-900">
            Back to Home
          </ButtonText>
        </Button>
      </Link>
    </View >
  );
}
