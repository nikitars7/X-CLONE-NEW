import { Paper, Avatar, Typography, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { grey } from "@mui/material/colors";
import { useHomeStyles } from "../../pages/theme";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import DropDownMore from "../../UI/MenuDropdown/DropDownMore";
interface TweetProps {
  _id: string;
  text: string;
  createdAt: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}
const Tweet: React.FC<TweetProps> = ({
  classes,
  text,
  user,
  _id,
  createdAt,
}) => {
  // const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  // };
  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: 0,
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0,
        display: "flex",
        padding: "15px 10px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "rgb(245,248,250)",
        },
      }}
    >
      <Avatar
        alt={`Avatar of the ${user.username}`}
        src={user.avatarUrl}
        sx={{ marginRight: "12px", flexBasis: "40px" }}
      />
      <div style={{ flex: "1" }}>
        <div className={classes.tweetUserData}>
          <div>
            <b style={{ fontSize: "15px", marginRight: "5px" }}>
              {user.fullname}
            </b>
            <span className={classes.tweetUserName}> {user.username}</span>
            <span style={{ color: grey[500] }}>
              {formatDate(new Date(createdAt))}
            </span>
          </div>
          <DropDownMore />
        </div>
        <Typography variant="body1" gutterBottom>
          {text}
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
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
              <EqualizerIcon />
            </IconButton>
            <span>1</span>
          </div>
          <div>
            <IconButton>
              <BookmarkBorderIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Tweet;
