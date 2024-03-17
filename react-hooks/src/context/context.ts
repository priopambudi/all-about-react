import { createContext, useContext } from "react";
import { User } from "../components/context/ContextComp";

export const DashboardContext = createContext<User | undefined>(undefined);

export function useUserContext() {
  const user = useContext(DashboardContext);

  if (user === undefined) {
    throw new Error("user context should be inside of DashboardContext");
  }

  return user;
}
