// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent
// } from "@mui/material";

// import LanguageIcon from "@mui/icons-material/Language";
// import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
// import CampaignIcon from "@mui/icons-material/Campaign";
// import CodeIcon from "@mui/icons-material/Code";

// function About() {

//   const services = [
//     {
//       icon: <LanguageIcon sx={{ fontSize: 40 }} />,
//       title: "Website Development"
//     },
//     {
//       icon: <PhoneIphoneIcon sx={{ fontSize: 40 }} />,
//       title: "Mobile Applications"
//     },
//     {
//       icon: <CodeIcon sx={{ fontSize: 40 }} />,
//       title: "Software Solutions"
//     },
//     {
//       icon: <CampaignIcon sx={{ fontSize: 40 }} />,
//       title: "Digital Marketing"
//     }
//   ];

//   return (

//     <Box
//       id="about"
//       sx={{
//         py: {
//           xs: 8,
//           md: 12
//         },
//         background:
//           "linear-gradient(to bottom,#F4F7FB,#ffffff)"
//       }}
//     >

//       <Container maxWidth="xl">

//         {/* HEADING */}

//         <Typography
//           sx={{
//             textAlign: "center",
//             fontWeight: "900",
//             color: "#081B4B",
//             mb: 2,

//             animation: "fadeDown 1s ease",

//             "@keyframes fadeDown": {
//               "0%": {
//                 opacity: 0,
//                 transform: "translateY(-40px)"
//               },

//               "100%": {
//                 opacity: 1,
//                 transform: "translateY(0)"
//               }
//             },

//             fontSize: {
//               xs: "38px",
//               md: "54px"
//             }
//           }}
//         >
//           About Us
//         </Typography>

//         {/* SMALL LINE */}

//         <Typography
//           sx={{
//             textAlign: "center",
//             color: "#1565D8",
//             letterSpacing: "3px",
//             textTransform: "uppercase",
//             mb: 6,
//             fontWeight: "600",

//             fontSize: {
//               xs: "12px",
//               md: "14px"
//             }
//           }}
//         >
//           Future Ready Digital Company
//         </Typography>

//         {/* MAIN CARD */}

//         <Card
//           sx={{
//             borderRadius: "30px",
//             overflow: "hidden",

//             background:
//               "rgba(255,255,255,0.8)",

//             backdropFilter: "blur(10px)",

//             boxShadow:
//               "0 15px 40px rgba(0,0,0,0.08)",

//             p: {
//               xs: 3,
//               md: 6
//             },

//             animation: "fadeUp 1.2s ease",

//             "@keyframes fadeUp": {
//               "0%": {
//                 opacity: 0,
//                 transform: "translateY(50px)"
//               },

//               "100%": {
//                 opacity: 1,
//                 transform: "translateY(0)"
//               }
//             }
//           }}
//         >

//           <CardContent>

//             {/* DESCRIPTION */}

//             <Typography
//               sx={{
//                 textAlign: "center",
//                 color: "#5B6575",
//                 lineHeight: 2,
//                 maxWidth: "950px",
//                 mx: "auto",
//                 mb: 7,
//                 fontWeight: "500",

//                 fontSize: {
//                   xs: "16px",
//                   md: "21px"
//                 }
//               }}
//             >

//               Microtech Solutions empowers
//               businesses with innovative
//               digital technologies, modern
//               software solutions and scalable
//               mobile applications designed
//               to accelerate growth and build
//               strong digital experiences for
//               startups, brands and enterprises.

//             </Typography>

//             {/* SERVICE BOXES */}

//             <Grid container spacing={4}>

//               {services.map((item, index) => (

//                 <Grid item xs={12} sm={6} md={3} key={index}>

//                   <Box
//                     sx={{

//                       background: "#ffffff",

//                       borderRadius: "22px",

//                       p: 4,

//                       textAlign: "center",

//                       transition: "0.4s",

//                       border:
//                         "1px solid rgba(0,0,0,0.05)",

//                       boxShadow:
//                         "0 8px 25px rgba(0,0,0,0.04)",

//                       "&:hover": {

//                         transform:
//                           "translateY(-10px)",

//                         background:
//                           "linear-gradient(to bottom,#1565D8,#0D47A1)",

//                         color: "#ffffff",

//                         boxShadow:
//                           "0 15px 35px rgba(21,101,216,0.25)"
//                       }
//                     }}
//                   >

//                     <Box
//                       sx={{
//                         color: "#1565D8",
//                         mb: 2,

