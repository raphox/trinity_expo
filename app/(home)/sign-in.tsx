import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import SignInForm, { resolver } from "@/components/app/home/sign-in-form";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ButtonText } from "@/components/ui/button";
import { SubmitButton } from "@/components/ui/form-control-field";
import { HStack } from "@/components/ui/hstack";
import { LinkText } from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { FormProvider } from "@/providers/form";

export default function SigninScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const data = {
    email: "",
    password: "",
  };

  const signInWithEmail = async (data: any) => {
    setLoading(false);
    router.push("/(authenticated)");
  };

  return (
    <ThemedView className="flex-1 items-center justify-center p-5">
      <FormProvider
        resolver={resolver}
        defaultValues={data}
        onSubmit={signInWithEmail}
      >
        <VStack className="flex-1 w-full max-w-xl mx-auto">
          <View className="flex-1 justify-center">
            <ThemedText type="title" className="mb-12">Welcome Back</ThemedText>
            <SignInForm onSubmit={signInWithEmail} />
          </View>
          <View className="h-32 flex-none">
            <SubmitButton
              className="mt-4 disabled:opacity-50"
              disabled={loading}
              onSubmit={signInWithEmail}
            >
              <ButtonText>{loading ? "Logging In..." : "Log In"}</ButtonText>
            </SubmitButton>

            <HStack className="justify-center">
              <Text className="mt-4">Don&apos;t have an account? </Text>
              <Link className="mt-4" dismissTo href="/sign-up">
                <LinkText>Sign Up</LinkText>
              </Link>
            </HStack>
          </View>
        </VStack>
      </FormProvider>
    </ThemedView>
  );
}