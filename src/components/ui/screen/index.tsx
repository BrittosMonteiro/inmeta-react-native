import { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenContainerProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

function Screen({ children, style }: ScreenContainerProps) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

function Container({ children, style }: ScreenContainerProps) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fff", padding: 0 },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    gap: 16,
  },
});

export { Container, Screen };