//                         ".MuiBox-root:hover &": {
//                           color: "#ffffff"
//                         }
//                       }}
//                     >
//                       {item.icon}
//                     </Box>

//                     <Typography
//                       sx={{
//                         fontWeight: "700",

//                         fontSize: "18px"
//                       }}
//                     >
//                       {item.title}
//                     </Typography>

//                   </Box>

//                 </Grid>

//               ))}

//             </Grid>

//           </CardContent>

//         </Card>

//       </Container>

//     </Box>
//   );
// }

// export default About;





































// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent
// } from "@mui/material";

// import LanguageIcon from "@mui/icons-material/Language";
// import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
// import CampaignIcon from "@mui/icons-material/Campaign";
// import CodeIcon from "@mui/icons-material/Code";

// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// function About() {

//   const services = [

//     {
//       icon: <LanguageIcon sx={{ fontSize: 40 }} />,
//       title: "Website Development"
//     },

//     {
//       icon: <PhoneIphoneIcon sx={{ fontSize: 40 }} />,
//       title: "Mobile Applications"
//     },

//     {
//       icon: <CodeIcon sx={{ fontSize: 40 }} />,
//       title: "Software Solutions"
//     },

//     {
//       icon: <CampaignIcon sx={{ fontSize: 40 }} />,
//       title: "Digital Marketing"
//     }

//   ];

//   const chooseUs = [

//     "Experienced & Professional Team",

//     "High-Quality Work with Timely Delivery",

//     "Fast, Reliable & Secure Services",

//     "Modern Technologies & Scalable Solutions",

//     "100% Client Satisfaction"

//   ];

//   return (

//     <Box
//       id="about"
//       sx={{

//         py: {
//           xs: 8,
//           md: 12
//         },

//         background:
//           "linear-gradient(to bottom,#F5F9FF,#ffffff)"
//       }}
//     >

//       <Container maxWidth="xl">

//         {/* HEADING */}

//         <Typography
//           sx={{

//             textAlign: "center",

//             fontWeight: "900",

//             color: "#081B4B",

//             mb: 2,

//             animation: "fadeDown 1s ease",

//             "@keyframes fadeDown": {

//               "0%": {
//                 opacity: 0,
//                 transform: "translateY(-40px)"
//               },

//               "100%": {
//                 opacity: 1,
//                 transform: "translateY(0)"
//               }
//             },

//             fontSize: {
//               xs: "38px",
//               md: "54px"
//             }
//           }}
//         >
//           About Us
//         </Typography>

//         {/* SUBTITLE */}

//         <Typography
//           sx={{

//             textAlign: "center",

//             color: "#1565D8",

//             letterSpacing: "3px",

//             textTransform: "uppercase",

//             mb: 7,

//             fontWeight: "700",

//             fontSize: {
//               xs: "12px",
//               md: "14px"
//             }
//           }}
//         >
//           Future Ready Digital Company
//         </Typography>

//         {/* MAIN CARD */}

//         <Card
//           sx={{

//             borderRadius: "32px",

//             overflow: "hidden",

//             background:
//               "rgba(255,255,255,0.9)",

//             backdropFilter: "blur(12px)",

//             boxShadow:
//               "0 15px 40px rgba(0,0,0,0.08)",

//             p: {
//               xs: 3,
//               md: 6
//             },

//             animation: "fadeUp 1.2s ease",

//             "@keyframes fadeUp": {

//               "0%": {
//                 opacity: 0,
//                 transform: "translateY(50px)"
//               },

//               "100%": {
//                 opacity: 1,
//                 transform: "translateY(0)"
//               }
//             }
//           }}
//         >

//           <CardContent>

//             {/* DESCRIPTION */}

//             <Typography
//               sx={{

//                 textAlign: "center",

//                 color: "#5B6575",

//                 lineHeight: 2,

//                 maxWidth: "980px",

//                 mx: "auto",

//                 mb: 8,

//                 fontWeight: "500",

//                 fontSize: {
//                   xs: "16px",
//                   md: "20px"
//                 }
//               }}
//             >

//               Microtech Solutions delivers
//               modern software applications,
//               scalable web platforms and
//               innovative mobile technologies
//               designed to simplify business
//               operations and create seamless
//               digital experiences for startups,
//               enterprises and growing brands.

//             </Typography>

//             {/* SERVICE CARDS */}

//             <Grid container spacing={4} mb={8}>

//               {services.map((item, index) => (

