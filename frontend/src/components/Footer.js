// import {
//   Box,
//   Container,
//   Typography
// } from "@mui/material";

// function Footer() {

//   return (
//     <Box
//       sx={{
//         background:"#111827",
//         color:"white",
//         py:6
//       }}
//     >

//       <Container>

//         <Typography
//           variant="h4"
//           textAlign="center"
//           fontWeight="bold"
//           mb={2}
//         >
//           Microtech Solutions
//         </Typography>

//         <Typography
//           textAlign="center"
//           mb={2}
//         >
//           Empowering Businesses With Smart Digital Solutions
//         </Typography>

//         <Typography textAlign="center">

//           © 2026 All Rights Reserved

//         </Typography>

//       </Container>

//     </Box>
//   );
// }

// export default Footer;
















































import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #020617 0%, #0f172a 40%, #1e293b 100%)",
        color: "white",
        pt: 8,
        pb: 3,
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>

          {/* LEFT SIDE */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                mb: 2,
                color: "#38bdf8",
                letterSpacing: 1,
              }}
            >
              Microtech Solutions
            </Typography>

            <Typography
              sx={{
                color: "#cbd5e1",
                lineHeight: 1.9,
                mb: 4,
                fontSize: "15px",
              }}
            >
              Transforming businesses with modern web development,
              mobile applications, ERP systems, UI/UX design,
              and smart digital technology solutions.
            </Typography>

            {/* SOCIAL ICONS */}
            <Box sx={{ display: "flex", gap: 2 }}>
              {[FacebookIcon, InstagramIcon, LinkedInIcon].map(
                (Icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      width: 45,
                      height: 45,
                      background: "rgba(255,255,255,0.08)",
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      transition: "0.4s",

                      "&:hover": {
                        background:
                          "linear-gradient(135deg,#0ea5e9,#2563eb)",
                        transform: "translateY(-5px)",
                        boxShadow:
                          "0 10px 20px rgba(14,165,233,0.4)",
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                )
              )}
            </Box>
          </Grid>

          {/* QUICK LINKS */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={3}
              sx={{
                color: "#ffffff",
              }}
            >
              Quick Links
            </Typography>

            {[
              "Home",
              "About Us",
              "Services",
              "Projects",
              "Contact",
            ].map((item) => (
              <Typography
                key={item}
                sx={{
                  mb: 2,
                  color: "#cbd5e1",
                  cursor: "pointer",
                  transition: "0.3s",
                  fontSize: "15px",

                  "&:hover": {
                    color: "#38bdf8",
                    pl: 1,
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          {/* SERVICES */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={3}
            >
              Services
            </Typography>

            {[
              "Web Development",
              "Mobile App Development",
              "UI/UX Design",
              "ERP Development",
              "Digital Marketing",
            ].map((item) => (
              <Typography
                key={item}
                sx={{
                  mb: 2,
                  color: "#cbd5e1",
                  cursor: "pointer",
                  transition: "0.3s",
                  fontSize: "15px",

                  "&:hover": {
                    color: "#38bdf8",
                    pl: 1,
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          {/* CONTACT */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={3}
            >
              Contact Us
            </Typography>

            {/* PHONE */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 3,
              }}
            >
              <PhoneIcon sx={{ color: "#38bdf8" }} />

              <Typography
                sx={{
                  color: "#cbd5e1",
                  fontSize: "15px",
                }}
              >
                +91 9011040831
              </Typography>
            </Box>

            {/* EMAIL */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 3,
              }}
            >
              <EmailIcon sx={{ color: "#38bdf8" }} />

              <Typography
                sx={{
                  color: "#cbd5e1",
                  fontSize: "15px",
                  wordBreak: "break-word",
                }}
              >
                microtechit@yahoo.com
              </Typography>
            </Box>

            {/* LOCATION */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1.5,
              }}
            >
              <LocationOnIcon sx={{ color: "#38bdf8" }} />

              <Typography
                sx={{
                  color: "#cbd5e1",
                  lineHeight: 1.8,
                  fontSize: "15px",
                }}
              >
                Mahalaxmi Pride,
                <br />
                Rajarampuri Lane 6,
                <br />
                Takala Side,
                <br />
                Kolhapur, Maharashtra, India
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* DIVIDER */}
        <Divider
          sx={{
            my: 5,
            borderColor: "rgba(255,255,255,0.1)",
          }}
        />

        {/* BOTTOM */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: "#cbd5e1",
              fontSize: "14px",
            }}
          >
            © 2026 Microtech Solutions. All Rights Reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            <Typography
              sx={{
                color: "#cbd5e1",
                cursor: "pointer",
                transition: "0.3s",

                "&:hover": {
                  color: "#38bdf8",
                },
              }}
            >
              Privacy Policy
            </Typography>

            <Typography
              sx={{
                color: "#cbd5e1",
                cursor: "pointer",
                transition: "0.3s",

                "&:hover": {
                  color: "#38bdf8",
                },
              }}
            >
              Terms & Conditions
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;