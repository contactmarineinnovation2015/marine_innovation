import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useLocation } from 'wouter';

const productsData = [
  {
    id: 1,
    title: "Wartsila Navi-Sailor 4000 ECDIS",
    image: "/images/prod1.jpg",
    description:
      "Precision Navigation Technology for Safe Maritime Operations."
  },
  {
    id: 2,
    title: "Enamor Sea Performer",
    image: "/images/prod2.png",
    description:
      "Comprehensive System for Enhanced Maritime Operational Performance"
  }
];

const detailsCard = (detailItem) => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      size={{ xs: 12, sm: 6, xl: 4 }}
      marginTop="1rem"
      key={detailItem.id}
    >
      <Card
        sx={{
          position: "relative",
          backgroundColor: "#0F2854",
          borderRadius: 4,
          width: "100%",
          overflow: "hidden",
          cursor: "pointer",
          transition: "all .4s cubic-bezier(.17,.67,.36,1.3)",
          boxShadow: "0 10px 30px rgba(0,0,0,.12)",

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
            transform: "translateY(-10px)",
            boxShadow: "0 25px 50px rgba(0,0,0,.2)",
          },

          "& img": {
            transition: ".4s ease",
          },

          "&:hover img": {
            transform: "scale(1.05)",
          },
        }}
      >
        {/* Image Container */}
        <Box
          sx={{
            backgroundColor: "#fff",
            height: 320,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 3,
            m: 2,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            image={detailItem.image}
            alt={detailItem.title}
            sx={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>

        <CardContent
          sx={{
            pt: 1.5,
            pb: 3,
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              color: "#fff",
              fontWeight: 500,
            }}
          >
            {detailItem.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#D7D7D7",
              lineHeight: 1.7,
            }}
          >
            {detailItem.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const Products = ({ ref }) => {
  const [, setLocation] = useLocation();

  return (
    <Container sx={{ py: 4 }} ref={ref}>
      <h1
        style={{
          marginTop: "3rem",
          color: "#1D546D",
          textAlign: "center",
        }}
      >
        Our Products
      </h1>

      <p
        style={{
          lineHeight: 1.6,
          textAlign: "center",
          fontWeight: "bold",
          color: "#456882",
        }}
      >
        Advanced Maritime Solutions for Enhanced Safety & Performance
      </p>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        marginTop="3rem"
      >
        {productsData.map((item) => detailsCard(item))}
      </Grid>

      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          onClick={() => setLocation("/products")}
          variant="contained"
          sx={{
            mt: 6,
            backgroundColor: "#B31312",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            "&:hover": {
              backgroundColor: "#991010",
            },
          }}
        >
          View More Products →
        </Button>
      </CardActions>
    </Container>
  );
};

export default Products;