//                 <Grid item xs={12} sm={6} md={3} key={index}>

//                   <Box
//                     sx={{

//                       background: "#ffffff",

//                       borderRadius: "22px",

//                       p: 4,

//                       textAlign: "center",

//                       transition: "0.4s",

//                       border:
//                         "1px solid rgba(0,0,0,0.05)",

//                       boxShadow:
//                         "0 8px 25px rgba(0,0,0,0.04)",

//                       "&:hover": {

//                         transform:
//                           "translateY(-10px)",

//                         background:
//                           "linear-gradient(to bottom,#1565D8,#0D47A1)",

//                         color: "#ffffff",

//                         boxShadow:
//                           "0 15px 35px rgba(21,101,216,0.25)"
//                       }
//                     }}
//                   >

//                     <Box
//                       sx={{

//                         color: "#1565D8",

//                         mb: 2
//                       }}
//                     >
//                       {item.icon}
//                     </Box>

//                     <Typography
//                       sx={{

//                         fontWeight: "700",

//                         fontSize: "18px"
//                       }}
//                     >
//                       {item.title}
//                     </Typography>

//                   </Box>

//                 </Grid>

//               ))}

//             </Grid>

//             {/* WHY CHOOSE US */}

//             <Box
//               sx={{

//                 background:
//                   "linear-gradient(to right,#1565D8,#0D47A1)",

//                 borderRadius: "28px",

//                 p: {
//                   xs: 4,
//                   md: 6
//                 },

//                 color: "#ffffff"
//               }}
//             >

//               <Typography
//                 sx={{

//                   fontWeight: "900",

//                   mb: 4,

//                   textAlign: "center",

//                   fontSize: {
//                     xs: "28px",
//                     md: "40px"
//                   }
//                 }}
//               >
//                 Why Choose Us
//               </Typography>

//               <Grid container spacing={3}>

//                 {chooseUs.map((item, index) => (

//                   <Grid item xs={12} md={6} key={index}>

//                     <Box
//                       sx={{

//                         display: "flex",

//                         alignItems: "center",

//                         gap: 2,

//                         background:
//                           "rgba(255,255,255,0.10)",

//                         borderRadius: "18px",

//                         p: 2.5,

//                         transition: "0.4s ease",

//                         "&:hover": {

//                           transform:
//                             "translateX(10px)",

//                           background:
//                             "rgba(255,255,255,0.18)"
//                         }
//                       }}
//                     >

//                       <CheckCircleIcon
//                         sx={{
//                           color: "#8BC53F",
//                           fontSize: 32
//                         }}
//                       />

//                       <Typography
//                         sx={{

//                           fontWeight: "600",

//                           fontSize: {
//                             xs: "15px",
//                             md: "17px"
//                           }
//                         }}
//                       >
//                         {item}
//                       </Typography>

//                     </Box>

//                   </Grid>

//                 ))}

//               </Grid>

//             </Box>

//           </CardContent>

//         </Card>

//       </Container>

//     </Box>
//   );
// }

// export default About;







































// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent
// } from "@mui/material";

// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
// import VisibilityIcon from "@mui/icons-material/Visibility";

// function About() {
//   const chooseUs = [
//     "Experienced & Professional Team",
//     "High-Quality Work with Timely Delivery",
//     "Fast, Reliable & Secure Services",
//     "Modern Technologies & Scalable Solutions",
//     "100% Client Satisfaction"
//   ];

//   return (
//     <Box
//       id="about"
//       sx={{
//         py: { xs: 8, md: 12 },
//         background: "linear-gradient(to bottom, #F5F9FF, #ffffff)"
//       }}
//     >
//       <Container maxWidth="xl">
//         {/* HEADING */}
//         <Typography
//           sx={{
//             textAlign: "center",
//             fontWeight: "900",
//             color: "#081B4B",
//             mb: 2,
//             animation: "fadeDown 1s ease",
//             "@keyframes fadeDown": {
//               "0%": {
//                 opacity: 0,
//                 transform: "translateY(-40px)"
//               },
//               "100%": {
//                 opacity: 1,
//                 transform: "translateY(0)"
//               }
//             },
//             fontSize: { xs: "38px", md: "56px" }
//           }}
//         >
//           About Us
//         </Typography>

//         {/* SUB TITLE */}
//         <Typography
//           sx={{
//             textAlign: "center",
//             color: "#1565D8",
//             letterSpacing: "4px",
//             textTransform: "uppercase",
//             mb: 7,
//             fontWeight: "700",
//             fontSize: { xs: "12px", md: "14px" }
//           }}
//         >
//           Future Ready Digital Company
//         </Typography>

