import { Card } from "@/src/components/details/Card";
import { Button } from "@/src/components/ui/button";
import { Header } from "@/src/components/ui/header";
import { Container, Screen } from "@/src/components/ui/screen";
import { useGetWorkOrder } from "@/src/hooks/work-orders/useGetWorkOrder";
import { formatDate } from "@/src/utils/date-utils";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function WorkOrderDetails() {
  const { id } = useLocalSearchParams();

  const { data, error, isLoading, refetch } = useGetWorkOrder(id as string);

  if (error || !data) {
    return <Button title="Tentar novamente" action={refetch} />;
  }

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <Screen>
      <Header title="Detalhes da ordem" hasBackButton />

      <Container>
        <Card label="Título" text={data.title} />
        <Card label="Descrição" text={data.description} />
        <Card label="Responsável" text={data.assignedTo} />
        <Card label="Status" text={data.status} />
        <Card label="Criado em" text={formatDate(data.createdAt)} />
        <Card label="Última atualização" text={formatDate(data.updatedAt)} />

        <View style={styles.buttonsSection}>
          <Button
            title="Editar"
            iconName="PencilSimpleIcon"
            path={`/work-order/manage-work-order?id=${id}`}
          />

          <Button
            title="Apagar"
            iconName="TrashIcon"
            action={() => console.log("apagar")}
          />
        </View>
      </Container>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonsSection: { display: "flex", flexDirection: "column", gap: 16 },
  row: { marginBottom: 12 },
  label: { fontSize: 14, color: "#666" },
  value: { fontSize: 16, color: "#111" },
});
