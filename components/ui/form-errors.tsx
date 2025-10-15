import { Alert, AlertIcon, AlertText } from "@/components/ui/alert";
import { AlertCircleIcon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import * as React from "react";
import { FieldErrors } from "react-hook-form";

interface FormErrorsProps {
  errors: FieldErrors;
}

export const FormErrors: React.FC<
  FormErrorsProps & { attributes?: string[]; className?: string }
> = ({ errors, attributes = [], className }) => {
  if (!errors || Object.keys(errors).length === 0) return null;

  const messages: string[] = Object.entries(errors)
    .map(([attribute, error]) => {
      if (!attributes.includes(attribute) || !error) return null;

      if (typeof error === "object" && "message" in error) {
        return error.message;
      }

      return typeof error === "string" ? error : "Invalid value";
    })
    .filter((msg): msg is string => Boolean(msg));

  if (messages.length === 0) return null;

  return (
    <Alert action="error" variant="solid" className={className}>
      <AlertIcon as={AlertCircleIcon} />
      <VStack className="flex-1">
        <Text className="font-semibold text-typography-900">
          There are errors in the form:
        </Text>
        <AlertText className="text-typography-900" size="sm">
          {messages.map((msg, idx) => (
            <li key={idx}>{msg || "Invalid value"}</li>
          ))}
        </AlertText>
      </VStack>
    </Alert>
  );
};