//         {/* MAIN CARD CONTAINER */}
//         <Card
//           sx={{
//             borderRadius: "32px",
//             overflow: "hidden",
//             background: "rgba(255, 255, 255, 0.95)",
//             backdropFilter: "blur(12px)",
//             boxShadow: "0 15px 40px rgba(0, 0, 0, 0.05)",
//             p: { xs: 2, sm: 4, md: 5 },
//             animation: "fadeUp 1.2s ease",
//             "@keyframes fadeUp": {
//               "0%": {
//                 opacity: 0,
//                 transform: "translateY(50px)"
//               },
//               "100%": {
//                 opacity: 1,
//                 transform: "translateY(0)"
//               }
//             }
//           }}
//         >
//           <CardContent>
//             {/* COMPANY DESCRIPTION */}
//             <Typography
//               sx={{
//                 textAlign: "center",
//                 color: "#5B6575",
//                 lineHeight: 2,
//                 maxWidth: "980px",
//                 mx: "auto",
//                 mb: 8,
//                 fontWeight: "500",
//                 fontSize: { xs: "16px", md: "20px" }
//               }}
//             >
//               Microtech Solutions delivers modern software applications,
//               scalable web platforms and innovative mobile technologies designed
//               to simplify business operations and create seamless digital
//               experiences for startups, enterprises and growing brands.
//             </Typography>

//             {/* HIGHLY RELIABLE FLEXBOX SOLUTION FOR SIDE-BY-SIDE DESIGN */}
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: { xs: "column", sm: "row" },
//                 gap: { xs: 3, sm: 4 },
//                 mb: 8,
//                 width: "100%",
//                 justifyContent: "center",
//                 alignItems: "stretch"
//               }}
//             >
//               {/* MISSION BOX */}
//               <Box
//                 sx={{
//                   flex: 1, // Dynamically claims exactly 50% width on wide layouts
//                   background: "linear-gradient(135deg, #1565D8, #0D47A1)",
//                   borderRadius: "24px",
//                   p: { xs: 4, md: 5 },
//                   color: "#ffffff",
//                   minHeight: "220px",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   transition: "all 0.4s ease",
//                   boxShadow: "0 12px 30px rgba(21, 101, 216, 0.22)",
//                   "&:hover": {
//                     transform: "translateY(-8px)",
//                     boxShadow: "0 20px 40px rgba(21, 101, 216, 0.35)"
//                   }
//                 }}
//               >
//                 <RocketLaunchIcon sx={{ fontSize: 42, mb: 2 }} />
//                 <Typography
//                   sx={{
//                     fontWeight: "800",
//                     mb: 1.5,
//                     fontSize: { xs: "24px", md: "30px" }
//                   }}
//                 >
//                   Our Mission
//                 </Typography>
//                 <Typography
//                   sx={{
//                     lineHeight: 1.8,
//                     color: "rgba(255, 255, 255, 0.9)",
//                     fontSize: { xs: "14px", md: "15px" }
//                   }}
//                 >
//                   To deliver innovative and scalable software solutions using
//                   modern technologies that improve business productivity and
//                   digital growth.
//                 </Typography>
//               </Box>

//               {/* VISION BOX */}
//               <Box
//                 sx={{
//                   flex: 1, // Dynamically claims exactly 50% width on wide layouts
//                   background: "linear-gradient(135deg, #8BC53F, #4CAF50)",
//                   borderRadius: "24px",
//                   p: { xs: 4, md: 5 },
//                   color: "#ffffff",
//                   minHeight: "220px",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   transition: "all 0.4s ease",
//                   boxShadow: "0 12px 30px rgba(139, 197, 63, 0.22)",
//                   "&:hover": {
//                     transform: "translateY(-8px)",
//                     boxShadow: "0 20px 40px rgba(139, 197, 63, 0.35)"
//                   }
//                 }}
//               >
//                 <VisibilityIcon sx={{ fontSize: 42, mb: 2 }} />
//                 <Typography
//                   sx={{
//                     fontWeight: "800",
//                     mb: 1.5,
//                     fontSize: { xs: "24px", md: "30px" }
//                   }}
//                 >
//                   Our Vision
//                 </Typography>
//                 <Typography
//                   sx={{
//                     lineHeight: 1.8,
//                     color: "rgba(255, 255, 255, 0.9)",
//                     fontSize: { xs: "14px", md: "15px" }
//                   }}
//                 >
//                   To become a trusted technology partner by building secure
//                   and future-ready digital solutions for modern businesses.
//                 </Typography>
//               </Box>
//             </Box>

