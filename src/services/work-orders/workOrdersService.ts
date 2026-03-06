import { CreateWorkOrderInput } from "@/app/work-order/manage-work-order/schema";
import { WorkOrder } from "@/src/domain/dtos/work-order";

export async function getWorkOrders(): Promise<WorkOrder[]> {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/work-orders`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro ao buscar ordens de serviço");
  }

  return response.json();
}

export async function getWorkOrderById(id: string): Promise<WorkOrder> {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/work-orders/${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro ao buscar ordem de serviço");
  }

  return response.json();
}

export async function createWorkOrder(
  data: CreateWorkOrderInput,
): Promise<WorkOrder> {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/work-orders`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar ordem de serviço");
  }

  return response.json();
}
