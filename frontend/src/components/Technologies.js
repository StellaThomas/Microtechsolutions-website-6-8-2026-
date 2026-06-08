import {
  Box,
  Container,
  Typography
} from "@mui/material";

import javascriptLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import reactNativeLogo from "../assets/reactnative.png";
import nodeLogo from "../assets/node.png";
import mongoLogo from "../assets/mongodb.png";
import sqlLogo from "../assets/mssql.png";
import csharpLogo from "../assets/csharp.png";
import postmanLogo from "../assets/postman.png";
import uiuxLogo from "../assets/uiux.png";

function Technologies() {

  const technologies = [

    {
      name: "JavaScript",
      logo: javascriptLogo
    },

    {
      name: "React JS",
      logo: reactLogo
    },

    {
      name: "React Native",
      logo: reactNativeLogo
    },

    {
      name: "Node JS",
      logo: nodeLogo
    },

    {
      name: "MongoDB",
      logo: mongoLogo
    },

    {
      name: "MS SQL",
      logo: sqlLogo
    },

    {
      name: "C#",
      logo: csharpLogo
    },

    {
      name: "Postman",
      logo: postmanLogo
    },

    {
      name: "UI / UX",
      logo: uiuxLogo
    }

  ];

  return (

    <Box
      sx={{

        py: 10,

        background:
          "linear-gradient(to right,#F5F9FF,#EAF3FF)",

        overflow: "hidden"
      }}
    >

      <Container maxWidth="xl">

        {/* SMALL TITLE */}

        <Typography
          sx={{

            textAlign: "center",

            color: "#8BC53F",

            textTransform: "uppercase",

            letterSpacing: "4px",

            fontWeight: "700",

            mb: 2,

            fontSize: "13px"
          }}
        >
          TECHNOLOGIES WE USE
        </Typography>

        {/* HEADING */}

        <Typography
          sx={{

            textAlign: "center",

            color: "#081B4B",

            fontWeight: "900",

            mb: 7,

            lineHeight: 1.2,

            fontSize: {
              xs: "32px",
              md: "48px"
            }
          }}
        >
          Modern Technologies <br />
          We Work With
        </Typography>

        {/* SCROLLING SECTION */}

        <Box
          sx={{

            overflow: "hidden",

            width: "100%"
          }}
        >

          <Box
            sx={{

              display: "flex",

              alignItems: "center",

              gap: 5,

              width: "max-content",

              animation:
                "techScroll 24s linear infinite",

              "@keyframes techScroll": {

                "0%": {
                  transform: "translateX(0)"
                },

                "100%": {
                  transform:
                    "translateX(-50%)"
                }
              }
            }}
          >

            {[...technologies, ...technologies].map(
              (item, index) => (

                <Box
                  key={index}
                  sx={{

                    minWidth: "180px",

                    display: "flex",

                    flexDirection: "column",

                    alignItems: "center",

                    justifyContent: "center",

                    transition: "0.4s ease",

                    "&:hover": {

                      transform:
                        "translateY(-10px)"
                    }
                  }}
                >

                  {/* LOGO BOX */}

                  <Box
                    sx={{

                      width: 120,

                      height: 120,

                      borderRadius: "50%",

                      background: "#ffffff",

                      border:
                        "1px solid rgba(21,101,216,0.10)",

                      display: "flex",

                      alignItems: "center",

                      justifyContent: "center",

                      mb: 2,

                      boxShadow:
                        "0 10px 30px rgba(0,0,0,0.08)"
                    }}
                  >

                    {/* IMAGE */}

                    <Box
                      component="img"
                      src={item.logo}
                      alt={item.name}
                      sx={{

                        width: "80px",

                        height: "80px",

                        objectFit: "contain"
                      }}
                    />

                  </Box>

                  {/* NAME */}

                  <Typography
                    sx={{

                      color: "#081B4B",

                      fontWeight: "700",

                      textAlign: "center",

                      fontSize: "16px"
                    }}
                  >
                    {item.name}
                  </Typography>

                </Box>

              )
            )}

          </Box>

        </Box>

      </Container>

    </Box>

  );
}

export default Technologies;