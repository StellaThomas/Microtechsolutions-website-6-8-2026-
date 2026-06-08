// import {
//   Box,
//   Typography,
//   Button,
//   Container,
//   Grid
// } from "@mui/material";

// import hero from "../assets/hero.jpg";

// function Hero() {

//   return (
//     <Box
//       id="home"
//       sx={{
//         minHeight:"100vh",
//         display:"flex",
//         alignItems:"center",
//         background:
//         "linear-gradient(to right,#2C4B9B,#4EA5D9)",
//         color:"white",
//         pt:10
//       }}
//     >

//       <Container>

//         <Grid container spacing={5} alignItems="center">

//           <Grid item xs={12} md={6}>

//             <Typography
//               variant="h2"
//               fontWeight="bold"
//               mb={3}
//             >
//               Your Problems,
//               <br />
//               Our Smart Solutions
//             </Typography>

//             <Typography
//               variant="h6"
//               sx={{
//                 lineHeight:2,
//                 mb:4
//               }}
//             >
//               We create modern websites,
//               software solutions and digital
//               experiences for growing businesses.
//             </Typography>

//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 background:"#B7D63D",
//                 color:"black",
//                 px:5,
//                 py:2,
//                 borderRadius:"12px"
//               }}
//             >
//               Get Started
//             </Button>

//           </Grid>

//           <Grid item xs={12} md={6}>

//             <Box
//               component="img"
//               src={hero}
//               sx={{
//                 width:"100%",
//                 borderRadius:"20px"
//               }}
//             />

//           </Grid>

//         </Grid>

//       </Container>

//     </Box>
//   );
// }

// export default Hero;














import {
  Box,
  Typography,
  Container,
  Button,
  Stack
} from "@mui/material";

import { Typewriter } from "react-simple-typewriter";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import hero from "../assets/hero.jpg";
import { Link } from "react-router-dom";

function Hero() {

  return (

    <Box
      id="home"
      sx={{

        width: "100%",

        minHeight: {
          xs: "100vh",
          md: "92vh"
        },

        backgroundImage: `url(${hero})`,

        backgroundSize: "cover",

        backgroundPosition: "center",

        backgroundRepeat: "no-repeat",

        position: "relative",

        display: "flex",

        alignItems: "center",

        overflow: "hidden",

        pt: {
          xs: "110px",
          md: "80px"
        },

        pb: {
          xs: 6,
          md: 4
        }
      }}
    >

   

     {/* DARK PROFESSIONAL OVERLAY */}

<Box
  sx={{

    position: "absolute",

    inset: 0,

    background:
      "linear-gradient(to right, rgba(255,255,255,0.70), rgba(255,255,255,0.04))",

    zIndex: 1
  }}
/>

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2
        }}
      >

        <Box
          sx={{

            width: {
              xs: "100%",
              md: "42%"
            },

            pl: {
              xs: 1,
              md: 4
            }
          }}
        >

          {/* SMALL TEXT */}

          <Typography
            sx={{

              color: "#1565D8",

              fontWeight: "500",

              letterSpacing: "2px",

              textTransform: "uppercase",

              mb: 2,

              animation: "fadeDown 1s ease",

              "@keyframes fadeDown": {

                "0%": {
                  opacity: 0,
                  transform: "translateY(-30px)"
                },

                "100%": {
                  opacity: 1,
                  transform: "translateY(0)"
                }
              },

              fontSize: {
                xs: "11px",
                md: "13px"
              }
            }}
          >
            Future Ready Digital Solutions
          </Typography>

          {/* HEADING */}

         <Typography
  sx={{

    fontWeight: "900",

    color: "#081B4B",

    lineHeight: 1.05,

    letterSpacing: "-1px",

    mb: 2,

    fontSize: {
      xs: "32px",
      sm: "42px",
      md: "52px",
      lg: "58px"
    }
  }}
