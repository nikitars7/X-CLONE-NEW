import React, { useEffect, useState } from "react";
import Tweet from "../../components/Tweet";
import { useParams, useNavigate } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useHomeStyles } from "../theme";
import {
  Avatar,
  CircularProgress,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { grey } from "@mui/material/colors";
import { TweetData, TweetsResponse } from "../../store/slices/tweets";
import { format } from "date-fns";
import axios from "../../axios";
import { enGB } from "date-fns/locale/en-GB";
const FullTweet: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [tweet, setTweet] = useState<TweetData>();
  const { id } = useParams();
  const classes = useHomeStyles();
  const handleClickBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    const fetchTweet = async () => {
      try {
        const { data } = await axios.get<TweetsResponse<TweetData>>(
          `/x-clone/tweets/${id}`
        );
        setTweet(data.data);
      } catch (e: any) {
        console.log(e);
      } finally {
      }
    };
    if (id) {
      fetchTweet();
    }
  }, []);
  if (!tweet) {
    return (
      <div className={classes.loadingTweetsProgress}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", minHeight: "53px" }}>
        <IconButton onClick={handleClickBack}>
          <ArrowBackOutlinedIcon sx={{ color: "black" }} />
        </IconButton>
        <Typography
          variant="h2"
          sx={{
            color: "black",
            fontWeight: "700",
            fontSize: "20px",
            marginLeft: "30px",
          }}
        >
          Post
        </Typography>
      </div>
      <div className={classes.fullTweet}>
        <div className={classes.fullTweetUserData}>
          <a href="#">
            <Avatar
              alt={`Avatar of the ${tweet.user.username}`}
              src={tweet.user.avatarUrl}
              sx={{ marginRight: "12px", flexBasis: "40px" }}
            />
          </a>
          <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
            <a
              href="#"
              style={{
                color: "inherit",
              }}
            >
              <b
                style={{
                  fontSize: "15px",
                  marginRight: "5px",
                  lineHeight: "20px",
                }}
              >
                {tweet.user.fullname}
              </b>
            </a>
            <a href="#">
              <span className={classes.tweetUserName}>
                {" "}
                {tweet?.user.username}
              </span>
            </a>
          </div>
          <IconButton
            sx={{
              width: "35px",
              height: "35px",
              alignSelf: "flex-start",
              marginLeft: "8px",
            }}
          >
            <MoreHorizIcon />
          </IconButton>
        </div>
        <div style={{ flex: "1" }}>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontSize: "17px",
              lineHeight: "24px",
              marginTop: "12px",
              wordBreak: "break-word",
            }}
          >
            {tweet?.text}
          </Typography>
          <div className={classes.fullTweetDate}>
            <div>
              <a href="#" className={classes.fullTweetTime}>
                <time dateTime="2024-02-12T00:08:29.000Z">
                  {format(new Date(tweet.createdAt), "H:mm a · d MMMM yyyy", {
                    locale: enGB,
                  })}
                </time>
              </a>
            </div>
            <div style={{ padding: "0px 4px", color: "rgb(83, 100, 113)" }}>
              .
            </div>
            <div>
              <span
                style={{
                  color: theme.palette.secondary.dark,
                  fontWeight: "500",
                  marginRight: "5px",
                }}
              >
                {" "}
                7.7M
              </span>
              <span style={{ color: "rgb(83, 100, 113)" }}>Views</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              columnGap: "4px",
              height: "48px",
              padding: "0px 4px",
              borderTop: "1px solid rgba(239,243,244,1.00)",
              borderBottom: "1px solid rgba(239,243,244,1.00)",
            }}
          >
            <div>
              <IconButton>
                <ChatIcon />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <SwapCallsIcon />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <BookmarkBorderIcon />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <ShareIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <Tweet
        classes={classes}
        _id="1"
        text="Some comment , nevermind"
        createdAt={new Date().toString()}
        user={{ fullname: "Admin", username: "your_support", avatarUrl: "" }}
      />
      <Tweet
        classes={classes}
        _id="1"
        text="Some comment , nevermind"
        createdAt={new Date().toString()}
        user={{ fullname: "Admin", username: "your_support", avatarUrl: "" }}
      />
      <Tweet
        classes={classes}
        _id="1"
        text="Some comment , nevermind"
        createdAt={new Date().toString()}
        user={{ fullname: "Admin", username: "your_support", avatarUrl: "" }}
      />
    </>
  );
};

export default FullTweet;
