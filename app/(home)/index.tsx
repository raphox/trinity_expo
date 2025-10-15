import { View } from "react-native";

import LogoComponent from "@/components/logo";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Link } from "expo-router";

export default function HomeScreen() {
  const logoColor = useThemeColor({}, "text");

  return (
    <ThemedView className="flex-1 items-center justify-center py-10 px-2">
      <View className="flex-1 w-full  max-w-xl mx-auto">
        <View className="flex-1 justify-center items-center px-4 py-8">
          <Image
            source={require("@/assets/images/welcome.jpg")}
            alt="Welcome"
            size="full"
            className={`rounded-md`}
          />
        </View>
        <View className="h-12 flex-none justify-center items-center">
          <LogoComponent height={42} fill={logoColor} />
        </View>
        <View className="h-64 flex-none justify-center items-center">
          <VStack space="md" reversed={false} className="w-full px-4">
            <Box>
              <ThemedText type="defaultSemiBold">You&apos;ve already made the choice. Now you have to understand it.</ThemedText>
            </Box>
            <Link href="/sign-in" asChild>
              <Button variant="solid" action="primary" size="xl">
                <ButtonText>
                  Log in
                </ButtonText>
              </Button>
            </Link>
            <Link href="/sign-up" asChild>
              <Button variant="solid" action="secondary" size="xl">
                <ButtonText>
                  Sign up
                </ButtonText>
              </Button>
            </Link>
          </VStack>
        </View>
      </View>
    </ThemedView>
  );
}
