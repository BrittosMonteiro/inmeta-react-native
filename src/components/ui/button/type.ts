import { Href } from "expo-router";
import * as Icons from "phosphor-react-native";

type ButtonVariants = "neutral" | "primary" | "danger" | "success";

type ButtonProps =
  | {
      title: string;
      iconName?: keyof typeof Icons;
      path: Href;
      action?: never;
      disable?: boolean;
      variant?: ButtonVariants;
    }
  | {
      title: string;
      iconName?: keyof typeof Icons;
      action: () => void;
      path?: never;
      disable?: boolean;
      variant?: ButtonVariants;
    };

export type { ButtonProps, ButtonVariants };
