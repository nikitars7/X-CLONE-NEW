import XIcon from "@mui/icons-material/X";
const LoaderX = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <XIcon sx={{ color: "white", fontSize: "80px" }} />
    </div>
  );
};

export default LoaderX;
