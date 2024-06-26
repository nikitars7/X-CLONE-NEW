import { styled } from "@mui/material/styles";
const PREFIX = "SignIn";
export const appleAuthBtn = {
  color: "black",
  "&:hover": {
    backgroundColor: "rgb(207, 217, 222)",
    borderColor: "rgb(207, 217, 222)",
  },
};
export const stylesPopUp = {
  googleAuth: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    borderRadius: "30px",
    marginBottom: "8px",
    border: "1px solid rgb(207, 217, 222)",
    padding: "0px 12px",
    minHeight: "40px",
    gap: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    ":hover": {
      backgroundColor: "lightblue",
    },
  },
  googleCredentials: {
    fontSize: "11px",
    fontWeight: "400",
    lineHeight: "12px",
    color: "#5f6368",
    flex: "1 1 auto",
    display: "grid",
    justifyContent: "start",
  },
  googleUserName: {
    fontSize: "12px",
    fontWeight: "500",
  },
  googleUserEmail: {
    fontSize: "11px",
    fontWeight: "400",
    color: "#5f6368",
  },
};
export const divider = {
  dividerStyles: {
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
  },
  lineStyleLeft: {
    height: "1px",
    width: "130px",
    backgroundColor: "rgb(239, 243, 244)",
    marginRight: "8px",
  },
  lineStyleRight: {
    height: "1px",
    width: "130px",
    backgroundColor: "rgb(239, 243, 244)",
    marginLeft: "8px",
  },
};
export const classes = {
  wrapper: `${PREFIX}-wrapper`,
  content: `${PREFIX}-content`,
  logoBlock: `${PREFIX}-logoBlock`,
  icon: `${PREFIX}-icon`,
  authSide: `${PREFIX}-authSide`,
  googleAuth: `${PREFIX}-googleAuth`,
  googleCredentials: `${PREFIX}-googleCredentials`,
  googleUserName: `${PREFIX}-googleUserName`,
  googleUserEmail: `${PREFIX}-googleUserEmail`,
  googleAuthImg: `${PREFIX}-googleAuthImg`,
  authBlock: `${PREFIX}-authBlock`,
  authFlex: `${PREFIX}-authFlex`,
  googleAuthSvg: `${PREFIX}-googleAuthSvg`,
  dividerStyles: `${PREFIX}-dividerStyles`,
  policy: `${PREFIX}-policy`,
  login: `${PREFIX}-login`,
  nav: `${PREFIX}-nav`,
  navList: `${PREFIX}-navList`,
  navLinkItem: `${PREFIX}-navLinkItem`,
  navLink: `${PREFIX}-navLink`,
};

export const Root = styled("main")(({ theme }) => ({
  [`&.${classes.wrapper}`]: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    overflow: "hidden",
  },
  [`& .${classes.content}`]: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    flex: "1 1 auto",
  },
  [`& .${classes.logoBlock}`]: {
    flex: "0 1 55%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "32px ",
    [theme.breakpoints.down("sm")]: {
      // visibility: "hidden",
      // opacity: "0",
    },
  },
  [`& .${classes.icon}`]: {
    maxHeight: "380px",
    [theme.breakpoints.down("sm")]: {
      width: "45px",
      height: "57px",
      paddingBottom: "12px",
    },
  },
  [`& .${classes.authSide}`]: {
    flex: "0 1 45%",
    padding: "16px",
  },
  [`& .${classes.authBlock}`]: {
    maxWidth: "760px",
    padding: "20px",
  },
  [`& .${classes.authFlex}`]: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  },
  [`& .${classes.googleAuth}`]: {
    display: "flex",
    alignItems: "center",
    borderRadius: "30px",
    marginBottom: "8px",
    border: "1px solid rgb(207, 217, 222)",
    padding: "0px 12px",
    minHeight: "40px",
    gap: "8px",
    // color: theme.palette.text.primary,
    cursor: "pointer",
    transition: "all 0.3s ease",
    // "&:hover": {
    //   backgroundColor: "lightblue",
    // },
  },
  [`& .${classes.googleCredentials}`]: {
    flex: "1 1 auto",
    display: "grid",
    lineHeight: "12px",
    justifyContent: "start",
  },
  [`& .${classes.googleUserName}`]: {
    fontSize: "12px",
    fontWeight: "500",
  },
  [`& .${classes.googleUserEmail}`]: {
    fontSize: "11px",
    fontWeight: "400",
    // color: theme.palette.text.primary,
  },
  [`& .${classes.googleAuthImg}`]: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
  },
  [`& .${classes.googleAuthSvg}`]: {
    width: "18px",
    height: "18px",
    flex: "0 1 18px",
  },
  [`& .${classes.dividerStyles}`]: {
    marginTop: "8px",
    marginBottom: "8px",
    display: "flex",
    "div:first-of-type , div:last-of-type": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginLeft: "4px",
      marginRight: "4px",
      flex: "1",
      div: {
        height: "1px",
        backgroundColor: "rgb(239, 243, 244)",
      },
    },
  },
  [`& .${classes.policy}`]: {
    fontSize: "11px",
    lineHeight: "12px",
    marginBottom: "20px",
    fontWeight: "400",
    color: theme.palette.text.secondary,
    a: {
      color: theme.palette.info.main,
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  [`& .${classes.login}`]: {
    marginTop: "40px",
    h3: {
      color: "rgb(15, 20, 25)",
      fontWeight: "700",
      lineHeight: "20px",
      fontSize: "17px",
      marginBottom: "20px",
    },
  },
  [`& .${classes.nav}`]: {
    padding: "12px 16px",
  },
  [`& .${classes.navList}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  [`& .${classes.navLinkItem}`]: {
    marginTop: "4px",
    marginBottom: "4px",
    paddingRight: "16px",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: theme.palette.text.secondary,
    },
  },
  [`& .${classes.navLink}`]: {
    color: theme.palette.text.secondary,
    fontSize: "13px",
    lineHeight: "16px",
    fontWeight: "400",
    transition: "all 0.3s ease",
  },
}));
