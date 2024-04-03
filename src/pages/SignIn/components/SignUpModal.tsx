import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppleIcon from "@mui/icons-material/Apple";
import {
  Button,
  Typography,
  FormControl,
  FormGroup,
  TextField,
} from "@mui/material";
import { ModalWindow } from "../../../UI/Modal/ModalWindow";
import { AuthProps } from "./SignInModal";

const SignUpModal: React.FC<AuthProps> = ({ visible, handleClose }) => {
  return (
    <ModalWindow title="Step 1 of 5" visible={visible} onClose={handleClose}>
      <FormControl>
        <Typography
          variant="h1"
          sx={{
            margin: "20px 0px",
            fontWeight: "700",
            fontSize: "31px",
            lineHeight: "36px",
          }}
        >
          Create your account
        </Typography>
        <FormGroup>
          <TextField
            sx={{
              width: "438px",
              minHeight: "56px",
              margin: "12px 0px",
            }}
            id="email"
            label="Name"
            autoFocus
            variant="filled"
            type="email"
            fullWidth
          />
          <TextField
            sx={{
              width: "438px",
              minHeight: "56px",
              margin: "12px 0px",
            }}
            id="email"
            label="Email"
            autoFocus
            variant="filled"
            type="email"
            fullWidth
          />
          <Typography
            sx={{
              marginTop: "20px",
              marginBottom: "8px",
              fontWeight: "700",
              fontSize: "15px",
              lineHeight: "20px",
            }}
          >
            Date of birth
          </Typography>
          <Typography
            sx={{
              marginBottom: "4px",
              fontSize: "14px",
              lineHeight: "16px",
              fontWeight: "400",
              color: "rgb(83, 100, 113)",
            }}
          >
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </Typography>
        </FormGroup>
      </FormControl>
    </ModalWindow>
  );
};

export default SignUpModal;
