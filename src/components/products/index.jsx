import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import Container from '@mui/material/Container';
import { useLocation } from 'wouter';


const productsData = [
  {
    id: 1,
    title: "Wartsila Navi-Sailor 4000 ECDIS",
    image: "/images/ph1.jpg",
    description: `Precision Navigation Technology for Safe Maritime Operations.`
  },
  {
    id: 2,
    title: "Enamor Sea Performer",
    image: "/images/ph2.jpg",
    description: `Comprehensive System for Enhanced Maritime Operational Performance`
  }
];

const detailsCard = (detailItem) => {
    return (
    <Grid display={'flex'} justifyContent={'center'} size={{ xs: 12, sm: 6, xl: 4 }} marginTop={'1rem'} >
        <Card sx={{ backgroundColor: '#0F2854', borderRadius: 3, width: '100%', padding: 1.5, 
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
        }}>
            
            <CardMedia
                component="img"
                image={detailItem.image}
                height={250}
                alt={detailItem.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{color: "#fff", marginTop: 13}}>
                 {detailItem.title}
                </Typography>
                <Typography variant="body2" style={{color: "#D7D7D7"}} sx={{ color: 'text.secondary' }}>
                 {detailItem.description}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
    );
}

const Products = ({ref}) => {

    const [, setLocation] = useLocation();

    return (
        <Container sx={{py: 4}} ref={ref}>
            <h1 style={{marginTop: '3rem', color: '#1D546D', textAlign: 'center'}}>Our Products</h1>
            <p style={{lineHeight: 1.6, textAlign: 'center', fontWeight: 'bold', color: '#456882'}}>Advanced Maritime Solutions for Enhanced Safety & Performance</p>
            <Grid
  container
  spacing={4}
  justifyContent="center"
  marginTop="3rem"
>

                {productsData.slice(0, 2).map((detailsCardItem) => detailsCard(detailsCardItem))}
            </Grid>
            <CardActions sx={{ justifyContent: "center" }}>
                <Button onClick={() => setLocation('/products')} variant="contained" style={{backgroundColor: '#B31312', borderWidth: 3, fontWeight: 'bold', marginTop: '6rem'}}>{`View More Products >`}</Button>
            </CardActions>
        </Container>
    );
}

export default Products;