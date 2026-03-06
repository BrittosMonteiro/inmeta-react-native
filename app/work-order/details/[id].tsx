import { Card } from "@/src/components/details/Card";
import { Button } from "@/src/components/ui/button";
import { Header } from "@/src/components/ui/header";
import { Container, Screen } from "@/src/components/ui/screen";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function WorkOrderDetails() {
  const { id } = useLocalSearchParams();

  return (
    <Screen>
      <Header title="Detalhes da ordem" hasBackButton />

      <Container>
        <Card label="Título" text="Nova ordem de serviço" />
        <Card
          label="Descrição"
          text="Foi solicitada a entrega de materiais no local X, porém até o momento a entrega consta como pendente. Verificar situação o quanto antes."
        />
        <Card label="Responsável" text="Lucas Brittos" />
        <Card label="Status" text="Pendente" />
        <Card label="Criado em" text="Nova ordem de serviço" />
        <Card label="Última atualização" text="Nova ordem de serviço" />

        <View style={styles.buttonsRow}>
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
  buttonsRow: { display: "flex", flexDirection: "row", gap: 16 },
  row: { marginBottom: 12 },
  label: { fontSize: 14, color: "#666" },
  value: { fontSize: 16, color: "#111" },
});
