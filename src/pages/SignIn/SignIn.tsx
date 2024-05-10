import { Button, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AppleIcon from "@mui/icons-material/Apple";
import { Root, appleAuthBtn, classes } from "./styles";
import { navList } from "./list";
import { useEffect, useState } from "react";
import SignInModal from "./components/SignInModal";
import SignUpModal from "./components/SignUpModal";
import { AlertProvider } from "../../context/AlertProvider";
enum SignPopUp {
  SIGN_IN = "signIn",
  SIGN_UP = "signUp",
}
const SignIn: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [visible, setIsVisible] = useState<SignPopUp>();
  const handleClickSignIn = (): void => {
    setIsVisible(SignPopUp.SIGN_IN);
  };
  const handleClickSignUp = (): void => {
    setIsVisible(SignPopUp.SIGN_UP);
  };
  const handleClose = () => {
    setIsVisible(undefined);
  };
  return (
    <Root className={classes.wrapper}>
      <div className={classes.content}>
        <section className={classes.authSide}>
          <div className={classes.authBlock}>
            {isMobile <= 600 ? (
              <svg
                className={classes.icon}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </g>
              </svg>
            ) : (
              ""
            )}
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
              <Button className={classes.googleAuth}>
                <AccountCircleIcon />
                <div className={classes.googleCredentials}>
                  <div className={classes.googleUserName}>Sign in as User</div>
                  <div className={classes.googleUserEmail}>user@gmail.com</div>
                </div>
                <GoogleIcon />
              </Button>
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
                  <>
                    <SignInModal
                      signUp={handleClickSignUp}
                      visible={visible === SignPopUp.SIGN_IN}
                      handleClose={handleClose}
                    />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <SignUpModal
                        visible={visible === SignPopUp.SIGN_UP}
                        handleClose={handleClose}
                      />
                    </LocalizationProvider>
                  </>
                </AlertProvider>
              </div>
            </div>
          </div>
        </section>
        {isMobile >= 600 ? (
          <section className={classes.logoBlock}>
            <svg
              className={classes.icon}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
          </section>
        ) : (
          ""
        )}
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
