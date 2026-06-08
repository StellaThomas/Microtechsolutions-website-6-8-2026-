import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box
} from "@mui/material";

function Testimonials() {

  const reviews = [
    {
      name:"Rahul Sharma",
      review:"Amazing service and professional website design."
    },

    {
      name:"Priya Patel",
      review:"Best IT company for business branding and development."
    },

    {
      name:"Aman Verma",
      review:"Excellent support and modern UI solutions."
    }
  ];

  return (
    <Box sx={{py:12}}>

      <Container>

        <Typography
          variant="h3"
          textAlign="center"
          fontWeight="bold"
          color="#2C4B9B"
          mb={6}
        >
          Testimonials
        </Typography>

        <Grid container spacing={4}>

          {reviews.map((item,index)=>(

            <Grid item xs={12} md={4} key={index}>

              <Card
                sx={{
                  p:4,
                  borderRadius:"20px",
                  boxShadow:"0 5px 20px rgba(0,0,0,0.08)"
                }}
              >

                <CardContent>

                  <Avatar
                    sx={{
                      width:70,
                      height:70,
                      mb:3,
                      bgcolor:"#2C4B9B"
                    }}
                  >
                    {item.name.charAt(0)}
                  </Avatar>

                  <Typography
                    variant="h6"
                    lineHeight={2}
                    mb={3}
                  >
                    "{item.review}"
                  </Typography>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                  >
                    {item.name}
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

export default Testimonials;