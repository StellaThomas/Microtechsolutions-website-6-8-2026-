import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box
} from "@mui/material";

function Team() {

  const team = [

    {
      name: "Frontend Developer",
      role: "React JS Developer"
    },

    {
      name: "Backend Developer",
      role: "Node JS Developer"
    },

    {
      name: "Full Stack Developer",
      role: "MERN Stack Developer"
    },

    {
      name: "UI / UX Designer",
      role: "Creative UI Designer"
    }

  ];

  return (

    <Box
      sx={{
        py: 8,

        background:
          "linear-gradient(to bottom,#ffffff,#F5F9FF)"
      }}
      id="team"
    >

      <Container maxWidth="xl">

        {/* SMALL TITLE */}

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
          PROFESSIONAL TEAM
        </Typography>

        {/* HEADING */}

        <Typography
          sx={{

            textAlign: "center",

            fontWeight: "800",

            color: "#081B4B",

            mb: 5,

            fontSize: {
              xs: "24px",
              md: "32px"
            }
          }}
        >
          Meet Our Team
        </Typography>

        {/* GRID */}

        <Grid
          container
          spacing={2.5}
          justifyContent="center"
        >

          {team.map((item, index) => (

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
            >

              <Card
                sx={{

                  textAlign: "center",

                  borderRadius: "18px",

                  background: "#ffffff",

                  boxShadow:
                    "0 8px 24px rgba(0,0,0,0.05)",

                  border:
                    "1px solid rgba(21,101,216,0.08)",

                  transition: "0.4s",

                  overflow: "hidden",

                  position: "relative",

                  "&:hover": {

                    transform:
                      "translateY(-8px)",

                    boxShadow:
                      "0 16px 28px rgba(21,101,216,0.12)"
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

                <CardContent
                  sx={{
                    p: 3
                  }}
                >

                  {/* AVATAR */}

                  <Avatar
                    sx={{

                      width: 70,

                      height: 70,

                      margin: "auto",

                      mb: 2,

                      bgcolor: "#1565D8",

                      fontSize: "24px",

                      fontWeight: "700"
                    }}
                  >
                    {item.name.charAt(0)}
                  </Avatar>

                  {/* NAME */}

                  <Typography
                    sx={{

                      fontWeight: "800",

                      color: "#081B4B",

                      mb: 1,

                      fontSize: "16px"
                    }}
                  >
                    {item.name}
                  </Typography>

                  {/* ROLE */}

                  <Typography
                    sx={{

                      color: "#5B6575",

                      fontSize: "13px",

                      lineHeight: 1.7
                    }}
                  >
                    {item.role}
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

      </Container>

    </Box>

  );
}

export default Team;