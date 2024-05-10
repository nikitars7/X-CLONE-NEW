import { AlertColor } from "@mui/material";
import { createContext, useContext } from "react";
interface IAlert {
  (newMessage: string, newSeverity: AlertColor | undefined): void;
}
export const AlertContext = createContext<IAlert | null>(null);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};
