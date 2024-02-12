import { Outlet } from "react-router-dom";
import { useHomeStyles } from "../pages/theme";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { SearchTextField } from "../components/SearchTextField";
import Sidebar from "../components/Sidebar";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Tags from "../components/Tags";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
const MainLayout: React.FC = () => {
  const classes = useHomeStyles();

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item sm={1} md={3}>
          <Sidebar classes={classes} />
        </Grid>
        <Grid item sm={8} md={6}>
          <Paper
            sx={{
              borderRadius: 0,
              minHeight: "100vh",
              borderTop: 0,
              borderBottom: 0,
            }}
            variant="outlined"
          >
            <Outlet />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.searchSide}>
            <SearchTextField
              sx={{ marginBottom: "16px" }}
              variant="outlined"
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Tags classes={classes} />
            <Paper className={classes.searchSideBlock}>
              <div className={classes.searchSideBlockList}>
                <div className={classes.searchSideHeader}>Who to follow</div>
                <div className={classes.followItem}>
                  <Avatar
                    sx={{ marginRight: "12px" }}
                    alt="user avatar"
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
                  />
                  <div className={classes.followItemData}>
                    <div className={classes.followItemCredentials}>
                      <div>Elon Mask</div>
                      <div>@elonmask</div>
                    </div>
                    <Button
                      sx={{ height: "32px", backgroundColor: "black" }}
                      variant="contained"
                      color="secondary"
                    >
                      Follow
                    </Button>
                  </div>
                </div>
                <div className={classes.followItem}>
                  <Avatar
                    sx={{ marginRight: "12px" }}
                    alt="user avatar"
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
                  />
                  <div className={classes.followItemData}>
                    <div className={classes.followItemCredentials}>
                      <div>Elon Mask</div>
                      <div>@elonmask</div>
                    </div>
                    <Button
                      sx={{ height: "32px", backgroundColor: "black" }}
                      variant="contained"
                      color="secondary"
                    >
                      Follow
                    </Button>
                  </div>
                </div>
                <div className={classes.followItem}>
                  <Avatar
                    sx={{ marginRight: "12px" }}
                    alt="user avatar"
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
                  />
                  <div className={classes.followItemData}>
                    <div className={classes.followItemCredentials}>
                      <div>Elon Mask</div>
                      <div>@elonmask</div>
                    </div>
                    <Button
                      sx={{ height: "32px", backgroundColor: "black" }}
                      variant="contained"
                      color="secondary"
                    >
                      Follow
                    </Button>
                  </div>
                </div>
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainLayout;
