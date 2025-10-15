import { Link } from "expo-router";
import React from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { NativeSyntheticEvent, TextInputKeyPressEventData } from "react-native";
import * as z from "zod";

import {
  FormControlField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form-control-field";
import { FormErrors } from "@/components/ui/form-errors";
import { HStack } from "@/components/ui/hstack";
import { Input, InputField } from "@/components/ui/input";
import { LinkText } from "@/components/ui/link";
import { VStack } from "@/components/ui/vstack";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.email(),
  password: z.string().min(6).max(100),
});

type FormData = z.infer<typeof schema>;

export const resolver = zodResolver(schema);

export default function SignInForm({
  onSubmit,
}: {
  onSubmit: (fields: FieldValues) => void;
}) {
  const { control, formState, handleSubmit } = useFormContext<FormData>();

  const handleOnKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ): void => {
    if (event.nativeEvent.key === "Enter") {
      event.stopPropagation();
      event.preventDefault();

      handleSubmit(onSubmit)();
    }
  };

  return (
    <VStack space="lg">
      <FormErrors errors={formState.errors} attributes={["root"]} />

      <FormControlField
        control={control}
        name="email"
        render={({ field: { onChange, ...rest } }) => (
          <FormItem>
            <FormLabel>Email:</FormLabel>
            <Input>
              <InputField
                type="text"
                autoCapitalize="none"
                inputMode="email"
                keyboardType="email-address"
                onChangeText={onChange}
                onKeyPress={handleOnKeyPress}
                {...rest}
              />
            </Input>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormControlField
        control={control}
        name="password"
        render={({ field: { onChange, ...rest } }) => (
          <FormItem>
            <HStack>
              <FormLabel style={{ flex: 1 }}>Password:</FormLabel>
              <Link href="/accounts">
                <LinkText size="sm">Forgot your password?</LinkText>
              </Link>
            </HStack>
            <Input>
              <InputField
                type="password"
                onChangeText={onChange}
                onKeyPress={handleOnKeyPress}
                {...rest}
              />
            </Input>
            <FormMessage />
          </FormItem>
        )}
      />
    </VStack>
  );
}
