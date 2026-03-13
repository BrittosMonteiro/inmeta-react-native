import { FormCard } from "@/src/components/manage-work-order/FormCard";
import { IsErrorComponent } from "@/src/components/state-components/error";
import { Button } from "@/src/components/ui/button";
import { Header } from "@/src/components/ui/header";
import { Container, Screen } from "@/src/components/ui/screen";
import { useGetWorkOrder } from "@/src/hooks/work-orders/useGetWorkOrder";
import { useManageWorkOrder } from "@/src/hooks/work-orders/useManageWorkOrder";
import { useLocalSearchParams } from "expo-router";
import { Controller } from "react-hook-form";
import { StyleSheet, TextInput } from "react-native";

export default function ManageWorkOrder() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { data } = useGetWorkOrder(id as string);

  const {
    onSubmit,
    isError,
    form: {
      formState: { errors },
      control,
      handleSubmit,
    },
  } = useManageWorkOrder(data);

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
            title={`Houve um erro ao tentar ${id ? "editar" : "criar"}`}
            subtitle="Tente novamente em instantes"
            action={handleSubmit((data) => onSubmit({ ...data, id }))}
          />
        ) : (
          <Button
            title={`${id ? "Editar" : "Criar"} ordem de serviço`}
            iconName="PlusCircleIcon"
            action={handleSubmit((data) => onSubmit({ ...data, id }))}
            variant="success"
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
