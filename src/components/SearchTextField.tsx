import { TextField, Theme } from "@mui/material";
import { withStyles } from "@mui/styles";

export const SearchTextField = withStyles((theme: Theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "30px",
      backgroundColor: "rgba(247,249,249,1.00)",
      padding: "0px",
      paddingLeft: "15px",
    },
    "& .Mui-focused": {
      backgroundColor: "#fff",
      "& fieldset": { borderWidth: 1, borderColor: theme.palette.primary.main },
      "& svg path": { fill: theme.palette.primary.main },
    },
    "& .MuiOutlinedInput-input": {
      padding: "12px",
    },
  },
}))(TextField);
