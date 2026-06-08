// import {
//   AppBar,
//   Toolbar,
//   Button,
//   Box,
//   Container
// } from "@mui/material";

// import logo from "../assets/logo.png";

// function Navbar() {

//   return (

//     <AppBar
//       position="fixed"
//       elevation={0}
//       sx={{

//         background: "rgba(255,255,255,0.96)",

//         backdropFilter: "blur(8px)",

//         borderBottom: "1px solid #e5e7eb"
//       }}
//     >

//       <Container maxWidth="xl">

//         <Toolbar
//           sx={{

//             display: "flex",

//             justifyContent: "space-between",

//             alignItems: "center",

//             minHeight: {
//               xs: "60px",
//               md: "68px"
//             },

//             px: "0px !important"
//           }}
//         >

//           {/* LOGO */}

//           <Box
//             component="img"
//             src={logo}
//             alt="logo"
//             sx={{

//               width: {
//                 xs: 140,
//                 md: 190
//               },

//               objectFit: "contain"
//             }}
//           />

//           {/* MENU */}

//           <Box
//             sx={{

//               display: "flex",

//               alignItems: "center",

//               gap: {
//                 xs: 0.5,
//                 md: 1
//               }
//             }}
//           >

//             {[
//               "Home",
//               "About",
//               "Services",
//               "Team",
//               "Contact"
//             ].map((item, index) => (

//               <Button
//                 key={index}
//                 href={`#${item.toLowerCase()}`}
//                 sx={{

//                   color: "#1565D8",

//                   fontWeight: "600",

//                   fontSize: {
//                     xs: "12px",
//                     md: "15px"
//                   },

//                   textTransform: "uppercase",

//                   minWidth: "auto",

//                   px: {
//                     xs: 1,
//                     md: 1.5
//                   },

//                   transition: "0.3s",

//                   "&:hover": {

//                     color: "#8BC53F",

//                     background: "transparent"
//                   }
//                 }}
//               >
//                 {item}
//               </Button>

//             ))}

//           </Box>

//         </Toolbar>

//       </Container>

//     </AppBar>

//   );
// }

// export default Navbar;






























// import {
//   AppBar,
//   Toolbar,
//   Button,
//   Box,
//   Container
// } from "@mui/material";

// import logo from "../assets/logo.png";

// function Navbar() {

//   const menuItems = [
//     { name: "Home", link: "#home" },
//     { name: "About", link: "#about" },
//     { name: "Services", link: "#services" },
//     { name: "Partners", link: "#partners" },
//     { name: "Contact", link: "#contact" }
//   ];

//   return (

//     <AppBar
//       position="fixed"
//       elevation={0}
//       sx={{

//         background:
//           "rgba(255,255,255,0.92)",

//         backdropFilter: "blur(12px)",

//         borderBottom:
//           "1px solid rgba(0,0,0,0.06)",

//         boxShadow:
//           "0 4px 20px rgba(0,0,0,0.04)"
//       }}
//     >

//       <Container maxWidth="xl">

//         <Toolbar
//           sx={{

//             display: "flex",

//             justifyContent: "space-between",

//             alignItems: "center",

//             minHeight: {
//               xs: "65px",
//               md: "72px"
//             },

//             px: "0px !important"
//           }}
//         >

//           {/* LOGO */}

//           <Box
//             component="a"
//             href="#home"
//             sx={{

//               display: "flex",

//               alignItems: "center"
//             }}
//           >

//             <Box
//               component="img"
//               src={logo}
//               alt="logo"
//               sx={{

//                 width: {
//                   xs: 145,
//                   md: 220
//                 },

//                 objectFit: "contain",

//                 cursor: "pointer",

//                 transition: "0.4s ease",

//                 "&:hover": {

//                   transform: "scale(1.03)"
//                 }
//               }}
//             />

//           </Box>

//           {/* MENU */}

//           <Box
//             sx={{

//               display: "flex",

//               alignItems: "center",

//               gap: {
//                 xs: 0.5,
//                 md: 1.2
//               }
//             }}
//           >

//             {menuItems.map((item, index) => (

//               <Button
//                 key={index}

