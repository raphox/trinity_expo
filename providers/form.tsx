"use client";

import { ReactNode } from "react";
import {
  DefaultValues,
  FieldValues,
  Form,
  FormProvider as FormProviderBase,
  Resolver,
  useForm
} from "react-hook-form";

import { Platform } from "react-native";

interface FormProviderProps<T extends FieldValues> {
  children: ReactNode;
  values?: T;
  defaultValues?: DefaultValues<T>;
  resolver: Resolver<T>;
  onSubmit: (fields: FieldValues) => Promise<void>;
}

export function FormProvider<T extends FieldValues>({
  children,
  values,
  defaultValues,
  resolver,
  onSubmit,
}: FormProviderProps<T>) {
  const { setError, ...formProps } = useForm<T>({
    values,
    defaultValues,
    resolver,
  });

  const handleSubmit = async (fields: FieldValues) => {
    try {
      await onSubmit(fields.data);
    } catch (error) {
      let errorMessage: string | undefined = undefined;
      const errorObject = error as { code: string; message?: string; details?: string };

      console.warn("FormProvider error:", errorObject);

      errorMessage =
        errorObject.message ||
        errorObject.details ||
        "An unexpected error occurred.";

      setError("root", {
        ...errorObject,
        type: "manual",
        message: errorMessage,
      });
    }
  };

  if (Object.keys(formProps.formState.errors).length > 0) {
    console.warn("Form errors:", formProps.formState.errors);
  }

  return (
    <FormProviderBase setError={setError} {...formProps}>
      {Platform.OS === "web" ? (
        <Form onSubmit={handleSubmit} className="flex h-full w-full">{children}</Form>
      ) : (
        children
      )}
    </FormProviderBase>
  );
}