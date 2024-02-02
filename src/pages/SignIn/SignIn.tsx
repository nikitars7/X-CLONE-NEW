import {
  Button,
  Typography,
  FormControl,
  FormGroup,
  TextField,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppleIcon from "@mui/icons-material/Apple";
import { Root, classes } from "./styles";
import { navList } from "./list";
import { ModalWindow } from "../../UI/Modal/ModalWindow";
import { useState } from "react";
const appleAuthBtn = {
  color: "black",
  "&:hover": {
    backgroundColor: "rgb(207, 217, 222)",
    borderColor: "rgb(207, 217, 222)",
  },
};

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
                <ModalWindow
                  title="Step 1 of 5"
                  visible={visible === "signUp"}
                  onClose={handleClose}
                >
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
                        This will not be shown publicly. Confirm your own age,
                        even if this account is for a business, a pet, or
                        something else.
                      </Typography>
                    </FormGroup>
                  </FormControl>
                </ModalWindow>
                <ModalWindow
                  title="Log in"
                  visible={visible === "signIn"}
                  onClose={handleClose}
                >
                  <FormControl
                    sx={{
                      maxWidth: "364px",
                      minWidth: "364px",
                      paddingBottom: "48px",
                    }}
                  >
                    <FormGroup>
                      <div className={classes.googleAuth}>
                        <AccountCircleIcon />
                        <div className={classes.googleCredentials}>
                          <div className={classes.googleUserName}>
                            Sign in as User
                          </div>
                          <div className={classes.googleUserEmail}>
                            user@gmail.com
                          </div>
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
                      />
                      <Button
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
                        Sign in
                      </Button>
                      <Button
                        sx={{ ...appleAuthBtn, margin: "12px 0px" }}
                        variant="outlined"
                      >
                        Forgot your password?
                      </Button>
                      <Typography sx={{ marginTop: "40px" }}>
                        Нет учетной записи?
                        <a href="">Зарегестрируйтесь</a>
                      </Typography>
                    </FormGroup>
                  </FormControl>
                </ModalWindow>
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