//                 href={item.link}

//                 sx={{

//                   position: "relative",

//                   color: "#1565D8",

//                   fontWeight: "700",

//                   letterSpacing: "0.5px",

//                   fontSize: {
//                     xs: "11px",
//                     md: "14px"
//                   },

//                   textTransform: "uppercase",

//                   minWidth: "auto",

//                   px: {
//                     xs: 1,
//                     md: 1.8
//                   },

//                   py: 1,

//                   borderRadius: "10px",

//                   transition: "all 0.35s ease",

//                   "&::after": {

//                     content: '""',

//                     position: "absolute",

//                     left: "50%",

//                     bottom: 4,

//                     width: "0%",

//                     height: "3px",

//                     background:
//                       "linear-gradient(to right,#1565D8,#8BC53F)",

//                     borderRadius: "20px",

//                     transform: "translateX(-50%)",

//                     transition: "0.4s ease"
//                   },

//                   "&:hover": {

//                     color: "#081B4B",

//                     background:
//                       "rgba(21,101,216,0.05)",

//                     transform: "translateY(-2px)"
//                   },

//                   "&:hover::after": {

//                     width: "70%"
//                   }
//                 }}
//               >

//                 {item.name}

//               </Button>

//             ))}

//           </Box>

//         </Toolbar>

//       </Container>

//     </AppBar>

//   );
// }

// export default Navbar;




















// import {
//   AppBar,
//   Toolbar,
//   Button,
//   Box,
//   Container
// } from "@mui/material";

// import { Link } from "react-router-dom";

// import logo from "../assets/logo.png";

// function Navbar() {

//   return (

//     <AppBar
//       position="fixed"
//       elevation={0}
//       sx={{

//         background:
//           "rgba(255,255,255,0.92)",

//         backdropFilter: "blur(12px)",

//         borderBottom:
//           "1px solid rgba(0,0,0,0.06)",

//         boxShadow:
//           "0 4px 20px rgba(0,0,0,0.04)"
//       }}
//     >

//       <Container maxWidth="xl">

//         <Toolbar
//           sx={{

//             display: "flex",

//             justifyContent: "space-between",

//             alignItems: "center",

//             minHeight: {
//               xs: "65px",
//               md: "72px"
//             },

//             px: "0px !important"
//           }}
//         >

//           {/* LOGO */}

//           <Box
//             component={Link}
//             to="/"
//             sx={{

//               display: "flex",

//               alignItems: "center",

//               textDecoration: "none"
//             }}
//           >

//             <Box
//               component="img"
//               src={logo}
//               alt="logo"
//               sx={{

//                 width: {
//                   xs: 145,
//                   md: 220
//                 },

//                 objectFit: "contain",

//                 cursor: "pointer",

//                 transition: "0.4s ease",

//                 "&:hover": {

//                   transform: "scale(1.03)"
//                 }
//               }}
//             />

//           </Box>

//           {/* MENU */}

//           <Box
//             sx={{

//               display: "flex",

//               alignItems: "center",

//               gap: {
//                 xs: 0.5,
//                 md: 1.2
//               }
//             }}
//           >

//             {/* HOME */}

//             <Button
//               component="a"
//               href="/"
//               sx={buttonStyle}
//             >
//               Home
//             </Button>

//             {/* ABOUT */}

//             <Button
//               component={Link}
//               to="/about"
//               sx={buttonStyle}
//             >
//               About
//             </Button>

//             {/* SERVICES */}

//             <Button
//               component="a"
//               href="/#services"
//               sx={buttonStyle}
//             >
//               Services
//             </Button>

//             {/* PARTNERS */}

//             <Button
//               component="a"
//               href="/#partners"
//               sx={buttonStyle}
//             >
//               Partners
//             </Button>

//             {/* CONTACT */}

//             <Button
//               component="a"
//               href="/#contact"
//               sx={buttonStyle}
//             >
//               Contact
//             </Button>

//           </Box>

//         </Toolbar>

//       </Container>

//     </AppBar>

//   );
// }

// /* BUTTON STYLE */

// const buttonStyle = {

//   position: "relative",

//   color: "#1565D8",

