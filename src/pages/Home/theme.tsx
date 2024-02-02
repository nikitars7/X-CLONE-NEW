import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import { Theme } from "@mui/material";
import theme from "../../theme";
export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    minHeight: "100vh",
    position: "relative",
  },
  logo: {
    color: "black",
    marginLeft: "5px",
  },
  navList: {
    position: "sticky",
    top: "0",
    display: "flex",
    flexDirection: "column",
    paddingTop: "5px",
    gap: "10px",
    "@media(max-width:900px)": {
      alignItems: "center",
    },
  },
  navLink: {
    display: "flex",
    "& div": {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "12px",
      borderRadius: 30,
      transition: "all 0.3s ease 0s",
    },
    "&:hover div": {
      backgroundColor: "rgba(15,20,25,0.1)",
    },
  },
  navIcon: {
    color: "black",
  },
  tweetUserName: {
    color: grey[500],
    marginRight: "5px",
  },
  tweetUserData: {
    display: "flex",
    justifyContent: "space-between",
  },
  circularProgress: {
    color: "red",
  },
  addPost: {
    display: "flex",
    padding: "15px 10px",
  },
  addPostAvatar: {
    flexBasis: "40px",
    marginRight: "12px",
  },
  addPostForm: {
    flex: "1",
  },
  addPostFooter: {
    display: "flex",
    flexDirection: "column",
  },
  addPostActions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "8px",
    marginLeft: "-8px",
  },
  addPostTextArea: {
    width: "100%",
    border: 0,
    padding: "12px 0px",
    fontSize: 20,
    outline: "none",
    fontFamily: "inherit",
    resize: "none",
  },
  addPostButton: {
    display: "flex",
    alignItems: "center",
  },
  addFormCircleProgress: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    margin: "0 10px",
    "& .MuiCircularProgress-root": {
      position: "absolute",
    },
  },
  searchSide: {
    position: "sticky",
    top: "0",
  },
  searchSideBlock: { marginBottom: "16px" },
  searchSideBlockList: {
    borderRadius: "16px",
    backgroundColor: "rgba(247,249,249,1.00)",
    border: "1px solid rgb(247, 249, 249)",
  },
  searchSideHeader: {
    color: theme.palette.secondary.dark,
    fontSize: "20px",
    padding: "16px 12px 0px 16px",
    fontWeight: "700",
  },
  searchSideItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "12px 16px",
    transition: "all 0.3s ease 0s",
    "&:hover": {
      backgroundColor: "rgb(236, 242, 247)",
      cursor: "pointer",
    },
  },
  searchSideMore: {
    padding: "12px 16px",
    "& a": {
      color: theme.palette.primary.main,
    },
  },
  searchSideItemActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& div": {
      fontSize: "13px",
      color: "rgb(83, 100, 113)",
    },
  },
  followItem: {
    display: "flex",
    padding: "12px 16px",
    transition: "all 0.3s ease 0s",
    "&:hover": {
      backgroundColor: "rgb(236, 242, 247)",
      cursor: "pointer",
    },
  },
  followItemData: {
    flex: "1",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  followItemCredentials: {},
}));
