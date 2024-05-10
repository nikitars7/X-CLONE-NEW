import React, { useEffect, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppleIcon from "@mui/icons-material/Apple";
import { useAlert } from "../../../hooks/useAlert";
import {
  Button,
  Typography,
  FormControl,
  FormGroup,
  TextField,
} from "@mui/material";
import { ModalWindow } from "../../../UI/Modal/ModalWindow";
import { useForm } from "react-hook-form";
import { appleAuthBtn, divider, stylesPopUp } from "../styles";
import { useAppDispatch } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IData, fetchUserData } from "../../../store/slices/userAuth";
import { signInStyles } from "./styles/stylesSignIn";
import theme from "../../../theme";
export interface AuthProps {
  visible: boolean | undefined;
  signUp?: () => void;
  handleClose: () => void;
}
export type LoginFormInputs = {
  username: string;
  password: string;
};
const SignInModal: React.FC<AuthProps> = ({ visible, handleClose, signUp }) => {
  const showAlert = useAlert();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isNext, setIsNext] = useState<boolean>(false);
  const [inputMode, setInputMode] = useState<"email" | "password">("email");
  let formField;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInputs>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "all",
  });
  const handleNextClick = () => {
    if (!errors?.username) {
      setIsNext(true);
    }
  };
  const onSubmit = async (values: LoginFormInputs) => {
    const data = await dispatch(fetchUserData(values));
    const userData = data.payload as IData;
    if (!data.payload) {
      showAlert("Invalid email , password or username", "error");
    } else if ("token" in userData) {
      window.localStorage.setItem("token", userData.token);
      showAlert("Success", "success");
      reset();
      handleClose();
      navigate("/home");
    }
    reset();
    setInputMode("email");
  };
  useEffect(() => {
    setIsNext(false);
  }, [visible]);
  if (isNext) {
    formField = (
      <TextField
        sx={signInStyles.textField}
        id="password"
        label="Enter your password"
        autoFocus
        variant="filled"
        type="password"
        fullWidth
        {...register("password", {
          required: "Password is required",
          minLength: 6,
        })}
        error={!!errors.password}
        helperText={
          (errors.password?.type === "required" && errors.password.message) ||
          (errors.password?.type === "minLength" &&
            "Password can not be less than 6 characters")
        }
      />
    );
  } else {
    formField = (
      <TextField
        sx={signInStyles.textField}
        id="email"
        label="Email,phone number or user name"
        autoFocus
        variant="filled"
        type="email"
        fullWidth
        {...register("username", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        })}
        error={!!errors.username}
        helperText={errors.username?.message}
      />
    );
  }
  return (
    <ModalWindow title="Log in" visible={visible} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormGroup>
            <Button
              sx={{
                ...stylesPopUp.googleAuth,
                color: "black",
              }}
            >
              <AccountCircleIcon />
              <Typography sx={stylesPopUp.googleCredentials}>
                <div style={stylesPopUp.googleUserName}>Sign in as User</div>
                <div style={stylesPopUp.googleUserEmail}>user@gmail.com</div>
              </Typography>
              <GoogleIcon />
            </Button>
            <Button
              sx={{
                ...appleAuthBtn,
                width: "100%",
                marginBottom: "12px",
              }}
              variant="outlined"
            >
              <AppleIcon />
              Sign Up with Apple
            </Button>
            <div style={divider.dividerStyles}>
              <div style={divider.lineStyleLeft}></div>
              <div style={{ fontWeight: 500 }}>or</div>
              <div style={divider.lineStyleRight}></div>
            </div>
            {formField}
            <Button
              type="submit"
              onClick={handleNextClick}
              sx={signInStyles.nextButton}
              variant="contained"
            >
              {isNext ? "Submit" : " Next"}
            </Button>
            <Button
              sx={{ ...appleAuthBtn, margin: "12px 0px" }}
              variant="outlined"
            >
              Forgot your password?
            </Button>
            <Typography sx={{ marginTop: "40px" }}>
              Don't have an account?
              <Link
                style={{ color: "rgb(29, 155, 240)", marginLeft: "5px" }}
                onClick={signUp}
                to=""
              >
                Sign up
              </Link>
            </Typography>
          </FormGroup>
        </FormControl>
      </form>
    </ModalWindow>
  );
};

export default SignInModal;
