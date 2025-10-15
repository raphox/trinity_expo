"use client";

import * as React from "react";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import {
  FormControl as FormControlBase,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { AlertCircleIcon } from "@/components/ui/icon";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Button } from "./button";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormControlField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

function FormItem({ children }: React.ComponentProps<typeof FormControlBase>) {
  const { error, formItemId } = useFormField();

  return (
    <FormItemContext.Provider value={{ id: formItemId }}>
      <FormControlBase
        isInvalid={!!error}
        size="md"
        isDisabled={false}
        isReadOnly={false}
        isRequired={false}
        className="mb-1"
      >
        {children}
      </FormControlBase>
    </FormItemContext.Provider>
  );
}

function FormLabel({
  style,
  ref,
  ...props
}: React.ComponentProps<typeof FormControlLabel>) {
  return (
    <FormControlLabel style={style} ref={ref}>
      <FormControlLabelText {...props} />
    </FormControlLabel>
  );
}

function FormDescription(
  props: React.ComponentProps<typeof FormControlHelperText>
) {
  const { formDescriptionId } = useFormField();

  return (
    <FormControlHelper id={formDescriptionId}>
      <FormControlHelperText {...props} />
    </FormControlHelper>
  );
}

function FormMessage({
  children,
  ...props
}: React.ComponentProps<typeof FormControlErrorText>) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : children;
  const backgroundColor = useThemeColor({}, "background");

  if (!body) {
    return null;
  }

  return (
    <FormControlError id={formMessageId}>
      <FormControlErrorIcon fill={backgroundColor} as={AlertCircleIcon} />
      <FormControlErrorText {...props}>{body}</FormControlErrorText>
    </FormControlError>
  );
}

function SubmitButton({
  onSubmit,
  ...props
}: { onSubmit: (data: any) => void } & React.ComponentProps<typeof Button>) {
  const { handleSubmit } = useFormContext();

  return (
    <Button
      variant="solid"
      action="primary"
      onPress={handleSubmit(onSubmit)}
      {...props}
    />
  );
}

export {
  Form,
  FormControlField,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  SubmitButton,
  useFormField
};