//             {/* WHY CHOOSE US */}
//             <Box
//               sx={{
//                 background: "linear-gradient(to right, #1565D8, #0D47A1)",
//                 borderRadius: "26px",
//                 p: { xs: 4, md: 5 },
//                 color: "#ffffff"
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontWeight: "800",
//                   mb: 4,
//                   textAlign: "center",
//                   fontSize: { xs: "24px", md: "34px" }
//                 }}
//               >
//                 Why Choose Us
//               </Typography>

//               <Grid container spacing={2} justifyContent="center">
//                 {chooseUs.map((item, index) => (
//                   <Grid item xs={12} sm={6} md={6} key={index}>
//                     <Box
//                       sx={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: 1.5,
//                         background: "rgba(255, 255, 255, 0.10)",
//                         borderRadius: "14px",
//                         px: 2,
//                         py: 1.8,
//                         minHeight: "70px",
//                         transition: "0.4s ease",
//                         backdropFilter: "blur(8px)",
//                         "&:hover": {
//                           transform: "translateY(-5px)",
//                           background: "rgba(255, 255, 255, 0.18)"
//                         }
//                       }}
//                     >
//                       <CheckCircleIcon sx={{ color: "#AEEA00", fontSize: 28 }} />
//                       <Typography
//                         sx={{
//                           fontWeight: "600",
//                           lineHeight: 1.5,
//                           fontSize: { xs: "13px", md: "15px" }
//                         }}
//                       >
//                         {item}
//                       </Typography>
//                     </Box>
//                   </Grid>
//                 ))}
//               </Grid>
//             </Box>
//           </CardContent>
//         </Card>
//       </Container>
//     </Box>
//   );
// }

// export default About;








































import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import VisibilityIcon from "@mui/icons-material/Visibility";

