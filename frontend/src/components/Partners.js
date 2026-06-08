// import {
//   Box,
//   Container,
//   Typography
// } from "@mui/material";

// function Partners() {

//   const partners = [

//   "IFM",
//   "MICRO-LOG",
//   "SNP",
//   "WESS",
//   "ARJAY ALLOY",
//   "PRIVATE LTD",
//   "ASTER AADHAR HOSPITAL",
//   "GBN",
//   "YALHUD"

// ];

//   return (

//     <Box
//       sx={{
//         py: 10,
//         background:
//           "linear-gradient(to bottom,#ffffff,#F5F9FF)",
//         overflow: "hidden"
//       }}
//     >

//       <Container maxWidth="xl">

//         {/* SMALL TITLE */}

//         <Typography
//           sx={{

//             textAlign: "center",

//             color: "#1565D8",

//             textTransform: "uppercase",

//             letterSpacing: "4px",

//             fontWeight: "700",

//             mb: 1,

//             fontSize: "12px"
//           }}
//         >
//           OUR PARTNERS
//         </Typography>

//         {/* MAIN HEADING */}

//         <Typography
//           sx={{

//             textAlign: "center",

//             fontWeight: "900",

//             color: "#081B4B",

//             mb: 6,

//             lineHeight: 1.3,

//             fontSize: {
//               xs: "28px",
//               md: "42px"
//             }
//           }}
//         >
//           Trusted By Innovative <br />
//           Companies Worldwide
//         </Typography>

//         {/* SCROLLING PARTNERS */}

//         <Box
//           sx={{

//             overflow: "hidden",

//             width: "100%",

//             position: "relative"
//           }}
//         >

//           <Box
//             sx={{

//               display: "flex",

//               gap: 4,

//               width: "max-content",

//               animation:
//                 "scrollPartner 20s linear infinite",

//               "@keyframes scrollPartner": {

//                 "0%": {
//                   transform: "translateX(0)"
//                 },

//                 "100%": {
//                   transform:
//                     "translateX(-50%)"
//                 }
//               }
//             }}
//           >

//             {[...partners, ...partners].map(
//               (item, index) => (

//                 <Box
//                   key={index}
//                   sx={{

//                     minWidth: "220px",

//                     height: "110px",

//                     borderRadius: "22px",

//                     background: "#ffffff",

//                     display: "flex",

//                     alignItems: "center",

//                     justifyContent: "center",

//                     fontWeight: "800",

//                     letterSpacing: "1px",

//                     color: "#081B4B",

//                     fontSize: {
//                       xs: "18px",
//                       md: "22px"
//                     },

//                     border:
//                       "1px solid rgba(21,101,216,0.08)",

//                     boxShadow:
//                       "0 10px 25px rgba(0,0,0,0.05)",

//                     transition: "0.4s",

//                     "&:hover": {

//                       transform:
//                         "translateY(-8px)",

//                       background:
//                         "linear-gradient(to right,#1565D8,#8BC53F)",

//                       color: "#ffffff"
//                     }
//                   }}
//                 >
//                   {item}
//                 </Box>

//               )
//             )}

//           </Box>

//         </Box>

//       </Container>

//     </Box>

//   );
// }

// export default Partners;
























import {
  Box,
  Container,
  Typography
} from "@mui/material";

/* IMPORT LOGOS */

import ifm from "../assets/ifm.png";
import microlog from "../assets/micro-log.png";
import snp from "../assets/snp.png";
import aster from "../assets/Asteradhar.png";
import yalhud from "../assets/yalgud.png";
import gbn from "../assets/GBN.png";
import aarohan from "../assets/AAROHAN.jpeg";
import Kelson from "../assets/Kelson.png";

function Partners() {

  const partners = [

    {
      name: "IFM",
      logo: ifm
    },

    {
      name: "MICRO-LOG",
      logo: microlog
    },

    {
      name: "SNP",
      logo: snp
    },

    {
      name: "ASTER AADHAR",
      logo: aster
    },

    {
      name: "GBN",
      logo: gbn
    },

    {
      name: "AAROHAN",
      logo: aarohan
    },

    {
      name: "YALGUD",
      logo: yalhud
    },

    {
      name: "KELSON",
      logo: Kelson
    }

  ];

 return (

  <Box
    id="partners"
    sx={{
      py: {
        xs: 8,
        md: 12
      },

      background:
        "linear-gradient(to bottom,#ffffff,#F5F9FF)",

      overflow: "hidden",

      position: "relative"
    }}
  >

      <Container maxWidth="xl">

        {/* SMALL TITLE */}

        <Typography
          sx={{

            textAlign: "center",

            color: "#1565D8",

            textTransform: "uppercase",

            letterSpacing: "4px",

            fontWeight: "700",

            mb: 2,

            fontSize: {
              xs: "11px",
              md: "13px"
            }
          }}
        >
          OUR TRUSTED PARTNERS
        </Typography>

        {/* HEADING */}

        <Typography
          sx={{

            textAlign: "center",

            fontWeight: "900",

            color: "#081B4B",

            mb: 7,

            lineHeight: 1.3,

            fontSize: {
              xs: "30px",
              md: "46px"
            }
          }}
        >
          Companies That Trust <br />
          Our Digital Solutions
        </Typography>

        {/* SCROLL AREA */}

        <Box
          sx={{
            overflow: "hidden",
            width: "100%"
          }}
        >

          <Box
            sx={{

              display: "flex",

              gap: 4,

              width: "max-content",

              animation:
                "scrollPartner 24s linear infinite",

              "@keyframes scrollPartner": {

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

            {[...partners, ...partners].map(
              (item, index) => (

                <Box
                  key={index}
                  sx={{

                    minWidth: {
                      xs: "200px",
                      md: "240px"
                    },

                    height: {
                      xs: "150px",
                      md: "180px"
                    },

                    borderRadius: "28px",

                    background: "#ffffff",

                    border:
                      "1px solid rgba(21,101,216,0.08)",

                    display: "flex",

                    flexDirection: "column",

                    alignItems: "center",

                    justifyContent: "center",

                    boxShadow:
                      "0 10px 30px rgba(0,0,0,0.05)",

                    transition: "0.45s ease",

                    position: "relative",

                    overflow: "hidden",

                    "&:hover": {

                      transform:
                        "translateY(-10px)",

                      boxShadow:
                        "0 20px 40px rgba(21,101,216,0.15)"
                    },

                    "&::before": {

                      content: '""',

                      position: "absolute",

                      top: 0,

                      left: 0,

                      width: "100%",

                      height: "4px",

                      background:
                        "linear-gradient(to right,#1565D8,#8BC53F)"
                    }
                  }}
                >

                  {/* LOGO */}

                  <Box
                    component="img"
                    src={item.logo}
                    alt={item.name}
                    sx={{

                      width: {
                        xs: "150px",
                        md: "140px"
                      },

                      height: {
                        xs: "90px",
                        md: "95px"
                      },

                      objectFit: "contain",

                      mb: 1.5,

                      transition: "0.4s ease",

                      filter:
                        "drop-shadow(0 6px 10px rgba(0,0,0,0.12))",

                      "&:hover": {

                        transform:
                          "scale(1.08)"
                      }
                    }}
                  />

                  {/* NAME */}

                  <Typography
                    sx={{

                      fontWeight: "700",

                      color: "#081B4B",

                      textAlign: "center",

                      letterSpacing: "0.5px",

                      fontSize: {
                        xs: "12px",
                        md: "14px"
                      }
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

export default Partners;