// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Paper
// } from "@mui/material";

// function Contact() {

//   return (
//   <Box
//   id="contact"
//   sx={{

//     background:
//       "linear-gradient(to bottom,#F5F9FF,#ffffff)",

//     py: {
//       xs: 8,
//       md: 12
//     }
//   }}
// >

//       <Container maxWidth="md">

//         <Typography
//           variant="h3"
//           textAlign="center"
//           fontWeight="bold"
//           color="#2C4B9B"
//           mb={6}
//         >
//           Contact Us
//         </Typography>

//         <Paper
//           elevation={4}
//           sx={{
//             p:5,
//             borderRadius:"20px"
//           }}
//         >

//           <Box
//             component="form"
//             sx={{
//               display:"flex",
//               flexDirection:"column",
//               gap:3
//             }}
//           >

//             <TextField
//               label="Your Name"
//               fullWidth
//             />

//             <TextField
//               label="Your Email"
//               fullWidth
//             />

//             <TextField
//               label="Your Message"
//               multiline
//               rows={5}
//               fullWidth
//             />

//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 background:"#2C4B9B",
//                 py:2,
//                 borderRadius:"12px"
//               }}
//             >
//               Send Message
//             </Button>

//           </Box>

//         </Paper>

//       </Container>

//     </Box>
//   );
// }

// export default Contact;


















// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Paper
// } from "@mui/material";

// function Contact() {

//   return (

//     <Box
//       id="contact"
//       sx={{
//         py: 10,
//         background:"#F5F9FF"
//       }}
//     >

//       <Container maxWidth="sm">

//         <Typography
//           sx={{

//             textAlign:"center",

//             fontWeight:"800",

//             color:"#081B4B",

//             mb:4,

//             fontSize:{
//               xs:"32px",
//               md:"42px"
//             }
//           }}
//         >
//           Quick Contact
//         </Typography>

//         <Paper
//           sx={{

//             p:4,

//             borderRadius:"24px"
//           }}
//         >

//           <Box
//             sx={{
//               display:"flex",
//               flexDirection:"column",
//               gap:2.5
//             }}
//           >

//             <TextField
//               label="Your Name"
//               size="small"
//               fullWidth
//             />

//             <TextField
//               label="Your Email"
//               size="small"
//               fullWidth
//             />

//             <TextField
//               label="Message"
//               multiline
//               rows={3}
//               fullWidth
//             />

//             <Button
//               variant="contained"
//               sx={{

//                 py:1.5,

//                 borderRadius:"12px",

//                 fontWeight:"700",

//                 background:
//                   "linear-gradient(to right,#1565D8,#0D47A1)"
//               }}
//             >
//               Send Message
//             </Button>

//           </Box>

//         </Paper>

//       </Container>

//     </Box>
//   );
// }

// export default Contact;



















































// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Paper
// } from "@mui/material";

// function Contact() {

//   return (

//     <Box
//       id="contact"
//       sx={{
//         py: 10,
//         background: "#F5F9FF"
//       }}
//     >

//       <Container maxWidth="sm">

//         <Typography
//           sx={{
//             textAlign: "center",
//             fontWeight: "800",
//             color: "#081B4B",
//             mb: 4,
//             fontSize: {
//               xs: "32px",
//               md: "42px"
//             }
//           }}
//         >
//           Quick Contact
//         </Typography>

//         <Paper
//           elevation={4}
//           sx={{
//             p: 4,
//             borderRadius: "24px"
//           }}
//         >

//           <Box
//             component="form"
//             action="https://formsubmit.co/microtechit@yahoo.com"
//             method="POST"
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 2.5
//             }}
//           >

//             {/* Disable captcha */}
//             <input
//               type="hidden"
//               name="_captcha"
//               value="false"
//             />

//             {/* Success page */}
//             <input
//               type="hidden"
//               name="_subject"
//               value="New Contact Form Message"
//             />

//             <TextField
//               label="Your Name"
//               name="name"
//               size="small"
//               fullWidth
//               required
//             />

