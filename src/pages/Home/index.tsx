import {
  Grid,
  Paper,
  Container,
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
  Avatar,
  Button,
  InputAdornment,
} from "@mui/material";
import { CircularProgress } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import Tweet from "../../components/Tweet";
import Sidebar from "../../components/Sidebar";
import theme from "../../theme";
import AddTweetForm from "../../components/AddTweetForm";
import { useHomeStyles } from "./theme";
import { SearchTextField } from "../../components/SearchTextField";
import { useAppDispatch } from "../../store/store";
import { TweetData, fetchTweets } from "../../store/slices/tweets";
import { useSelector } from "react-redux";
import { selectTweets } from "../../store/selectors";

const Home = () => {
  const [value, setValue] = useState<number>(0);
  const dispatch = useAppDispatch();
  const { tweets, isLoading } = useSelector(selectTweets);
  const classes: ReturnType<typeof useHomeStyles> = useHomeStyles();
  useEffect(() => {
    dispatch(fetchTweets());
  }, []);
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
            <Paper
              variant="outlined"
              sx={{
                borderRadius: 0,
                borderLeft: 0,
                borderRight: 0,
                borderTop: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <BottomNavigation
                sx={{
                  flex: "1 ",
                  alignItems: "stretch",
                  justifyContent: "flex-start",
                }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
                <BottomNavigationAction
                  label="For you"
                  sx={{
                    color: "rgb(83, 100, 113)",
                    flex: "1 1 263px",
                    maxWidth: "none",
                  }}
                />
                <BottomNavigationAction
                  label="Following"
                  sx={{
                    color: "rgb(83, 100, 113)",
                    flex: "1 1 278px",
                    maxWidth: "none",
                  }}
                />
              </BottomNavigation>
              <div>
                <IconButton>
                  <SettingsIcon />
                </IconButton>
              </div>
            </Paper>
            <Paper
              variant="outlined"
              sx={{
                borderRadius: 0,
                borderLeft: 0,
                borderRight: 0,
                borderTop: 0,
              }}
            >
              <AddTweetForm classes={classes} />
            </Paper>
            {isLoading === "loading" ? (
              <div className={classes.loadingTweetsProgress}>
                <CircularProgress />
              </div>
            ) : (
              tweets.map((tweet: TweetData) => (
                <Tweet
                  key={tweet._id}
                  classes={classes}
                  text={tweet.text}
                  user={{
                    userName: tweet.user.userName,
                    fullName: tweet.user.fullName,
                    avatarUrl: tweet.user.avatarUrl,
                  }}
                />
              ))
            )}
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
            <Paper className={classes.searchSideBlock}>
              <div className={classes.searchSideBlockList}>
                <div className={classes.searchSideHeader}>Trends for you</div>
                <div className={classes.searchSideItem}>
                  <div className={classes.searchSideItemActions}>
                    <div>Business & finance - Trending</div>
                    <IconButton sx={{ width: "19px", height: "19px" }}>
                      <MoreHorizIcon />
                    </IconButton>
                  </div>
                  <div
                    style={{
                      marginTop: "4px",
                      fontSize: "15px",
                      color: theme.palette.secondary.dark,
                      fontWeight: 700,
                    }}
                  >
                    Telegram
                  </div>
                  <div
                    style={{
                      marginTop: "4px",
                      fontSize: "13px",
                      color: "rgb(83, 100, 113)",
                    }}
                  >
                    613k posts
                  </div>
                </div>
                <div className={classes.searchSideItem}>
                  <div className={classes.searchSideItemActions}>
                    <div>Business & finance - Trending</div>
                    <IconButton sx={{ width: "19px", height: "19px" }}>
                      <MoreHorizIcon />
                    </IconButton>
                  </div>
                  <div>Telegram</div>
                  <div>613k posts</div>
                </div>
                <div className={classes.searchSideItem}>
                  <div className={classes.searchSideItemActions}>
                    <div>Business & finance - Trending</div>
                    <IconButton sx={{ width: "19px", height: "19px" }}>
                      <MoreHorizIcon />
                    </IconButton>
                  </div>
                  <div>Telegram</div>
                  <div>613k posts</div>
                </div>
                <div className={classes.searchSideItem}>
                  <div className={classes.searchSideItemActions}>
                    <div>Business & finance - Trending</div>
                    <IconButton sx={{ width: "19px", height: "19px" }}>
                      <MoreHorizIcon />
                    </IconButton>
                  </div>
                  <div>Telegram</div>
                  <div>613k posts</div>
                </div>
                <div className={classes.searchSideMore}>
                  <a href="#">Show more</a>
                </div>
              </div>
            </Paper>
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

export default Home;
