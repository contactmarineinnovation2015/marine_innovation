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
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import DetailsCard from '../DetailsCard';
import NavBar from '../../navigation';
import { useLocation } from "wouter";
const productsData = [
  {
    id: 1,
    title: "Compliance Made Easy",
    image: "/images/b1.png",
    description: `Introduction
With stricter maritime safety regulations globally, having a compliant ECDIS isn’t a choice—it’s a mandate. Wärtsilä ECDIS ticks every box and adds real-time operational advantages.`
  },
  {
    id: 2,
    title: "Why Shipowners Are Switching to Wärtsilä ECDIS for ROI at Sea",
    image: "/images/b2.jpg",
    description: `Opening Profit margins in shipping are tight. One overlooked area of cost-saving? Your ECDIS. Shipowners making the switch to Wärtsilä are seeing better ROI—here’s how.`
  },
  {
    id: 3,
    title: "Wärtsilä ECDIS: Charting a New Era in Smart Navigation",
    image: "/images/b3.png",
    description: `Introduction
In today’s maritime industry, precision and situational awareness are not luxuries—they’re necessities. The Wärtsilä ECDIS transforms how vessels navigate.`
  }
 
];

const newsLetters = [
  {
    id: 1,
    accessLink: '/pdfs/Newsletter_1.pdf'
  },
  {
    id: 2,
    accessLink: '/pdfs/Newsletter2.pdf'
  }
];

const FeaturedPromotionsList = ({ ref }) => {
  const [searchTerm, setSearchTerm] = useState('');
 const [, setLocation] = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredProducts = productsData.filter((product) => {
    const searchWords = searchTerm
      .toLowerCase()
      .trim()
      .split(' ')
      .filter(Boolean);

    if (searchWords.length === 0) return true;

    const searchableContent =
      `${product.title} ${product.description}`.toLowerCase();

    return searchWords.every((word) =>
      searchableContent.includes(word)
    );
  });

  return (
    <>
      <Container sx={{ py: 4 }} ref={ref}>
        <h1
          style={{
            marginTop: '3rem',
            color: '#1D546D',
            textAlign: 'center'
          }}
        >
          NAVÈK Speaks
        </h1>

        <p
          style={{
            lineHeight: 1.6,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#456882'
          }}
          onClick={() => setLocation('/promotions')}
        >
          Explore More
        </p>

        {/* Search Bar */}
    

        {/* Filtered Articles */}
        <Grid container spacing={2} marginTop={'3rem'}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((detailsCardItem) => (
              <DetailsCard
                key={detailsCardItem.id}
                detailItem={detailsCardItem}
              />
            ))
          ) : (
            <Grid size={{ xs: 12 }}>
              <Typography
                variant="h6"
                textAlign="center"
                sx={{ mt: 4 }}
              >
                No matching articles found.
              </Typography>
            </Grid>
          )}
        </Grid>

        {/* Newsletters Section */}
        <p
          style={{
            lineHeight: 1.6,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#456882',
            marginTop: '4rem'
          }}
        >
          News Letters
        </p>

        <Grid container spacing={2} marginTop={'3rem'}>
          {newsLetters.map((newsLetter) => (
            <Grid
              key={newsLetter.id}
              display={'flex'}
              justifyContent={'center'}
              size={{ xs: 12 }}
              marginTop={'5rem'}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 600,
                  boxShadow: 2,
                  borderRadius: 2,
                  overflow: 'hidden'
                }}
              >
                <iframe
                  src={newsLetter.accessLink}
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  title={`Newsletter-${newsLetter.id}`}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default FeaturedPromotionsList;