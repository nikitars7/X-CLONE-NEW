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
import { useForm, Controller } from "react-hook-form";
import { appleAuthBtn, classes, stylesPopUp } from "../styles";
import { useAppDispatch } from "../../../store/store";
import { Link } from "react-router-dom";
import { fetchUserData } from "../../../store/slices/userAuth";
export interface AuthProps {
  visible: boolean | undefined;
  handleClose: () => void;
}
export type LoginFormInputs = {
  username: string;
  password: string;
};
const SignInModal: React.FC<AuthProps> = ({ visible, handleClose }) => {
  const showAlert = useAlert();
  const dispatch = useAppDispatch();
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
    console.log(data);
    if (!data.payload) {
      showAlert("Invalid email , password or username", "error");
    } else if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
      reset();
      handleClose();
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
        sx={{
          minHeight: "56px",
          margin: "12px 0px",
        }}
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
        // className={errors?.email ? "input__error" : "form__input"}
      />
    );
  } else {
    formField = (
      <TextField
        sx={{
          minHeight: "56px",
          margin: "12px 0px",
        }}
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
        // className={errors?.email ? "input__error" : "form__input"}
      />
    );
  }
  return (
    <ModalWindow title="Log in" visible={visible} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          sx={{
            maxWidth: "364px",
            minWidth: "364px",
          }}
        >
          <FormGroup>
            <div style={stylesPopUp.googleAuth}>
              <AccountCircleIcon />
              <div style={stylesPopUp.googleCredentials}>
                <div style={stylesPopUp.googleUserName}>Sign in as User</div>
                <div style={stylesPopUp.googleUserEmail}>user@gmail.com</div>
              </div>
              <GoogleIcon />
            </div>
            <Button
              sx={{
                ...appleAuthBtn,
                maxWidth: "300px",
                minWidth: "300px",
                alignSelf: "center",
              }}
              variant="outlined"
            >
              <AppleIcon />
              Sign Up with Apple
            </Button>
            <div className={classes.dividerStyles}>
              <div>
                <div></div>
              </div>
              <div>or</div>
              <div>
                <div></div>
              </div>
            </div>
            {formField}
            <Button
              type="submit"
              onClick={handleNextClick}
              sx={{
                backgroundColor: "black",
                transition: "all 0.3s",
                margin: "12px 0px",
                "&:hover": {
                  backgroundColor: "black",
                  opacity: "0.8",
                },
              }}
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
