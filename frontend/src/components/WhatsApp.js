import { Fab, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function WhatsApp() {
  return (
    <Tooltip title="Chat on WhatsApp" placement="left">
      <Fab
        href="https://wa.me/919011040831"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="whatsapp"
        sx={{
          position: "fixed",
          bottom: {
            xs: 15,
            sm: 20,
            md: 25,
          },
          right: {
            xs: 15,
            sm: 20,
            md: 25,
          },

          width: {
            xs: 55,
            sm: 60,
          },

          height: {
            xs: 55,
            sm: 60,
          },

          background:
            "linear-gradient(135deg, #25D366, #128C7E)",

          color: "white",

          boxShadow:
            "0 10px 25px rgba(37, 211, 102, 0.5)",

          transition: "0.4s ease",

          zIndex: 999,

          "&:hover": {
            background:
              "linear-gradient(135deg, #1ebe5d, #0f766e)",
            transform: "scale(1.1) translateY(-5px)",
            boxShadow:
              "0 15px 30px rgba(37, 211, 102, 0.6)",
          },
        }}
      >
        <WhatsAppIcon
          sx={{
            fontSize: {
              xs: 30,
              sm: 34,
            },
          }}
        />
      </Fab>
    </Tooltip>
  );
}

export default WhatsApp;