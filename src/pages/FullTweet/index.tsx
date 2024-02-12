import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTweet } from "../../store/selectors";
import { useParams, useNavigate } from "react-router-dom";
import Tweet from "../../components/Tweet";
import { useHomeStyles } from "../theme";
import { CircularProgress, IconButton, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { fetchTweet, setTweet } from "../../store/slices/tweet";
import { useAppDispatch } from "../../store/store";
const FullTweet: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { tweet, isLoadingTweet } = useSelector(selectTweet);
  const { id } = useParams();
  console.log(id);
  const classes = useHomeStyles();
  const handleClickBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    if (id) {
      dispatch(fetchTweet(id));
    }
    return () => {
      dispatch(setTweet(undefined));
    };
  }, []);
  if (!tweet) {
    return null;
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
      <Tweet classes={classes} {...tweet} />
    </>
  );
};

export default FullTweet;