//   fontWeight: "700",

//   letterSpacing: "0.5px",

//   fontSize: {
//     xs: "11px",
//     md: "14px"
//   },

//   textTransform: "uppercase",

//   minWidth: "auto",

//   px: {
//     xs: 1,
//     md: 1.8
//   },

//   py: 1,

//   borderRadius: "10px",

//   transition: "all 0.35s ease",

//   "&::after": {

//     content: '""',

//     position: "absolute",

//     left: "50%",

//     bottom: 4,

//     width: "0%",

//     height: "3px",

//     background:
//       "linear-gradient(to right,#1565D8,#8BC53F)",

//     borderRadius: "20px",

//     transform: "translateX(-50%)",

//     transition: "0.4s ease"
//   },

//   "&:hover": {

//     color: "#081B4B",

//     background:
//       "rgba(21,101,216,0.05)",

//     transform: "translateY(-2px)"
//   },

//   "&:hover::after": {

//     width: "70%"
//   }
// };

// export default Navbar;

































import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const menuItems = [
    {
      label: "Home",
      href: "/#home",
      type: "anchor",
    },
    {
      label: "About",
      to: "/about",
      type: "link",
    },
    {
      label: "Services",
      href: "/#services",
      type: "anchor",
    },
    {
      label: "Partners",
      href: "/#partners",
      type: "anchor",
    },
    {
      label: "Contact",
      to: "/contact",
      type: "link",
    },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              minHeight: {
                xs: "65px",
                md: "72px",
              },

              px: "0px !important",
            }}
          >
            {/* LOGO */}

            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="logo"
                sx={{
                  width: {
                    xs: 130,
                    sm: 160,
                    md: 220,
                  },

                  objectFit: "contain",

                  cursor: "pointer",

                  transition: "0.4s ease",

                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              />
            </Box>

            {/* DESKTOP MENU */}

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },

                alignItems: "center",

                gap: 1.2,
              }}
            >
              <Button
                component="a"
                href="/#home"
                sx={buttonStyle}
              >
                Home
              </Button>

              <Button
                component={Link}
                to="/about"
                sx={buttonStyle}
              >
                About
              </Button>

              <Button
                component="a"
                href="/#services"
                sx={buttonStyle}
              >
                Services
              </Button>

              <Button
                component="a"
                href="/#partners"
                sx={buttonStyle}
              >
                Partners
              </Button>

              <Button
                component={Link}
                to="/contact"
                sx={buttonStyle}
              >
                Contact
              </Button>
            </Box>

            {/* MOBILE MENU BUTTON */}

            <IconButton
              onClick={() => setOpenDrawer(true)}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },

                color: "#1565D8",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          sx={{
            width: 260,
            pt: 3,
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.label}
                disablePadding
              >
                {item.type === "link" ? (
                  <ListItemButton
                    component={Link}
                    to={item.to}
                    onClick={() =>
                      setOpenDrawer(false)
                    }
                  >
                    <ListItemText
                      primary={item.label}
                    />
                  </ListItemButton>
                ) : (
                  <ListItemButton
                    component="a"
                    href={item.href}
                    onClick={() =>
                      setOpenDrawer(false)
                    }
                  >
                    <ListItemText
                      primary={item.label}
                    />
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

const buttonStyle = {
  position: "relative",

  color: "#1565D8",

  fontWeight: "700",

  letterSpacing: "0.5px",

  fontSize: "14px",

  textTransform: "uppercase",

  minWidth: "auto",

  px: 1.8,

  py: 1,

  borderRadius: "10px",

  transition: "all 0.35s ease",

  "&::after": {
    content: '""',

    position: "absolute",

    left: "50%",

    bottom: 4,

    width: "0%",

    height: "3px",

    background:
      "linear-gradient(to right,#1565D8,#8BC53F)",

    borderRadius: "20px",

    transform: "translateX(-50%)",

    transition: "0.4s ease",
  },

  "&:hover": {
    color: "#081B4B",

    background: "rgba(21,101,216,0.05)",

    transform: "translateY(-2px)",
  },

  "&:hover::after": {
    width: "70%",
  },
};

export default Navbar;