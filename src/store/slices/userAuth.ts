import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import { RootState } from "../store";
import { LoginFormInputs } from "../../pages/SignIn/components/SignInModal";
import { RegisterFormInputs } from "../../pages/SignIn/components/SignUpModal";
export interface IDate {
  day: number;
  month: number;
  year: number;
}
type UserData = {
  _id: string;
  username: string;
  password: string;
  fullname: string;
  birthdate: IDate;
  email: string;
  confirmed: boolean;
  confirm_hash: string;
  location?: string;
  about?: string;
  website?: string;
};
export interface IData {
  user: UserData;
  token: string;
}
interface userResponseInterface {
  status: string;
  data: IData;
}
export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (params: LoginFormInputs) => {
    const { data } = await axios.post<userResponseInterface>(
      "/x-clone/auth/signin",
      params
    );
    return data.data;
  }
);
export const fetchAuthMe = createAsyncThunk("auth/fetchAuthme", async () => {
  const { data } = await axios.get("/x-clone/users/me");
  return data;
});
export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params: RegisterFormInputs) => {
    const { data } = await axios.post("/x-clone/auth/signup", params);
    return data;
  }
);
enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
type UserDataInit = {
  data: null | IData;
  isLoading: Status;
};
const initialState: UserDataInit = {
  data: null,
  isLoading: Status.LOADING,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = Status.LOADING;
        state.data = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoading = Status.SUCCESS;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.data = null;
        state.isLoading = Status.ERROR;
      })
      .addCase(fetchAuthMe.pending, (state) => {
        state.isLoading = Status.LOADING;
        state.data = null;
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.isLoading = Status.SUCCESS;
        state.data = action.payload;
      })
      .addCase(fetchAuthMe.rejected, (state) => {
        state.data = null;
        state.isLoading = Status.ERROR;
      })
      .addCase(fetchRegister.pending, (state) => {
        state.isLoading = Status.LOADING;
        state.data = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.isLoading = Status.SUCCESS;
        // state.data = action.payload;
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.data = null;
        state.isLoading = Status.ERROR;
      });
  },
});
export const selectIsAuth = (state: RootState) =>
  Boolean(state.authReducer.data);
export const selectIsAuthLoading = (state: RootState) =>
  state.authReducer.isLoading;
export default authSlice.reducer;
export const { logout } = authSlice.actions;