function About() {
  const chooseUs = [
    "Experienced & Professional Team",
    "High-Quality Work with Timely Delivery",
    "Fast, Reliable & Secure Services",
    "Modern Technologies & Scalable Solutions",
    "100% Client Satisfaction"
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(to bottom, #F5F9FF, #ffffff)",
        overflow: "hidden" // Prevents animation axis scrollbars
      }}
    >
      <Container maxWidth="xl">
        {/* HEADING */}
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "900",
            color: "#081B4B",
            mb: 2,
            animation: "fadeDown 1s ease",
            "@keyframes fadeDown": {
              "0%": {
                opacity: 0,
                transform: "translateY(-40px)"
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)"
              }
            },
            fontSize: { xs: "38px", md: "56px" }
          }}
        >
          About Us
        </Typography>

        {/* SUB TITLE */}
        <Typography
          sx={{
            textAlign: "center",
            color: "#1565D8",
            letterSpacing: "4px",
            textTransform: "uppercase",
            mb: 7,
            fontWeight: "700",
            fontSize: { xs: "12px", md: "14px" }
          }}
        >
          Future Ready Digital Company
        </Typography>

        {/* MAIN CARD CONTAINER */}
        <Card
          sx={{
            borderRadius: "32px",
            overflow: "hidden",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.05)",
            p: { xs: 2, sm: 4, md: 5 },
            animation: "fadeUp 1.2s ease",
            "@keyframes fadeUp": {
              "0%": {
                opacity: 0,
                transform: "translateY(50px)"
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)"
              }
            }
          }}
        >
          <CardContent>
            {/* COMPANY DESCRIPTION */}
            <Typography
              sx={{
                textAlign: "center",
                color: "#5B6575",
                lineHeight: 2,
                maxWidth: "980px",
                mx: "auto",
                mb: 8,
                fontWeight: "500",
                fontSize: { xs: "16px", md: "20px" }
              }}
            >
              Microtech Solutions delivers modern software applications,
              scalable web platforms and innovative mobile technologies designed
              to simplify business operations and create seamless digital
              experiences for startups, enterprises and growing brands.
            </Typography>

            {/* HIGHLY RELIABLE FLEXBOX SOLUTION FOR SIDE-BY-SIDE DESIGN */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 3, sm: 4 },
                mb: 10,
                width: "100%",
                justifyContent: "center",
                alignItems: "stretch"
              }}
            >
              {/* MISSION BOX */}
              <Box
                sx={{
                  flex: 1,
                  background: "linear-gradient(135deg, #1565D8, #0D47A1)",
                  borderRadius: "24px",
                  p: { xs: 4, md: 5 },
                  color: "#ffffff",
                  minHeight: "220px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  transition: "all 0.4s ease",
                  boxShadow: "0 12px 30px rgba(21, 101, 216, 0.22)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(21, 101, 216, 0.35)"
                  }
                }}
              >
                <RocketLaunchIcon sx={{ fontSize: 42, mb: 2 }} />
                <Typography
                  sx={{
                    fontWeight: "800",
                    mb: 1.5,
                    fontSize: { xs: "24px", md: "30px" }
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  sx={{
                    lineHeight: 1.8,
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: { xs: "14px", md: "15px" }
                  }}
                >
                  To deliver innovative and scalable software solutions using
                  modern technologies that improve business productivity and
                  digital growth.
                </Typography>
              </Box>

              {/* VISION BOX */}
              <Box
                sx={{
                  flex: 1,
                  background: "linear-gradient(135deg, #8BC53F, #4CAF50)",
                  borderRadius: "24px",
                  p: { xs: 4, md: 5 },
                  color: "#ffffff",
                  minHeight: "220px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  transition: "all 0.4s ease",
                  boxShadow: "0 12px 30px rgba(139, 197, 63, 0.22)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(139, 197, 63, 0.35)"
                  }
                }}
              >
                <VisibilityIcon sx={{ fontSize: 42, mb: 2 }} />
                <Typography
                  sx={{
                    fontWeight: "800",
                    mb: 1.5,
                    fontSize: { xs: "24px", md: "30px" }
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  sx={{
                    lineHeight: 1.8,
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: { xs: "14px", md: "15px" }
                  }}
                >
                  To become a trusted technology partner by building secure
                  and future-ready digital solutions for modern businesses.
                </Typography>
              </Box>
            </Box>

            {/* WHY CHOOSE US OPTION */}
            <Box sx={{ mt: 2 }}>
              <Typography
                sx={{
                  fontWeight: "900",
                  color: "#081B4B",
                  mb: 5,
                  textAlign: "center",
                  fontSize: { xs: "26px", md: "36px" }
                }}
              >
                Why Choose Us
              </Typography>

              <Grid container spacing={3} justifyContent="center">
                {chooseUs.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        background: "#ffffff",
                        border: "1px solid rgba(21, 101, 216, 0.08)",
                        borderRadius: "20px",
                        px: 3,
                        py: 2.5,
                        minHeight: "85px",
                        boxShadow: "0 10px 30px rgba(8, 27, 75, 0.03)",
                        transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                        
                        // Card container reveal behavior
                        opacity: 0,
                        animation: "fadeInBlock 0.6s ease forwards",
                        animationDelay: `${index * 0.2}s`,

                        "@keyframes fadeInBlock": {
                          "0%": { opacity: 0, transform: "translateY(15px)" },
                          "100%": { opacity: 1, transform: "translateY(0)" }
                        },

                        "&:hover": {
                          transform: "translateY(-6px)",
                          boxShadow: "0 15px 35px rgba(21, 101, 216, 0.12)",
                          borderColor: "rgba(21, 101, 216, 0.25)",
                          background: "linear-gradient(to bottom right, #ffffff, #F6F9FF)"
                        }
                      }}
                    >
                      {/* Check Icon Container */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "rgba(21, 101, 216, 0.07)",
                          p: 1,
                          borderRadius: "12px"
                        }}
                      >
                        <CheckCircleIcon sx={{ color: "#1565D8", fontSize: 26 }} />
                      </Box>
                      
                      {/* REVEAL EFFECT APPLIED TO YOUR ORIGINAL TEXT STYLE */}
                      <Typography
                        sx={{
                          fontWeight: "700",
                          lineHeight: 1.5,
                          color: "#1E2A4A",
                          fontSize: { xs: "14px", md: "16px" },
                          whiteSpace: "nowrap", // Holds text clean on one line during sweep animation
                          overflow: "hidden",
                          display: "inline-block",

                          // Horizontal text progressive reveals side-by-side matching the canvas design
                          width: "0%",
                          animation: "textRevealEffect 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
                          animationDelay: `${index * 0.25}s`,
                          
                          "@keyframes textRevealEffect": {
                            "0%": {
                              width: "0%"
                            },
                            "100%": {
                              width: "100%"
                            }
                          }
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default About;