import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";

import { resolver } from "@/components/app/home/sign-in-form";
import SignUpForm from "@/components/app/home/sign-up-form";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ButtonText } from "@/components/ui/button";
import { SubmitButton } from "@/components/ui/form-control-field";
import { HStack } from "@/components/ui/hstack";
import { LinkText } from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { FormProvider } from "@/providers/form";

export default function SignUpScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const data = {
    email: "",
    password: "",
  };

  const signUpWithEmail = async (data: any) => {
    setLoading(false);
    router.push("/accounts");
  };

  return (
    <ThemedView className="flex-1 items-center justify-center p-5">
      <FormProvider
        resolver={resolver}
        defaultValues={data}
        onSubmit={signUpWithEmail}
      >
        <VStack className="flex-1 w-full max-w-xl mx-auto">
          <ScrollView
            className="flex-1 w-full"
            contentContainerStyle={{ justifyContent: "center", flexGrow: 1 }}
          >
            <ThemedText type="title" className="text-center">
              Join over 250.000{"\n"}humans at Zion
            </ThemedText>
            <ThemedText className="text-center my-4">
              Sign up for Trinity — if you believe you can handle the truth.
            </ThemedText>
            <SignUpForm onSubmit={signUpWithEmail} />
            <ThemedText className="mt-4 text-justify">
              By proceeding, you accept the{" "}
              <LinkText>Trinity Platform Terms & Conditions</LinkText>,{" "}
              <LinkText>Rewards Policy</LinkText>, and{" "}
              <LinkText>Privacy Policy</LinkText> — though remember:
              there&apos;s no privacy in the Matrix.
            </ThemedText>
            <ThemedText className="mt-4 text-justify">
              You also consent to receive encrypted transmissions about
              Trinity&apos;s financial reality. Some of them might be from our
              “third-party partners”... or maybe from agents trying to track
              your signal.
            </ThemedText>
            <ThemedText className="mt-4 text-justify">
              Take the red pill to continue.
            </ThemedText>
          </ScrollView>
          <View className="h-32 flex-none">
            <SubmitButton
              className="mt-4 disabled:opacity-50"
              disabled={loading}
              onSubmit={signUpWithEmail}
            >
              <ButtonText>{loading ? "Signing Up..." : "Sign Up"}</ButtonText>
            </SubmitButton>

            <HStack className="justify-center">
              <Text className="mt-4">Already have an account? </Text>
              <Link className="mt-4" dismissTo href="/sign-in">
                <LinkText>Sign In</LinkText>
              </Link>
            </HStack>
          </View>
        </VStack>
      </FormProvider>
    </ThemedView>
  );
}
