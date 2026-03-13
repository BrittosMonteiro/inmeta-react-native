import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import { Icon } from "../icon";
import { bgVariantStyles, styles, textVariantStyles } from "./styles";
import { ButtonProps } from "./type";

function Button({
  title,
  iconName,
  path,
  action,
  disable,
  variant = "neutral",
}: ButtonProps) {
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
      style={[
        styles.button,
        bgVariantStyles[variant],
        disable && styles.disabled,
      ]}
      disabled={disable}
    >
      {iconName && (
        <Icon
          name={iconName}
          color={Object.entries(textVariantStyles[variant])[0][1]}
        />
      )}
      <Text style={[styles.buttonText, textVariantStyles[variant]]}>
        {title}
      </Text>
    </Pressable>
  );
}

export { Button };