>

  {/* TRANSFORM */}

  <Box
    component="span"
    sx={{

      display: "block",

      animation: "slideLeft 1s ease",

      "@keyframes slideLeft": {

        "0%": {
          opacity: 0,
          transform: "translateX(-60px)"
        },

        "100%": {
          opacity: 1,
          transform: "translateX(0)"
        }
      }
    }}
  >
    Transform
  </Box>

  {/* BUSINESS */}

  <Box
    component="span"
    sx={{

      display: "block",

      animation: "slideRight 1.2s ease",

      "@keyframes slideRight": {

        "0%": {
          opacity: 0,
          transform: "translateX(60px)"
        },

        "100%": {
          opacity: 1,
          transform: "translateX(0)"
        }
      }
    }}
  >
    Your Business
  </Box>

  {/* WITH */}

  <Box
    component="span"
    sx={{

      display: "block",

      animation: "fadeUp 1.3s ease",

      "@keyframes fadeUp": {

        "0%": {
          opacity: 0,
          transform: "translateY(30px)"
        },

        "100%": {
          opacity: 1,
          transform: "translateY(0)"
        }
      }
    }}
  >
    With
  </Box>

  {/* DIGITAL INNOVATION */}

  <Box
    component="span"
    sx={{

      display: "block",

      color: "#8BC53F",

      mt: 1,

      animation: "glowText 3s ease-in-out infinite",

      "@keyframes glowText": {

        "0%": {
          opacity: 0.7,
          transform: "scale(1)"
        },

        "50%": {
          opacity: 1,
          transform: "scale(1.03)"
        },

        "100%": {
          opacity: 0.7,
          transform: "scale(1)"
        }
      }
    }}
  >
    Digital Innovation
  </Box>

</Typography>

          {/* DESCRIPTION */}
{/* DESCRIPTION */}

<Typography
  sx={{

    color: "#4B5B76",

    lineHeight: 1.8,

    maxWidth: "520px",

    mb: 4,

    fontWeight: "500",

    letterSpacing: "0.2px",

    animation: "fadeSlideUp 1.8s ease",

    "@keyframes fadeSlideUp": {

      "0%": {
        opacity: 0,
        transform: "translateY(40px)"
      },

      "100%": {
        opacity: 1,
        transform: "translateY(0)"
      }
    },

    fontSize: {
      xs: "14px",
      sm: "15px",
      md: "16px"
    }
  }}
>

  <Box
    component="span"
    sx={{

      background:
        "linear-gradient(90deg,#1565D8,#8BC53F)",

      WebkitBackgroundClip: "text",

      WebkitTextFillColor: "transparent",

      fontWeight: "700"
    }}
  >
   Creating secure,
  </Box>

  {" "}scalable and innovative software solutions
     with modern technologies that simplify business operations
and deliver seamless digital experiences.  

</Typography>

          {/* BUTTONS */}

          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
          >

            {/* <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{

                background:
                  "linear-gradient(to right,#1565D8,#0D47A1)",

                px: 4,

                py: 1.4,

                borderRadius: "14px",

                textTransform: "none",

                fontWeight: "700",

                fontSize: "15px",

                boxShadow:
                  "0 10px 25px rgba(21,101,216,0.25)",

                "&:hover": {

                  background:
                    "linear-gradient(to right,#0D47A1,#1565D8)"
                }
              }}
            >
              Get Started
            </Button> */}

         <Button
  component={Link}
  to="/projects"
  startIcon={<PlayArrowIcon />}
  sx={{
    color: "#081B4B",
    border: "2px solid #8BC53F",
    background: "rgba(255,255,255,0.75)",
    px: 4,
    py: 1.4,
    borderRadius: "14px",
    textTransform: "none",
    fontWeight: "700",
    fontSize: "15px",

    "&:hover": {
      background: "#F4FFE8"
    }
  }}
>
  Explore More
</Button>



          </Stack>

        </Box>

      </Container>

    </Box>

  );
}

export default Hero;