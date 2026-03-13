import {
  getLocalWorkOrders,
  saveWorkOrders,
} from "@/src/database/repositories/workOrdersRepository";
import { WorkOrder } from "@/src/domain/dtos/work-order";
import { getWorkOrders } from "@/src/services/work-orders/workOrdersService";
import { create } from "zustand";
import { isOnline } from "../utils/network/isOnline";

type WorkOrdersState = {
  workOrders: WorkOrder[];
  loadWorkOrders: () => Promise<void>;
};

export const useWorkOrdersStore = create<WorkOrdersState>((set) => ({
  workOrders: [],

  loadWorkOrders: async () => {
    try {
      const localData = await getLocalWorkOrders();

      if (localData.length > 0) {
        set({ workOrders: localData });
      }

      const online = await isOnline();

      if (!online) {
        return;
      }

      const remoteData = await getWorkOrders();

      await saveWorkOrders(remoteData);

      set({ workOrders: remoteData });
    } catch (error) {
      console.log("Erro ao carregar ordens:", error);
    }
  },
}));
