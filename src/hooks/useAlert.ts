import { AlertColor } from "@mui/material";
import { createContext, useContext } from "react";
interface IContext {
  (newMessage: string, newSeverity: AlertColor | undefined): void;
}
export const AlertContext = createContext<IContext | null>(null);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};
