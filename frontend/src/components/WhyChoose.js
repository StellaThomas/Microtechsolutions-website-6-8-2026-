// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Box
// } from "@mui/material";

// import {
//   WorkspacePremium,
//   SupportAgent,
//   Speed,
//   Security
// } from "@mui/icons-material";

// function WhyChoose() {

//   const data = [
//     {
//       icon:<WorkspacePremium sx={{fontSize:60,color:"#2C4B9B"}} />,
//       title:"Professional Team",
//       desc:"Experienced developers and designers delivering quality solutions."
//     },

//     {
//       icon:<SupportAgent sx={{fontSize:60,color:"#2C4B9B"}} />,
//       title:"24/7 Support",
//       desc:"We provide reliable customer support anytime you need help."
//     },

//     {
//       icon:<Speed sx={{fontSize:60,color:"#2C4B9B"}} />,
//       title:"Fast Delivery",
//       desc:"Quick project delivery with modern technologies and workflows."
//     },

//     {
//       icon:<Security sx={{fontSize:60,color:"#2C4B9B"}} />,
//       title:"Secure Solutions",
//       desc:"We build secure and scalable applications for businesses."
//     }
//   ];

//   return (
//     <Box sx={{background:"#f5f7fb",py:12}}>

//       <Container>

//         <Typography
//           variant="h3"
//           textAlign="center"
//           fontWeight="bold"
//           color="#2C4B9B"
//           mb={6}
//         >
//           Why Choose Us
//         </Typography>

//         <Grid container spacing={4}>

//           {data.map((item,index)=>(

//             <Grid item xs={12} md={3} key={index}>

//               <Card
//                 sx={{
//                   p:4,
//                   borderRadius:"20px",
//                   textAlign:"center",
//                   transition:"0.4s",
//                   "&:hover":{
//                     transform:"translateY(-10px)"
//                   }
//                 }}
//               >

//                 <CardContent>

//                   {item.icon}

//                   <Typography
//                     variant="h5"
//                     fontWeight="bold"
//                     mt={3}
//                     mb={2}
//                   >
//                     {item.title}
//                   </Typography>

//                   <Typography color="gray">
//                     {item.desc}
//                   </Typography>

//                 </CardContent>

//               </Card>

//             </Grid>

//           ))}

//         </Grid>

//       </Container>

//     </Box>
//   );
// }

// export default WhyChoose;





























import {
  Container,
  Typography,
  Card,
  CardContent,
  Box
} from "@mui/material";

import {
  WorkspacePremium,
  Speed,
  Security,
  RocketLaunch
} from "@mui/icons-material";

function WhyChoose() {
  const data = [

  {
    icon: <WorkspacePremium sx={{ fontSize: 30 }} />,
    title: "Professional Team",
    desc: "Experienced & skilled developers for modern business solutions."
  },

  {
    icon: <Speed sx={{ fontSize: 30 }} />,
    title: "Timely Delivery",
    desc: "High-quality work delivered on time with complete reliability."
  },

  {
    icon: <Security sx={{ fontSize: 30 }} />,
    title: "Secure Services",
    desc: "Fast, reliable & highly secure applications for enterprises."
  },

  {
    icon: <RocketLaunch sx={{ fontSize: 30 }} />,
    title: "Client Satisfaction",
    desc: "Focused on delivering 100% customer satisfaction and support."
  }

];

  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(to bottom, #F5F9FF, #ffffff)",
        width: "100%",
        overflow: "hidden"
      }}
    >
      {/* Locked max-width to xl with strict mirroring responsive gutters */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        {/* SMALL TOP TITLE */}
        <Typography
          sx={{
            textAlign: "center",
            color: "#1565D8",
            textTransform: "uppercase",
            letterSpacing: "3px",
            fontWeight: "700",
            mb: 1,
            fontSize: "11px"
          }}
        >
          WHY BUSINESSES TRUST US
        </Typography>

        {/* MAIN HEADING */}
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "800",
            color: "#081B4B",
            mb: 6,
            fontSize: {
              xs: "24px",
              md: "32px"
            }
          }}
        >
          Why Choose Us
        </Typography>

        {/* NATIVE CSS GRID SYSTEM */}
        {/* Completely isolates card containers to maintain flawless symmetry on all screen spaces */}
        <Box
          sx={{
            display: "grid",
           gap: "18px",
            gridTemplateColumns: {
              xs: "1fr",                          // Mobile: 1 Stacked Card
              sm: "repeat(2, minmax(0, 1fr))",    // Tablets: Balanced 2x2 grid matrix
             md: "repeat(4, 270px)"     // High-Res Screens: Perfectly uniform 4-column line
            },
            alignItems: "stretch"                 // Enforces cards to match each other's height
          }}
        >
          {data.map((item, index) => (
            <Card
              key={index}
              sx={{
               borderRadius: "18px",
                background: "#fff",
                textAlign: "center",
                width: "100%",
                boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                border: "1px solid rgba(21,101,216,0.08)",
                position: "relative",
                overflow: "hidden",
                transition: "0.4s",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 16px 30px rgba(21,101,216,0.12)"
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
p: { xs: 2.5, md: 3 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyItems: "center",
                  flexGrow: 1
                }}
              >
                {/* ICON */}
                <Box
                  sx={{
                   width: 52,
height: 52,
                    borderRadius: "16px",
                    background: "linear-gradient(to bottom right, #EAF3FF, #F4FFE8)",
                    display: "flex",
                    alignItems: "center",
                   justifyItems: "center",
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
                    mb: 1,
                    fontSize: "15px"
                  }}
                >
                  {item.title}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  sx={{
                    color: "#5B6575",
                    fontSize: "12px",
                    lineHeight: 1.7
                  }}
                >
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default WhyChoose;