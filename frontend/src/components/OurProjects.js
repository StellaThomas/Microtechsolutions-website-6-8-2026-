import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Dialog,
} from "@mui/material";

import master from "../assets/projects/Master.png";
import transaction from "../assets/projects/Transaction.png";
import report from "../assets/projects/Report.png";
import setting from "../assets/projects/Setting.png";

import Dashboard from "../assets/projects/Dashboard.png";
import Analysis from "../assets/projects/Analysis.png";
import Map from "../assets/projects/Map.png";
import Notification from "../assets/projects/Notification.png";


import YalgudLogo from "../assets/projects/YalgudLogo.png";
import YalgudHome from "../assets/projects/YalgudHome.png";
import ProductList from "../assets/projects/ProductList.png";
import Checkout from "../assets/projects/Checkout.png";


import GBNLogin from "../assets/projects/GBNLogin.png";
import GBNwebsitestudio from "../assets/projects/GBNwebsitestudio.png";
import GBNNetwork from "../assets/projects/GBNNetwork.png";
import GBNMember from "../assets/projects/GBNMember.png"; 


const aarohanProjects = [
  { image: master },
  { image: transaction },
  { image: report },
  { image: setting },
];

const yalgudProjects = [
  { image: Dashboard },
  { image: Analysis },
  { image: Map },
  { image: Notification },
];

const yalgudMobileProjects = [
    { image: YalgudLogo },
    { image: YalgudHome },
    { image: ProductList },
    { image: Checkout },
];

const gbnProjects = [
    { image: GBNLogin },
    { image: GBNwebsitestudio },
    { image: GBNNetwork },
    { image: GBNMember },
];

function OurProjects() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Box
  sx={{
    py: {
      xs: 6,
      md: 8
    },
    background: "#ffffff",
    minHeight: "100vh",
  }}
>
<Container
  maxWidth="xl"
  sx={{
    px: {
      xs: 2,
      sm: 3,
      md: 4
    }
  }}
>

        {/* Main Heading */}

        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 800,
            color: "#081B4B",
fontSize: {
  xs: "28px",
  sm: "38px",
  md: "50px",
}
            
          }}
        >
          Our Projects
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#666",
            mb: 8,
            fontSize: "16px",
          }}
        >
          Software Solutions Developed By Microtech Solutions
        </Typography>

        {/* Aarohan Agro */}

        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "#081B4B",
           fontSize: {
  xs: "24px",
  sm: "28px",
  md: "32px"
},
            mb: 4,
          }}
        >
          Aarohan Agro
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
            mb: 8,
          }}
        >
          {aarohanProjects.map((project, index) => (
            <Box
              key={index}
              component="img"
              src={project.image}
              alt=""
              onClick={() => setSelectedImage(project.image)}
              sx={{
  width: {
    xs: "100%",
    sm: "260px"
  },

  maxWidth: "260px",

  height: {
    xs: "200px",
    sm: "160px"
  },

  objectFit: "cover",
                cursor: "pointer",
                borderRadius: "12px",
                border: "2px solid #E5EAF2",
                boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
                transition: "0.3s",

                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          ))}
        </Box>

        {/* Yalgud Admin Dashboard */}

        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "#081B4B",
fontSize: {
  xs: "24px",
  sm: "28px",
  md: "32px"
},
            mb: 4,
          }}
        >
          Yalgud Admin Dashboard
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          {yalgudProjects.map((project, index) => (
            <Box
              key={index}
              component="img"
              src={project.image}
              alt=""
              onClick={() => setSelectedImage(project.image)}
              sx={{
               width: {
  xs: "100%",
  sm: "260px"
},

maxWidth: "260px",

height: {
  xs: "200px",
  sm: "160px"
},
                objectFit: "cover",
                cursor: "pointer",
                borderRadius: "12px",
                border: "2px solid #E5EAF2",
                boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
                transition: "0.3s",

                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          ))}
        </Box>

       

        {/* Yalgud Mobile App */}

<Typography
  sx={{
    textAlign: "center",
    fontWeight: 700,
    color: "#081B4B",
    fontSize: {
      xs: "24px",
      sm: "28px",
      md: "32px"
    },
    mb: 4,
    mt: 8,
  }}
>
  Yalgud Mobile App(OMS)
</Typography>

<Box
  sx={{
    display: "flex",
    justifyContent: "center",
    gap: 3,
    flexWrap: "wrap",
    mb: 8,
  }}
>
  {yalgudMobileProjects.map((project, index) => (
    <Box
      key={index}
      component="img"
      src={project.image}
      alt=""
      onClick={() => setSelectedImage(project.image)}
      sx={{
       width: {
  xs: "160px",
  sm: "220px"
},

height: {
  xs: "320px",
  sm: "420px"
},
        objectFit: "contain",
        cursor: "pointer",
        borderRadius: "12px",
        border: "2px solid #E5EAF2",
        background: "#fff",
        boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
        transition: "0.3s",

        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    />
  ))}
</Box>






{/* GBN Business Network */}
{/* GBN Business Network */}

<Typography
  sx={{
    textAlign: "center",
    fontWeight: 700,
    color: "#081B4B",
    fontSize: {
      xs: "24px",
      sm: "28px",
      md: "32px"
    },
    mb: 4,
    mt: 8,
  }}
>
  GBN (Grow Business Network)
</Typography>

<Box
  sx={{
    display: "flex",
    justifyContent: "center",
    gap: 3,
    flexWrap: "wrap",
    mb: 8,
  }}
>
  {gbnProjects.map((project, index) => (
    <Box
      key={index}
      component="img"
      src={project.image}
      alt=""
      onClick={() => setSelectedImage(project.image)}
      sx={{
      width: {
  xs: "160px",
  sm: "220px"
},

height: {
  xs: "320px",
  sm: "420px"
},
        objectFit: "contain",
        cursor: "pointer",
        borderRadius: "12px",
        border: "2px solid #E5EAF2",
        background: "#fff",
        boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
        transition: "0.3s",

        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    />
  ))}
</Box>




    {/* Image Popup */}
 
        <Dialog
  open={Boolean(selectedImage)}
  onClose={() => setSelectedImage(null)}
  maxWidth="xl"
  fullWidth
>
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt="preview"
              sx={{
  width: "100%",
  maxWidth: {
    xs: "95vw",
    md: "1200px"
  },
  height: "auto",
}}
            />
          )}
        </Dialog>

      </Container>
    </Box>
  );
}

export default OurProjects;