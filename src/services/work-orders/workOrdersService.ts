import { CreateWorkOrderData } from "@/app/work-order/manage-work-order/schema";
import { ManageWorkOrderInput, WorkOrder } from "@/src/domain/dtos/work-order";

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
  data: ManageWorkOrderInput,
): Promise<WorkOrder> {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/work-orders/${data.id}`;

  delete data.id;

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
