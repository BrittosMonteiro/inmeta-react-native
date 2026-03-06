import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Screen({ children }: { children?: ReactNode }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

function Container({ children }: { children?: ReactNode }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fff", padding: 0 },
  container: { flex: 1, backgroundColor: "#fff", padding: 16, gap: 16 },
});

export { Container, Screen };
