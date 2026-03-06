import { Header } from "@/src/components/ui/header";
import { Screen } from "@/src/components/ui/screen";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function WorkOrderDetails() {
  const { id } = useLocalSearchParams();

  return (
    <Screen>
      <Header title="Detalhes da ordem" hasBackButton />

      <View style={styles.row}>
        <Text style={styles.label}>ID</Text>
        <Text style={styles.value}>{id}</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: { marginBottom: 12 },
  label: { fontSize: 12, color: "#666" },
  value: { fontSize: 16, color: "#111" },
});
