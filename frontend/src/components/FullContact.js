// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Paper,
//   Grid,
//   IconButton
// } from "@mui/material";

// import {
//   LinkedIn,
//   Instagram,
//   Facebook,
//   LocationOn,
//   Email,
//   Phone
// } from "@mui/icons-material";

// function FullContact() {

//   return (

//     <Box
//       sx={{

//         background:
//           "linear-gradient(to bottom,#F5F9FF,#ffffff)",

//         py: 14
//       }}
//     >

//       <Container maxWidth="lg">

//         <Typography
//           sx={{

//             textAlign: "center",

//             fontWeight: "900",

//             color: "#081B4B",

//             mb: 6,

//             fontSize: {
//               xs: "36px",
//               md: "52px"
//             }
//           }}
//         >
//           Contact Us
//         </Typography>

//         <Grid container spacing={4}>

//           {/* LEFT */}

//           <Grid item xs={12} md={5}>

//             <Paper
//               sx={{

//                 p: 5,

//                 borderRadius: "30px",

//                 background:
//                   "linear-gradient(135deg,#1565D8,#0D47A1)",

//                 color: "#ffffff",

//                 height: "100%"
//               }}
//             >

//               <Typography
//                 sx={{

//                   fontWeight: "900",

//                   mb: 5,

//                   fontSize: "45px"
//                 }}
//               >
//                 Get In Touch
//               </Typography>

//               <Box sx={{display:"flex",gap:2,mb:4}}>

//                 <LocationOn />

//                 <Typography>
//                   Mahalaxmi Pride,
//                   6th Lane,
//                   Rajarampuri,
//                   Kolhapur
//                 </Typography>

//               </Box>

//               <Box sx={{display:"flex",gap:2,mb:4}}>

//                 <Email />

//                 <Typography>
//                   microtechsolutions@gmail.com
//                 </Typography>

//               </Box>

//               <Box sx={{display:"flex",gap:2,mb:5}}>

//                 <Phone />

//                 <Typography>
//                   +91 9876543210
//                 </Typography>

//               </Box>

//               <Box sx={{display:"flex",gap:2}}>

//                 <IconButton
//                   sx={{
//                     background:"rgba(255,255,255,0.15)",
//                     color:"#fff"
//                   }}
//                 >
//                   <LinkedIn />
//                 </IconButton>

//                 <IconButton
//                   sx={{
//                     background:"rgba(255,255,255,0.15)",
//                     color:"#fff"
//                   }}
//                 >
//                   <Instagram />
//                 </IconButton>

//                 <IconButton
//                   sx={{
//                     background:"rgba(255,255,255,0.15)",
//                     color:"#fff"
//                   }}
//                 >
//                   <Facebook />
//                 </IconButton>

//               </Box>

//             </Paper>

//           </Grid>

//           {/* RIGHT */}

//           <Grid item xs={12} md={7}>

//             <Paper
//               sx={{

//                 p: 5,

//                 borderRadius: "30px"
//               }}
//             >

//               <Box
//                 sx={{
//                   display:"flex",
//                   flexDirection:"column",
//                   gap:3
//                 }}
//               >

//                 <TextField
//                   label="Your Name"
//                   fullWidth
//                 />

//                 <TextField
//                   label="Your Email"
//                   fullWidth
//                 />

//                 <TextField
//                   label="Your Message"
//                   multiline
//                   rows={5}
//                   fullWidth
//                 />

//                 <Button
//                   variant="contained"
//                   sx={{

//                     py: 2,

//                     borderRadius:"14px",

//                     fontWeight:"700",

//                     fontSize:"16px",

//                     background:
//                       "linear-gradient(to right,#1565D8,#0D47A1)"
//                   }}
//                 >
//                   Send Message
//                 </Button>

//               </Box>

//             </Paper>

//           </Grid>

//         </Grid>

//         {/* MAP */}

//         <Box sx={{mt:6}}>