//             <TextField
//               label="Your Email"
//               name="email"
//               type="email"
//               size="small"
//               fullWidth
//               required
//             />

//             <TextField
//               label="Message"
//               name="message"
//               multiline
//               rows={3}
//               fullWidth
//               required
//             />

//             <Button
//               type="submit"
//               variant="contained"
//               sx={{
//                 py: 1.5,
//                 borderRadius: "12px",
//                 fontWeight: "700",
//                 background:
//                   "linear-gradient(to right,#1565D8,#0D47A1)"
//               }}
//             >
//               Send Message
//             </Button>

//           </Box>

//         </Paper>

//       </Container>

//     </Box>
//   );
// }

// export default Contact;










// import { useState } from "react";
// import emailjs from "@emailjs/browser";

// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Paper
// } from "@mui/material";

// function Contact() {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_oyl0asu", // Your Service ID
//         "template_k4retgw", // Your Template ID
//         {
//           title: "Quick Contact Form",
//           name: formData.name,
//           email: formData.email,
//           message: formData.message
//         },
//         "4yZNgfihw8KfM5ty5" // Your Public Key
//       )
//       .then(() => {
//         alert("Message Sent Successfully!");

//         setFormData({
//           name: "",
//           email: "",
//           message: ""
//         });
//       })
//       .catch((error) => {
//         console.log("Email Error:", error);
//         alert("Failed to Send Message");
//       });
//   };

//   return (
//     <Box
//       id="contact"
//       sx={{
//         py: 10,
//         background: "#F5F9FF"
//       }}
//     >
//       <Container maxWidth="sm">

//         <Typography
//           sx={{
//             textAlign: "center",
//             fontWeight: "800",
//             color: "#081B4B",
//             mb: 4,
//             fontSize: {
//               xs: "32px",
//               md: "42px"
//             }
//           }}
//         >
//           Quick Contact
//         </Typography>

//         <Paper
//           elevation={4}
//           sx={{
//             p: 4,
//             borderRadius: "24px"
//           }}
//         >
//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 2.5
//             }}
//           >

//             <TextField
//               label="Your Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               size="small"
//               fullWidth
//               required
//             />

//             <TextField
//               label="Your Email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               size="small"
//               fullWidth
//               required
//             />

//             <TextField
//               label="Message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               multiline
//               rows={3}
//               fullWidth
//               required
//             />

//             <Button
//               type="submit"
//               variant="contained"
//               sx={{
//                 py: 1.5,
//                 borderRadius: "12px",
//                 fontWeight: "700",
//                 background:
//                   "linear-gradient(to right,#1565D8,#0D47A1)"
//               }}
//             >
//               Send Message
//             </Button>

//           </Box>
//         </Paper>

//       </Container>
//     </Box>
//   );
// }

// export default Contact;













import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  CircularProgress
} from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
          title: "Quick Contact Form",
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        "4yZNgfihw8KfM5ty5"
      )
      .then(() => {
        toast.success("Message Sent Successfully!");

        setFormData({
          name: "",
          email: "",
          message: ""
        });

        setLoading(false);
      })
      .catch((error) => {
        console.log("Email Error:", error);

        toast.error("Failed To Send Message");

        setLoading(false);
      });
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        background: "#F5F9FF"
      }}
    >
      <Container maxWidth="sm">
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "800",
            color: "#081B4B",
            mb: 4,
            fontSize: {
              xs: "32px",
              md: "42px"
            }
          }}
        >
          Quick Contact
        </Typography>

        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: "24px"
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2.5
            }}
          >
            <TextField
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              size="small"
              fullWidth
              required
            />

            <TextField
              label="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              size="small"
              fullWidth
              required
            />

            <TextField
              label="Message"
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
                py: 1.5,
                borderRadius: "12px",
                fontWeight: "700",
                background:
                  "linear-gradient(to right,#1565D8,#0D47A1)"
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
      </Container>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </Box>
  );
}

export default Contact;