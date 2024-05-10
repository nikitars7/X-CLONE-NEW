import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Close as CloseIcon } from "@mui/icons-material";
import theme from "../../theme";
interface ModalProps {
  title: string;
  visible?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export const ModalWindow: React.FC<ModalProps> = ({
  title,
  visible = false,
  onClose,
  children,
}) => {
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  if (!visible) {
    return null;
  }
  return (
    <Dialog
      open={visible}
      onClose={onClose}
      fullScreen={fullScreen}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle
        id="form-dialog-title"
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "8px 16px",
          height: "53px",
          justifyContent: title === "Drafts" ? "space-between" : "flex-start",
        }}
      >
        <IconButton
          onClick={onClose}
          color="inherit"
          aria-label="close"
          sx={{
            padding: "0px",
            marginRight: "30px",
          }}
        >
          <CloseIcon
            style={{
              fontSize: 26,
              color: "black",
              alignSelf: "flex-start",
            }}
            color="secondary"
          />
        </IconButton>
        <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
          {" "}
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ padding: "0px" }}>{children}</DialogContent>
    </Dialog>
  );
};
