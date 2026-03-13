import { UpdateWorkOrderInput, WorkOrder } from "@/src/domain/dtos/work-order";
import { CreateWorkOrderData } from "@/src/domain/manage-work-order/schema";

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
  data: CreateWorkOrderData,
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

export async function updateWorkOrder(
  data: UpdateWorkOrderInput,
): Promise<WorkOrder> {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/work-orders/${data.id}`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao atualizar ordem de serviço");
  }

  return response.json();
}

export async function deleteWorkOrder(id: string): Promise<void> {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/work-orders/${id}`;

  const response = await fetch(url, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao deletar ordem de serviço");
  }
}
