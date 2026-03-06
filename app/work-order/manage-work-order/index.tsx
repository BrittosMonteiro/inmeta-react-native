import { Header } from "@/src/components/ui/header";
import { Screen } from "@/src/components/ui/screen";
import { zodResolver } from "@hookform/resolvers/zod";
import { router, useLocalSearchParams } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { CreateWorkOrderInput, CreateWorkOrderSchema } from "./schema";

export default function ManageWorkOrder() {
  const { id } = useLocalSearchParams<{ id?: string }>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateWorkOrderInput>({
    resolver: zodResolver(CreateWorkOrderSchema),
  });

  function onSubmit(data: CreateWorkOrderInput) {
    router.push("../details/1");
  }

  return (
    <Screen>
      <Header
        title={`${id ? "Editar" : "Criar"} orderm de serviço`}
        hasBackButton
      />
      <View style={styles.form}>
        <View>
          <Text>Título</Text>
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
        </View>

        <View>
          <Text>Descrição</Text>
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
              />
            )}
          />
        </View>

        <View>
          <Text>Responsável</Text>
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
              />
            )}
          />
        </View>
        <Button title="Criar" onPress={handleSubmit(onSubmit)} />
        {errors.title && <Text>{errors.title.message}</Text>}
        {errors.description && <Text>{errors.description.message}</Text>}
        {errors.assignedTo && <Text>{errors.assignedTo.message}</Text>}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  form: { flex: 1, padding: 16, gap: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderStyle: "solid",
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
  },
});
