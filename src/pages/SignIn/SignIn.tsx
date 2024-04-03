import { Button, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppleIcon from "@mui/icons-material/Apple";
import { Root, appleAuthBtn, classes } from "./styles";
import { navList } from "./list";
import { useState } from "react";
import SignInModal from "./components/SignInModal";
import SignUpModal from "./components/SignUpModal";
import { AlertProvider } from "../../context/AlertProvider";
const SignIn = () => {
  const [visible, setIsVisible] = useState<"signIn" | "signUp">();
  const handleClickSignIn = (): void => {
    setIsVisible("signIn");
  };
  const handleClickSignUp = (): void => {
    setIsVisible("signUp");
  };
  const handleClose = () => {
    setIsVisible(undefined);
  };
  return (
    <Root className={classes.wrapper}>
      <div className={classes.content}>
        <section className={classes.authSide}>
          <div className={classes.authBlock}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "64px",
                lineHeight: "84px",
                letterSpacing: "-1.2px",
                marginBottom: "48px",
                marginTop: "48px",
                fontWeight: 700,
              }}
            >
              Happening now
            </Typography>
            <Typography
              sx={{
                fontSize: "31px",
                lineHeight: "36px",
                marginBottom: "32px",
                fontWeight: 700,
              }}
            >
              Join today.
            </Typography>
            <div className={classes.authFlex}>
              <div className={classes.googleAuth}>
                <AccountCircleIcon />
                <div className={classes.googleCredentials}>
                  <div className={classes.googleUserName}>Sign in as User</div>
                  <div className={classes.googleUserEmail}>user@gmail.com</div>
                </div>
                <GoogleIcon />
              </div>
              <Button sx={appleAuthBtn} variant="outlined" fullWidth>
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
              <Button
                onClick={handleClickSignUp}
                sx={{ marginBottom: "8px" }}
                variant="contained"
                fullWidth
              >
                Create account
              </Button>
              <div className={classes.policy}>
                By signing up, you agree to the <a href="#">Terms of Service</a>{" "}
                and <a href=""> Privacy Policy</a>,including{" "}
                <a href="#">Cookie Use.</a>
              </div>
              <div className={classes.login}>
                <h3>Already have an account?</h3>
                <Button
                  onClick={handleClickSignIn}
                  variant="outlined"
                  fullWidth
                >
                  Sign in
                </Button>
                <AlertProvider>
                  <SignInModal
                    visible={visible === "signIn"}
                    handleClose={handleClose}
                  />
                </AlertProvider>
                <SignUpModal
                  visible={visible === "signUp"}
                  handleClose={handleClose}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={classes.logoBlock}>
          <svg className={classes.icon} viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </section>
      </div>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          {navList.map((navLink, index) => {
            return (
              <li className={classes.navLinkItem} key={index}>
                <a className={classes.navLink} href="#">
                  {navLink}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </Root>
  );
};

export default SignIn;
