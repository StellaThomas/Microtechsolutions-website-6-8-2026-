// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent
// } from "@mui/material";

// import {
//   Language,
//   PhoneAndroid,
//   Apple,
//   DashboardCustomize,
//   MedicalServices,
//   ReceiptLong
// } from "@mui/icons-material";

// function Services() {

//   const services = [

//     {
//       icon: <DashboardCustomize sx={{ fontSize: 38 }} />,
//       title: "ERP Solutions",
//       description:
//         "Enterprise systems for automation, workflow and business productivity."
//     },

//     {
//       icon: <MedicalServices sx={{ fontSize: 38 }} />,
//       title: "PMS Software",
//       description:
//         "Practice management software for clinics and hospitals."
//     },

//     {
//       icon: <ReceiptLong sx={{ fontSize: 38 }} />,
//       title: "Billing Software",
//       description:
//         "GST billing, invoicing and payment management solutions."
//     },

//     {
//       icon: <Language sx={{ fontSize: 38 }} />,
//       title: "Web Development",
//       description:
//         "Modern web applications with secure and scalable architecture."
//     },

//     {
//       icon: <PhoneAndroid sx={{ fontSize: 38 }} />,
//       title: "Android Apps",
//       description:
//         "Smooth Android mobile apps with modern UI and performance."
//     },

//     {
//       icon: <Apple sx={{ fontSize: 38 }} />,
//       title: "iOS Applications",
//       description:
//         "Premium iOS apps designed for Apple devices and businesses."
//     }

//   ];

//   return (

//     <Box
//       id="services"
//       sx={{
//         py: {
//           xs: 8,
//           md: 10
//         },

//         background:
//           "linear-gradient(to bottom,#F5F9FF,#ffffff)"
//       }}
//     >

//  <Container maxWidth="xl">

//         {/* SMALL TITLE */}

//         <Typography
//           sx={{
//             textAlign: "center",

//             color: "#1565D8",

//             textTransform: "uppercase",

//             letterSpacing: "4px",

//             fontWeight: "700",

//             mb: 2,

//             fontSize: {
//               xs: "12px",
//               md: "14px"
//             }
//           }}
//         >
//           Professional Digital Services
//         </Typography>

//         {/* HEADING */}

//         <Typography
//           sx={{
//             textAlign: "center",

//             fontWeight: "900",

//             color: "#081B4B",

//             mb: 7,

//             lineHeight: 1.2,

//             fontSize: {
//               xs: "34px",
//               md: "52px"
//             }
//           }}
//         >
//           Innovative Solutions <br />
//           For Modern Businesses
//         </Typography>

//         {/* SERVICES GRID */}

//      <Grid
//   container
//  spacing={3}
// >

//   {services.map((item, index) => (

//     <Grid
//       item
//       xs={12}
//       sm={6}
//       md={4}
//       key={index}
//     >

//       <Card
//   sx={{

//     width: "100%",

//     height: "100%",

//     borderRadius: "18px",

//     background: "#fff",

//     border:
//       "1px solid rgba(21,101,216,0.08)",

//     boxShadow:
//       "0 6px 18px rgba(0,0,0,0.04)",

//     transition: "0.4s",

//     position: "relative",

//     overflow: "hidden",

//     "&:hover": {

//       transform: "translateY(-8px)",

//       boxShadow:
//         "0 14px 30px rgba(21,101,216,0.12)"
//     },

//     "&::before": {

//       content: '""',

//       position: "absolute",

//       top: 0,

//       left: 0,

//       width: "100%",

//       height: "4px",

//       background:
//         "linear-gradient(to right,#1565D8,#8BC53F)"
//     }
//   }}
// >

//         <CardContent
//           sx={{
// p: 2.2
//           }}
//         >

//           {/* ICON */}

//           <Box
//             sx={{

//              width: 52,
// height: 52,

//               borderRadius: "16px",

//               background:
//                 "linear-gradient(to bottom right,#EAF3FF,#F4FFE8)",

//               display: "flex",

//               alignItems: "center",

//               justifyContent: "center",

//               color: "#1565D8",

//               mb: 2
//             }}
//           >
//             {item.icon}
//           </Box>

//           {/* TITLE */}

//           <Typography
//             sx={{

//               fontWeight: "800",

//               color: "#081B4B",

//               mb: 1.2,

//               lineHeight: 1.3,

//              fontSize: {
//   xs: "17px",
//   md: "15px"
// }
//             }}
//           >
//             {item.title}
//           </Typography>

