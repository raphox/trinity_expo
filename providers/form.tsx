"use client";

import { ReactNode } from "react";
import {
  DefaultValues,
  FieldValues,
  Form,
  FormProvider as FormProviderBase,
  Path,
  Resolver,
  useForm,
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
      let errorField: string | undefined = undefined;
      let table: string | undefined = undefined;

      const errorObject = error as { code: string; message?: string; details?: string };

      console.warn("FormProvider error:", errorObject);

      switch (errorObject.code) {
        case "23505": // Unique violation
          errorField = errorObject.message?.match(
            /constraint "unique_(.*?)_per/
          )?.[1];
          errorMessage =
            "This value already exists. Please use a different one.";
          break;
        case "23503": // Foreign key violation
          table = errorObject.message?.match(/table "(.*?)"/)?.[1];
          errorField = errorObject.message?.match(
            new RegExp(`constraint "${table}_(.*?)_fkey"`)
          )?.[1];
          errorMessage = "You are referencing something that does not exist.";
          break;
        case "23502": // Not null violation
          errorField = errorObject.message?.match(/column "(.*?)"/)?.[1];
          errorMessage = "This field is required.";
          break;
        default:
          errorMessage =
            errorObject.message ||
            errorObject.details ||
            "An unexpected error occurred.";
          break;
      }

      setError((errorField as Path<T>) || "root", {
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