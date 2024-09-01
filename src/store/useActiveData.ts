import { create } from "zustand";
import { ProblemDataType } from "../types/apiTypes";

type ActiveDataType = null | ProblemDataType;

export interface ActiveIdProps {
  activeData: ActiveDataType;
  setActiveData: (newData: ActiveDataType) => void;
}

export const useActiveData = create<ActiveIdProps>((set) => ({
  activeData: null,
  setActiveData: (newData: ActiveDataType) =>
    set({
      activeData: newData,
    }),
}));