//           <Paper
//             sx={{
//               borderRadius:"30px",
//               overflow:"hidden"
//             }}
//           >

//             <iframe
//               title="map"
//               src="https://www.google.com/maps?q=Rajarampuri+Kolhapur&output=embed"
//               width="100%"
//               height="350"
//               style={{border:0}}
//               loading="lazy"
//             />

//           </Paper>

//         </Box>

//       </Container>

//     </Box>
//   );
// }

// export default FullContact;





































import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Grid,
  IconButton,
  CircularProgress
} from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  LinkedIn,
  Instagram,
  Facebook,
  LocationOn,
  Email,
  Phone
} from "@mui/icons-material";

function FullContact() {

const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  setLoading(true);

  emailjs
    .send(
      "service_oyl0asu",
      "template_k4retgw",
      {
        title: "Website Contact Form",
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "4yZNgfihw8KfM5ty5"
    )
    .then(() => {

      toast.success("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setLoading(false);
    })
    .catch((error) => {

      console.log(error);

      toast.error("Failed To Send Message");

      setLoading(false);
    });
};
   

  return (

    <Box
      sx={{

        background:
          "linear-gradient(to bottom,#F4F8FF,#ffffff)",

        py: {
          xs: 10,
          md: 14
        }
      }}
    >

      <Container maxWidth="xl">

        {/* HEADING */}

        <Typography
          sx={{

            textAlign: "center",

            fontWeight: "900",

            color: "#081B4B",

            mb: 1,

            fontSize: {
              xs: "34px",
              md: "56px"
            }
          }}
        >
          Contact Us
        </Typography>

        <Typography
          sx={{

            textAlign: "center",

            color: "#5B647A",

            mb: 7,

            fontSize: {
              xs: "15px",
              md: "18px"
            }
          }}
        >
          Let's discuss your software ideas and digital solutions.
        </Typography>

        <Grid
          container
          spacing={4}
          alignItems="stretch"
        >

          {/* LEFT SIDE */}

         <Grid item xs={12} md={4}>

            <Paper
              elevation={0}
              sx={{

             p: {
  xs: 3,
  md: 4
},

                borderRadius: "32px",

                background:
                  "linear-gradient(135deg,#1565D8,#0D47A1)",

                color: "#ffffff",

                height: "100%",

                boxShadow:
                  "0 15px 40px rgba(21,101,216,0.25)"
              }}
            >

              <Typography
                sx={{

                  fontWeight: "900",

                  mb: 5,

                  lineHeight: 1.1,

                 fontSize: {
  xs: "28px",
  md: "40px"
}
                }}
              >
                Get In Touch
              </Typography>

              {/* LOCATION */}

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mb: 4,
                  alignItems: "flex-start"
                }}
              >

                <LocationOn
                  sx={{
                    fontSize: 32
                  }}
                />

                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: 1.7
                  }}
                >
                  Mahalaxmi Pride,
                  <br />
                  Rajarampuri Lane 6,
                  Takala Side,
                  <br />
                  Kolhapur, Maharashtra, India
                </Typography>

              </Box>

              {/* EMAIL */}

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mb: 4,
                  alignItems: "center"
                }}
              >

                <Email
                  sx={{
                    fontSize: 30
                  }}
                />

                <Typography
                  sx={{
                    fontSize: "15px"
                  }}
                >
                  microtechit@yahoo.com
                </Typography>

              </Box>

              {/* PHONE */}

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mb: 5,
                  alignItems: "center"
                }}
              >

                <Phone
                  sx={{
                    fontSize: 30
                  }}
                />

                <Typography
                  sx={{
                   fontSize: "17px",
                    fontWeight: "700"
                  }}
                >
                  +91 90110 40831
                </Typography>

              </Box>

              {/* SOCIAL ICONS */}

              <Box
                sx={{
                  display: "flex",
                  gap: 2
                }}
              >

                <IconButton
                  component="a"
                  href="https://linkedin.com"
                  target="_blank"
                  sx={{

                    background:
                      "rgba(255,255,255,0.15)",

                    color: "#fff",

                    width: 58,
                    height: 58,

                    transition: "0.4s",

                    "&:hover": {

                      background: "#ffffff",

                      color: "#1565D8",

                      transform: "translateY(-5px)"
                    }
                  }}
                >
                  <LinkedIn />
                </IconButton>

                <IconButton
                  component="a"
                  href="https://instagram.com"
                  target="_blank"
                  sx={{

                    background:
                      "rgba(255,255,255,0.15)",

                    color: "#fff",

                   width: 45,
height: 45,

                    transition: "0.4s",

                    "&:hover": {

                      background: "#ffffff",

                      color: "#1565D8",

                      transform: "translateY(-5px)"
                    }
                  }}
                >
                  <Instagram />
                </IconButton>

                <IconButton
                  component="a"
                  href="https://facebook.com"
                  target="_blank"
                  sx={{

                    background:
                      "rgba(255,255,255,0.15)",

                    color: "#fff",

                    width: 45,
                    height: 45,

                    transition: "0.4s",

                    "&:hover": {

                      background: "#ffffff",

                      color: "#1565D8",

                      transform: "translateY(-5px)"
                    }
                  }}
                >
                  <Facebook />
                </IconButton>

              </Box>

            </Paper>

          </Grid>

          {/* RIGHT SIDE FORM */}

          <Grid item xs={12} md={5}>

            <Paper
              elevation={0}
              sx={{

               p: {
  xs: 3,
  md: 4
},


                borderRadius: "32px",

                background: "#ffffff",

                boxShadow:
                  "0 15px 40px rgba(0,0,0,0.08)"
              }}
            >

              <Typography
                sx={{

                  fontWeight: "800",

                  color: "#081B4B",

                  mb: 4,

                 fontSize: {
  xs: "24px",
  md: "32px"
}
                }}
              >
                Send Message
              </Typography>

              {/* FORM */}

            <Box
  component="form"
  onSubmit={handleSubmit}
                sx={{

                  display: "flex",

                  flexDirection: "column",

                  gap: 3
                }}
              >

             <TextField
  label="Your Name"
  name="name"
  value={formData.name}
  onChange={handleChange}
  fullWidth
  required
