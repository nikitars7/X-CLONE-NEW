import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
} from "@mui/material";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import Tweet from "../../components/Tweet";
import AddTweetForm from "../../components/AddTweetForm";
import { useHomeStyles } from "../theme";
import { useAppDispatch } from "../../store/store";
import { TweetData, fetchTweets } from "../../store/slices/tweets";
import { useSelector } from "react-redux";
import { fetchTags } from "../../store/slices/tags";
import { Link } from "react-router-dom";
import { selectTweets } from "../../store/selectors";

const Home = () => {
  const [value, setValue] = useState<number>(0);
  const dispatch = useAppDispatch();
  const { tweets, isLoadingTweets } = useSelector(selectTweets);
  const classes: ReturnType<typeof useHomeStyles> = useHomeStyles();
  useEffect(() => {
    dispatch(fetchTags());
    dispatch(fetchTweets());
  }, []);
  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          borderRadius: 0,
          borderLeft: 0,
          borderRight: 0,
          borderTop: 0,
          display: "flex",
          alignItems: "center",
          position: "sticky",
          top: "0",
          zIndex: "3",
          opacity: 0.9,
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
      {isLoadingTweets === "loading" ? (
        <div className={classes.loadingTweetsProgress}>
          <CircularProgress />
        </div>
      ) : (
        tweets.map((tweet: TweetData) => (
          <Link to={`/home/tweet/${tweet._id}`} key={tweet._id}>
            <Tweet classes={classes} {...tweet} />
          </Link>
        ))
      )}
    </>
  );
};

export default Home;
