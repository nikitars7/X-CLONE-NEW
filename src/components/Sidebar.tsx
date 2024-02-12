import { useHomeStyles } from "../pages/theme";
import { Link } from "react-router-dom";
import { Typography, IconButton, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import XIcon from "@mui/icons-material/X";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import theme from "../theme";
import { ModalWindow } from "../UI/Modal/ModalWindow";
import { useState } from "react";
import AddTweetForm from "./AddTweetForm";
interface SibeBarProps {
  classes: ReturnType<typeof useHomeStyles>;
}

const Sidebar: React.FC<SibeBarProps> = ({ classes }) => {
  const [visibleTweet, setVisibleTweet] = useState<boolean>(false);
  const handleVisible = (): void => {
    setVisibleTweet(!visibleTweet);
  };
  return (
    <nav className={classes.navList}>
      <Link to="/home" className={classes.navLink}>
        <IconButton>
          <XIcon className={classes.logo} sx={{ fontSize: "30px" }} />
        </IconButton>
      </Link>
      <Link to="" className={classes.navLink}>
        <div>
          <HomeOutlinedIcon
            className={classes.navIcon}
            sx={{ fontSize: "30px" }}
          />
          <Typography
            sx={{ display: { sm: "none", md: "block" } }}
            variant="h6"
            color={theme.palette.secondary.dark}
          >
            Home
          </Typography>
        </div>
      </Link>
      <Link to="" className={classes.navLink}>
        <div>
          <SearchIcon className={classes.navIcon} sx={{ fontSize: "30px" }} />
          <Typography
            sx={{ display: { sm: "none", md: "block" } }}
            variant="h6"
            color={theme.palette.secondary.dark}
          >
            Explore
          </Typography>
        </div>
      </Link>
      <Link to="" className={classes.navLink}>
        <div>
          <NotificationsNoneIcon
            className={classes.navIcon}
            sx={{ fontSize: "30px" }}
          />
          <Typography
            sx={{ display: { sm: "none", md: "block" } }}
            variant="h6"
            color={theme.palette.secondary.dark}
          >
            Notifications
          </Typography>
        </div>
      </Link>
      <Link to="" className={classes.navLink}>
        <div>
          <MailOutlineIcon
            className={classes.navIcon}
            sx={{ fontSize: "30px" }}
          />
          <Typography
            sx={{ display: { sm: "none", md: "block" } }}
            variant="h6"
            color={theme.palette.secondary.dark}
          >
            Messages
          </Typography>
        </div>
      </Link>
      <Link to="" className={classes.navLink}>
        <div>
          <FeaturedPlayListIcon
            className={classes.navIcon}
            sx={{ fontSize: "30px" }}
          />
          <Typography
            sx={{ display: { sm: "none", md: "block" } }}
            variant="h6"
            color={theme.palette.secondary.dark}
          >
            Lists
          </Typography>
        </div>
      </Link>
      <Link to="" className={classes.navLink}>
        <div>
          <XIcon className={classes.navIcon} sx={{ fontSize: "30px" }} />
          <Typography
            sx={{ display: { sm: "none", md: "block" } }}
            variant="h6"
            color={theme.palette.secondary.dark}
          >
            Premium
          </Typography>
        </div>
      </Link>
      <Link to="" className={classes.navLink}>
        <div>
          <PermIdentityIcon
            className={classes.navIcon}
            sx={{ fontSize: "30px" }}
          />
          <Typography
            sx={{ display: { sm: "none", md: "block" } }}
            variant="h6"
            color={theme.palette.secondary.dark}
          >
            Profile
          </Typography>
        </div>
      </Link>
      <Link to="" className={classes.navLink}>
        <div>
          <MoreHorizIcon
            className={classes.navIcon}
            sx={{ fontSize: "30px" }}
          />
          <Typography
            sx={{ display: { sm: "none", md: "block" } }}
            variant="h6"
            color={theme.palette.secondary.dark}
          >
            More
          </Typography>
        </div>
      </Link>
      <Button
        onClick={handleVisible}
        variant="contained"
        sx={{
          maxWidth: "240px",
          display: { sm: "none", md: "block" },
        }}
      >
        Post
      </Button>
      <Button variant="contained" sx={{ display: { sm: "block", md: "none" } }}>
        <CreateOutlinedIcon />
      </Button>
      <ModalWindow
        visible={visibleTweet}
        title="Drafts"
        onClose={handleVisible}
      >
        <div style={{ width: "600px" }}>
          <AddTweetForm classes={classes} />
        </div>
      </ModalWindow>
    </nav>
  );
};

export default Sidebar;
