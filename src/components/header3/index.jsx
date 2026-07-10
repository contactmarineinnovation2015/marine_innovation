import { useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const productsData = [
  {
    id: 1,
    title: "Mr. Joseph Foo",
    image: "/images/Foo.jpg",
    description: "Chairman, Jason Marine Group Ltd.",
    link: "https://www.linkedin.com/in/josephfooct/",
  },
  {
    id: 2,
    title: "Dominic Oliver",
    image: "/images/D.jpg",
    description: "Managing Director, Marine Innovations PTE. LTD",
    link: "https://www.linkedin.com/in/dominicoliver/",
  },
  {
    id: 3,
    title: "Mr. Roshan Singh",
    image: "/images/Roshan.png",
    description: "Business Development Manager",
    link: "https://www.linkedin.com/in/roshan-singh-6a274059/",
  },
  {
    id: 4,
    title: "Michella D Silva",
    image: "/images/Michell1.png",
    description: "Sales Manager",
    link: "https://www.linkedin.com/in/michelle-d-silva-586770a6/",
  },
];

const topTeamData = [
  {
    id: 1,
    title: "Mr. Joseph Foo",
    image: "/images/Foo.jpg",
    description: "Chairman, Jason Marine Group Ltd.",
    link: "https://www.linkedin.com/in/josephfooct/",
  },
  {
    id: 2,
    title: "Dominic Oliver",
    image: "/images/D.jpg",
    description: "Managing Director, Marine Innovations PTE. LTD",
    link: "https://www.linkedin.com/in/dominicoliver/",
  },
];

const DetailsCard = (detailItem) => {
  return (
    <Grid
      key={detailItem.id}
      display="flex"
      justifyContent="center"
      size={{ xs: 12, sm: 6, xl: 4 }}
      mt={2}
    >
      <Card
        sx={{
          position: "relative",
          backgroundColor: "#0F2854",
          borderRadius: 3,
          width: "100%",
          p: 1.5,
          overflow: "hidden",
          cursor: "pointer",
          transition: "all .4s cubic-bezier(.17,.67,.36,1.3)",
          boxShadow: "0 8px 25px rgba(0,0,0,.08)",

          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(29,84,109,.08), rgba(255,255,255,0))",
            opacity: 0,
            transition: ".4s",
            zIndex: 0,
          },

          "&:hover::before": {
            opacity: 1,
          },

          "&:hover": {
            transform: "translateY(-12px)",
            boxShadow: "0 25px 45px rgba(29,84,109,.25)",
          },

          "& img": {
            position: "relative",
            zIndex: 1,
            transition: ".4s",
          },

          "&:hover img": {
            transform: "scale(1.1)",
          },
        }}
      >
        <CardMedia
          component="img"
          image={detailItem.image}
          alt={detailItem.title}
          sx={{
            border: "4px solid #F9F5EB",
            mt: 1,
            width: "12rem",
            height: "12rem",
            borderRadius: "50%",
            mx: "auto",
          }}
        />

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              color: "#fff",
              mt: 1.5,
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            {detailItem.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#D7D7D7",
              textAlign: "center",
              minHeight: 45,
            }}
          >
            {detailItem.description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            justifyContent: "center",
            mb: 1,
          }}
        >
          <IconButton
            component="a"
            href={detailItem.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            sx={{
              color: "white",
              transition: "0.3s",

              "&:hover": {
                color: "#0A66C2",
                transform: "scale(1.15)",
              },
            }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

const Team = ({ ref }) => {
  // Reads: /team?allTeamMembers=true
  const searchParams = new URLSearchParams(window.location.search);
  const allTeamMembers =
    searchParams.get("allMembers") === "true";

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Container sx={{ py: 4 }} ref={ref}>
      <Typography
        variant="h3"
        sx={{
          mt: 4,
          color: "#1D546D",
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        Meet Our Team
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        mt={4}
      >
        {(allTeamMembers ? productsData : topTeamData).map((member) =>
          DetailsCard(member)
        )}
      </Grid>
    </Container>
  );
};

export default Team;