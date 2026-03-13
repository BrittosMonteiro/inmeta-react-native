import * as Icons from "phosphor-react-native";
import { IconProps } from "phosphor-react-native";
import type { ComponentType } from "react";

type Props = {
  name: keyof typeof Icons;
  size?: number;
  color?: string;
} & IconProps;
export function Icon({ name, size = 24, color = "#000", ...props }: Props) {
  const PhosphorIcon = (
    Icons as unknown as Record<string, ComponentType<IconProps>>
  )[name];

  return <PhosphorIcon size={size} color={color} {...props} />;
}
