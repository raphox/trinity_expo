import { tva } from "@gluestack-ui/utils/nativewind-utils";
import { Text, type TextProps } from "react-native";

import { useColorScheme } from "@/hooks/use-color-scheme";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

const ThemedTextStyle = tva({
  variants: {
    type: {
      default: "text-base leading-6",
      defaultSemiBold: "text-base leading-6 font-semibold",
      title: "text-3xl font-bold leading-8 mb-4",
      subtitle: "text-xl font-bold opacity-80",
      link: "text-base leading-[30px] text-[#0a7ea4]",
    },
    theme: {
      light: "text-gray-900",
      dark: "text-gray-100",
    },
  },
  defaultVariants: {
    type: "default",
  },
});

export function ThemedText({
  lightColor,
  darkColor,
  className,
  type,
  ...rest
}: ThemedTextProps) {
  const theme = useColorScheme() ?? "light";

  return (
    <Text className={ThemedTextStyle({ type, className, theme })} {...rest} />
  );
}
