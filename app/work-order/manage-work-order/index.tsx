import { IsErrorComponent } from "@/src/components/error";
import { FormCard } from "@/src/components/manage-work-order/FormCard";
import { Button } from "@/src/components/ui/button";
import { Header } from "@/src/components/ui/header";
import { Container, Screen } from "@/src/components/ui/screen";
import { useCreateWorkOrder } from "@/src/hooks/work-orders/useCreateWorkOrder";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocalSearchParams } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, TextInput } from "react-native";
import { CreateWorkOrderInput, CreateWorkOrderSchema } from "./schema";

export default function ManageWorkOrder() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { onSubmit, isError } = useCreateWorkOrder();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateWorkOrderInput>({
    resolver: zodResolver(CreateWorkOrderSchema),
  });

  return (
    <Screen>
      <Header
        title={`${id ? "Editar" : "Criar"} orderm de serviço`}
        hasBackButton
      />
      <Container>
        <FormCard label="Título" error={errors?.title?.message}>
          <Controller
            control={control}
            name="title"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Título"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                editable
              />
            )}
          />
        </FormCard>

        <FormCard label="Descrição" error={errors?.description?.message}>
          <Controller
            control={control}
            name="description"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Descrição"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                editable
              />
            )}
          />
        </FormCard>

        <FormCard label="Responsável" error={errors?.assignedTo?.message}>
          <Controller
            control={control}
            name="assignedTo"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Responsável"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                editable
              />
            )}
          />
        </FormCard>

        {isError ? (
          <IsErrorComponent
            title="Houve um erro ao criar"
            subtitle="Tente novamente em instantes"
            action={handleSubmit(onSubmit)}
          />
        ) : (
          <Button
            title={
              isError ? "Tentar criar novamente" : "Criar ordem de serviço"
            }
            iconName="PlusCircleIcon"
            action={handleSubmit(onSubmit)}
          />
        )}
      </Container>
    </Screen>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderStyle: "solid",
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
  },
});
