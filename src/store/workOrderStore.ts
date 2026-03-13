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
  isLoading: boolean;
};

export const useWorkOrdersStore = create<WorkOrdersState>((set) => ({
  workOrders: [],
  isLoading: false,
  loadWorkOrders: async () => {
    set({ isLoading: true });
    try {
      const localData = await getLocalWorkOrders();

      if (localData.length > 0) {
        set({ workOrders: localData });
      }

      const online = await isOnline();

      if (!online) {
        set({ isLoading: false });
        return;
      }

      const remoteData = await getWorkOrders();

      await saveWorkOrders(remoteData);

      set({ workOrders: remoteData, isLoading: false });
    } catch (error) {
      console.log("Erro ao carregar ordens:", error);
      set({ isLoading: false });
    }
  },
}));
