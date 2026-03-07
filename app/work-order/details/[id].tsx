import { Card } from "@/src/components/details/Card";
import { Completed } from "@/src/components/details/Completed";
import { IsErrorComponent } from "@/src/components/error";
import { Button } from "@/src/components/ui/button";
import { Header } from "@/src/components/ui/header";
import { Container, Screen } from "@/src/components/ui/screen";
import { useDeleteWorkOrder } from "@/src/hooks/work-orders/useDeleteWorkOrder";
import { useGetWorkOrder } from "@/src/hooks/work-orders/useGetWorkOrder";
import { formatDate } from "@/src/utils/date-utils";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function WorkOrderDetails() {
  const { id } = useLocalSearchParams();

  const { data, error, isLoading, refetch } = useGetWorkOrder(id as string);
  const { onDelete, isError, isPending } = useDeleteWorkOrder();

  if (error || !data) {
    return <Button title="Tentar novamente" action={refetch} />;
  }

  if (isLoading || isPending) {
    return <ActivityIndicator />;
  }

  return (
    <Screen>
      <Header title="Detalhes da ordem" hasBackButton />

      <Container>
        {data.status !== "Completed" ? (
          <Button
            title="Concluir"
            action={() => console.log("Concluir")}
            iconName="CheckCircleIcon"
            variant="success"
          />
        ) : (
          <Completed />
        )}
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
            variant="primary"
          />

          {isError ? (
            <IsErrorComponent
              title={"Houve um erro ao tentar apagar"}
              subtitle="Tente novamente em instantes"
              action={() => onDelete(data.id)}
            />
          ) : (
            <Button
              title="Apagar"
              iconName="TrashIcon"
              action={() => onDelete(data.id)}
              variant="danger"
            />
          )}
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