/>

               <TextField
  label="Your Email"
  name="email"
  type="email"
  value={formData.email}
  onChange={handleChange}
  fullWidth
  required
/>

               <TextField
  label="Your Message"
  name="message"
  value={formData.message}
  onChange={handleChange}
  multiline
  rows={4}
  fullWidth
  required
/>

               <Button
  type="submit"
  variant="contained"
  disabled={loading}
  sx={{
    py: 2,
    borderRadius: "14px",
    fontWeight: "800",
    fontSize: "14px",
    textTransform: "uppercase",
    background:
      "linear-gradient(to right,#1565D8,#0D47A1)",

    boxShadow:
      "0 10px 25px rgba(21,101,216,0.30)"
  }}
>
  {loading ? (
    <CircularProgress
      size={24}
      color="inherit"
    />
  ) : (
    "Send Message"
  )}
</Button>

              </Box>

            </Paper>

          </Grid>

        </Grid>

        {/* GOOGLE MAP */}

        <Box sx={{ mt: 7 }}>

          <Paper
            elevation={0}
            sx={{

              borderRadius: "32px",

              overflow: "hidden",

              boxShadow:
                "0 15px 40px rgba(0,0,0,0.08)"
            }}
          >

            <iframe
              title="map"
              src="https://www.google.com/maps?q=Mahalaxmi+Pride+Rajarampuri+Lane+6+Takala+Kolhapur+Maharashtra+India&z=17&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
            />

          </Paper>

        </Box>
      </Container>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />

    </Box>
  );
}



export default FullContact;















