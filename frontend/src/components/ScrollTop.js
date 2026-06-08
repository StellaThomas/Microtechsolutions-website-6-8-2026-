import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ScrollTop() {

  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  };

  return (
    <Fab
      onClick={scrollTop}
      sx={{
        position:"fixed",
        bottom:90,
        right:25,
        background:"#2C4B9B",
        color:"white"
      }}
    >

      <KeyboardArrowUpIcon />

    </Fab>
  );
}

export default ScrollTop;