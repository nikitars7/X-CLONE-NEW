import React, { useState } from "react";
import { useHomeStyles } from "../pages/theme";
import {
  Avatar,
  TextareaAutosize,
  IconButton,
  CircularProgress,
  Button,
} from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import FormatListNumberedOutlinedIcon from "@mui/icons-material/FormatListNumberedOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useAppDispatch } from "../store/store";
import { fetchAddTweet } from "../store/slices/tweets";
interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
}
const AddTweetForm: React.FC<AddTweetFormProps> = ({ classes }) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const maxValue: number = 300;
  let remaining = maxValue - value.length;
  let circularValue = Math.round((value.length / maxValue) * 100);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.value);
  };
  const handleAddTweet = (): void => {
    dispatch(fetchAddTweet(value));
    setValue("");
  };
  return (
    <div className={classes.addPost}>
      <Avatar
        className={classes.addPostAvatar}
        alt="user avatar"
        src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
      />
      <div className={classes.addPostForm}>
        <TextareaAutosize
          value={value}
          onChange={handleChange}
          placeholder="What's happening"
          className={classes.addPostTextArea}
        />
        <div className={classes.addPostFooter}>
          <div hidden>Everyone can reply</div>
          <div className={classes.addPostActions}>
            <div>
              <IconButton color="primary">
                <ImageOutlinedIcon />
              </IconButton>
              <IconButton color="primary">
                <GifBoxOutlinedIcon />
              </IconButton>
              <IconButton color="primary">
                <FormatListNumberedOutlinedIcon />
              </IconButton>
              <IconButton color="primary">
                <EmojiEmotionsOutlinedIcon />
              </IconButton>
              <IconButton color="primary">
                <PendingActionsOutlinedIcon />
              </IconButton>
              <IconButton color="primary">
                <LocationOnOutlinedIcon />
              </IconButton>
            </div>
            <div className={classes.addPostButton}>
              {value.length !== 0 && (
                <div className={classes.addFormCircleProgress}>
                  <CircularProgress
                    variant="determinate"
                    size={remaining > 20 ? 20 : 37}
                    value={circularValue <= 100 ? circularValue : 100}
                    sx={
                      remaining <= 20 && remaining > 0
                        ? { color: "yellow" }
                        : { color: remaining <= 0 ? "red" : "" }
                    }
                  />
                  <CircularProgress
                    sx={{ color: "rgba(0,0,0,0.1)" }}
                    variant="determinate"
                    size={remaining > 20 ? 20 : 37}
                    value={100}
                    thickness={4}
                  />
                  {remaining <= 20 ? (
                    <span
                      className={remaining <= 0 ? classes.circularProgress : ""}
                    >
                      {remaining}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              )}
              <Button
                onClick={handleAddTweet}
                disabled={circularValue >= 100}
                variant="contained"
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTweetForm;
