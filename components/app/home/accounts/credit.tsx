import { ChevronRightIcon, ClockIcon } from "lucide-react-native";
import { View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";

export default function CreditScreen() {
  return (
    <View className="flex-1 pt-8">
      <ThemedText type="subtitle" className="mb-3">
        You&apos;ve borrowed
      </ThemedText>
      <ThemedText type="title">$363,000,400.00</ThemedText>
      <ThemedText type="subtitle">Available: $100,000.00</ThemedText>

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
            <ThemedText type="defaultSemiBold" className="text-2xl">
              $363,000,400.00
            </ThemedText>
            <ThemedText type="default" className="opacity-70">
              Current balance
            </ThemedText>
          </View>
          <View>
            <ThemedText type="defaultSemiBold" className="text-xl">
              $0.00
            </ThemedText>
            <ThemedText type="default" className="opacity-70">
              Available
            </ThemedText>
          </View>
        </HStack>
        <HStack className="my-4 items-center opacity-70">
          <Icon as={ClockIcon} size="lg" className="mr-2" />
          <ThemedText type="defaultSemiBold">No payment due</ThemedText>
        </HStack>
        <Button>
          <ButtonText>Pay now</ButtonText>
        </Button>
      </Card>
    </View>
  );
}
