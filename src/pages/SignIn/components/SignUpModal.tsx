import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Typography,
  FormControl,
  FormGroup,
  TextField,
} from "@mui/material";
import { ModalWindow } from "../../../UI/Modal/ModalWindow";
import { AuthProps } from "./SignInModal";
import dayjs from "dayjs";
import { Dayjs } from "dayjs";
import { useForm } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useAlert } from "../../../hooks/useAlert";
import { useAppDispatch } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import { IData, IDate, fetchRegister } from "../../../store/slices/userAuth";
import theme from "../../../theme";
export type RegisterFormInputs = {
  username: string;
  fullname: string;
  email: string;
  birthdate: IDate;
  password: string;
  password2: string;
};
enum Steps {
  FIRST_STEP = "1st_step",
  SECOND_STEP = "2nd_step",
}
const SignUpModal: React.FC<AuthProps> = ({ visible, handleClose }) => {
  const [value, setValue] = useState<Dayjs | null>(null);
  const [formMode, setFormMode] = useState<Steps>(Steps.FIRST_STEP);
  const [isNext, setIsNext] = useState<boolean>(false);
  const showAlert = useAlert();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleNextClick = () => {
    if (
      !errors?.username &&
      !errors?.fullname &&
      !errors?.email &&
      value !== null
    ) {
      setIsNext(true);
      setFormMode(Steps.SECOND_STEP);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<RegisterFormInputs>({
    defaultValues: {
      username: "",
      fullname: "",
      email: "",
      password: "",
      password2: "",
      birthdate: {
        day: 0,
        month: 0,
        year: 0,
      },
    },
    mode: "all",
  });
  // const password = useRef({});
  // password.current = watch("password", "");
  const onSubmit = async (values: RegisterFormInputs) => {
    const formattedValues = {
      ...values,
      birthdate: {
        day: value!?.date(),
        month: value!?.month() + 1,
        year: value!?.year(),
      },
    };
    const data = await dispatch(fetchRegister(formattedValues));
    const userData = data.payload as IData;
    if (!userData) {
      showAlert("Error occured", "error");
    } // else if ("token" in userData) {
    //   window.localStorage.setItem("token", userData.token);
    //   showAlert("Success", "success");
    //   reset();
    //   handleClose();
    //   navigate("/home");
    // }
    showAlert(
      "You have successfully been registrated , to signin you need to confirm your email",
      "success"
    );
    reset();
    handleClose();
    setFormMode(Steps.FIRST_STEP);
  };
  let formField;
  useEffect(() => {
    setIsNext(false);
    setFormMode(Steps.FIRST_STEP);
    reset();
  }, [visible]);
  if (formMode === Steps.FIRST_STEP) {
    formField = (
      <>
        <TextField
          sx={{
            minHeight: "56px",
            margin: "12px 0px",
          }}
          label="Name"
          autoFocus
          variant="filled"
          type="text"
          fullWidth
          {...register("fullname", {
            required: "Name is required",
            minLength: 2,
          })}
          error={!!errors.fullname}
          helperText={errors.fullname?.message}
        />
        <TextField
          sx={{
            minHeight: "56px",
            margin: "12px 0px",
          }}
          label="Username"
          variant="filled"
          type="text"
          fullWidth
          {...register("username", {
            required: "Name is required",
            minLength: 2,
          })}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          sx={{
            minHeight: "56px",
            margin: "12px 0px",
          }}
          id="email"
          label="Email"
          variant="filled"
          type="email"
          fullWidth
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
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
        <DatePicker
          {...register("birthdate", {
            required: true,
          })}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          defaultValue={dayjs("2022-04-17")}
          sx={{ marginBottom: "20px" }}
        />
        {errors.birthdate && <span>{errors.birthdate.message}</span>}
      </>
    );
  } else {
    formField = (
      <>
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
            validate: (val: string) => {
              if (watch("password2") !== val) {
                return "Your passwords do not match";
              }
            },
          })}
          error={!!errors.password}
          helperText={
            (errors.password?.type === "required" && errors.password.message) ||
            (errors.password?.type === "minLength" &&
              "Password can not be less than 6 characters") ||
            (errors.password?.type === "validate" && "Password is not match")
          }
        />
        <TextField
          sx={{
            minHeight: "56px",
            margin: "12px 0px",
          }}
          id="password2"
          label="Confirm your password"
          variant="filled"
          type="password"
          fullWidth
          {...register("password2", {
            required: "Confirmation is required",
            validate: (val: string) => {
              if (watch("password") !== val) {
                return "Your passwords do not match";
              }
            },
          })}
          error={!!errors.password2}
          helperText={errors.password2?.message}
        />
      </>
    );
  }
  return (
    <ModalWindow
      title={formMode === Steps.FIRST_STEP ? "Step 1 of 2" : "Final step"}
      visible={visible}
      onClose={handleClose}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          sx={{
            [theme.breakpoints.up("sm")]: { minWidth: "364px" },
            [theme.breakpoints.down("sm")]: { width: "100%" },
          }}
        >
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
            {isNext ? "Register" : " Next"}
          </Button>
        </FormControl>
      </form>
    </ModalWindow>
  );
};

export default SignUpModal;
