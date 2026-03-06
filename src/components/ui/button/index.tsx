import { Href, router } from "expo-router";
import * as Icons from "phosphor-react-native";
import { Pressable, StyleSheet, Text } from "react-native";
import { Icon } from "../icon";

type ButtonProps =
  | {
      title: string;
      iconName?: keyof typeof Icons;
      path: Href;
      action?: never;
    }
  | {
      title: string;
      iconName?: keyof typeof Icons;
      action: () => void;
      path?: never;
    };

function Button({ title, iconName, path, action }: ButtonProps) {
  const handlePress = () => {
    if (path) {
      router.push(path);
    } else {
      action();
    }
  };

  return (
    <Pressable
      accessibilityRole="button"
      onPress={handlePress}
      style={styles.button}
    >
      {iconName && <Icon name={iconName} />}
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    gap: 4,
    borderRadius: 4,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export { Button };
