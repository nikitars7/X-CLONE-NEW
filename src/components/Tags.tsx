import React from "react";
import { useHomeStyles } from "../pages/theme";
import { useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector } from "react-redux";
import { TagsData } from "../store/slices/tags";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import { selectTags } from "../store/selectors";
interface TagsProps {
  classes: ReturnType<typeof useHomeStyles>;
}
const Tags: React.FC<TagsProps> = ({ classes }) => {
  const { tags, isLoadingTags } = useSelector(selectTags);
  const theme = useTheme();
  return (
    <Paper className={classes.searchSideBlock}>
      <div className={classes.searchSideBlockList}>
        <div className={classes.searchSideHeader}>Trends for you</div>
        {isLoadingTags === "loading" ? (
          <div className={classes.loadingTweetsProgress}>
            <CircularProgress />
          </div>
        ) : (
          tags.map((tag: TagsData) => (
            <div key={tag._id} className={classes.searchSideItem}>
              <Link to={`/home/search?q=${tag.name}`}>
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
                  {tag.name}
                </div>
                <div
                  style={{
                    marginTop: "4px",
                    fontSize: "13px",
                    color: "rgb(83, 100, 113)",
                  }}
                >
                  {tag.count} posts
                </div>
              </Link>
            </div>
          ))
        )}
        <div className={classes.searchSideMore}>
          <a href="#">Show more</a>
        </div>
      </div>
    </Paper>
  );
};

export default Tags;