//           {/* DESCRIPTION */}

//           <Typography
//             sx={{

//               color: "#5B6575",

//              lineHeight: 1.5,

//               fontWeight: "500",

//               fontSize: {
//                 xs: "13px",
//                 md: "13px"
//               }
//             }}
//           >
//             {item.description}
//           </Typography>

//         </CardContent>

//       </Card>

//     </Grid>

//   ))}

// </Grid>

//       </Container>

//     </Box>

//   );
// }

// export default Services;











































import {
  Box,
  Container,
  Typography,
  Card,
  CardContent
} from "@mui/material";

import {
  Language,
  PhoneAndroid,
  Apple,
  DashboardCustomize,
  MedicalServices,
  ReceiptLong
} from "@mui/icons-material";

function Services() {
  const services = [
    {
      icon: <DashboardCustomize sx={{ fontSize: 38 }} />,
      title: "ERP Solutions",
      description:
        "Enterprise systems for automation, workflow and business productivity."
    },
    {
      icon: <MedicalServices sx={{ fontSize: 38 }} />,
      title: "PMS Software",
      description:
        "Practice management software for clinics and hospitals."
    },
    {
      icon: <ReceiptLong sx={{ fontSize: 38 }} />,
      title: "Billing Software",
      description:
        "GST billing, invoicing and payment management solutions."
    },
    {
      icon: <Language sx={{ fontSize: 38 }} />,
      title: "Web Development",
      description:
        "Modern web applications with secure and scalable architecture."
    },
    {
      icon: <PhoneAndroid sx={{ fontSize: 38 }} />,
      title: "Android Apps",
      description:
        "Smooth Android mobile apps with modern UI and performance."
    },
    {
      icon: <Apple sx={{ fontSize: 38 }} />,
      title: "iOS Applications",
      description:
        "Premium iOS apps designed for Apple devices and businesses."
    }
  ];

  return (
    <Box
      id="services"
      sx={{
        py: {
          xs: 8,
          md: 12
        },
        background: "linear-gradient(to bottom, #F5F9FF, #ffffff)",
        width: "100%",
        overflow: "hidden"
      }}
    >
      {/* Container set to 'xl' max-width to ensure plenty of room for 3-wide columns */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6 } }}>
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
              xs: "12px",
              md: "14px"
            }
          }}
        >
          Professional Digital Services
        </Typography>

        {/* HEADING */}
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "900",
            color: "#081B4B",
            mb: 8,
            lineHeight: 1.2,
            fontSize: {
              xs: "34px",
              md: "48px"
            }
          }}
        >
          Innovative Solutions <br />
          For Modern Businesses
        </Typography>

        {/* HARD FORCED NATIVE CSS GRID */}
        {/* This completely bypasses any parent component limits to guarantee 3-across */}
        <Box
          sx={{
            display: "grid",
            gap: { xs: "24px", md: "32px" }, // Perfect uniform gap spacing horizontally & vertically
            gridTemplateColumns: {
              xs: "1fr",                          // Mobile: 1 stacked column
              sm: "repeat(3, minmax(0, 1fr))",    // Tablet: Hard forced 3 columns
              md: "repeat(3, minmax(0, 1fr))"     // Desktop: Hard forced 3 columns
            },
            alignItems: "stretch"                 // Guarantees rows share identical vertical heights
          }}
        >
          {services.map((item, index) => (
            <Card
              key={index}
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: "18px",
                background: "#fff",
                border: "1px solid rgba(21,101,216,0.08)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
                transition: "all 0.4s ease-in-out",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 14px 30px rgba(21,101,216,0.12)"
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  background: "linear-gradient(to right, #1565D8, #8BC53F)"
                }
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 2.5, md: 4 }, 
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {/* ICON */}
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "16px",
                    background: "linear-gradient(to bottom right, #EAF3FF, #F4FFE8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1565D8",
                    mb: 2.5
                  }}
                >
                  {item.icon}
                </Box>

                {/* TITLE */}
                <Typography
                  sx={{
                    fontWeight: "800",
                    color: "#081B4B",
                    mb: 1.5,
                    lineHeight: 1.3,
                    fontSize: {
                      xs: "16px",
                      md: "18px"
                    }
                  }}
                >
                  {item.title}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  sx={{
                    color: "#5B6575",
                    lineHeight: 1.6,
                    fontWeight: "500",
                    fontSize: {
                      xs: "13px",
                      md: "14px"
                    }
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Services;