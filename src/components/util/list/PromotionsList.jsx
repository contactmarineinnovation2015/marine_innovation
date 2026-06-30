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

const productsData = [
  {
    id: 1,
    title: "Compliance Made Easy",
    image: "/images/b1.png",
    description: `Introduction
With stricter maritime safety regulations globally, having a compliant ECDIS isn’t a choice—it’s a mandate. Wärtsilä ECDIS ticks every box and adds real-time operational advantages. Meeting the Mandate
Wärtsilä’s ECDIS complies with:

SOLAS requirements
IHO S-52 and S-64 testing standards
Type-approved under IEC 61174
Beyond Compliance
Unlike older systems that simply fulfill obligations, Wärtsilä ECDIS offers value-added functionalities such as route validation, ENC autoloading, and voyage risk alerts—all contributing to a safer, more efficient bridge.

Training and Support
Wärtsilä offers a wide range of training modules—both on-site and e-learning—ensuring crew can maximize every function of the ECDIS safely and confidently.

Conclusion
Wärtsilä ECDIS isn’t just built for compliance—it’s engineered for superior operational control, safety, and support.`
  },
  {
    id: 2,
    title: "Why Shipowners Are Switching to Wärtsilä ECDIS for ROI at Sea",
    image: "/images/b2.jpg",
    description: `Opening Profit margins in shipping are tight. One overlooked area of cost-saving? Your ECDIS. Shipowners making the switch to Wärtsilä are seeing better ROI—here’s how.
    Lower Fuel Costs with Smarter Routing
Wärtsilä ECDIS supports voyage optimization by analyzing environmental data, weather forecasts, and traffic lanes to reduce fuel burn.

Maintenance Savings
With remote troubleshooting, automatic updates, and fewer hardware failures, Wärtsilä ECDIS keeps operational costs low and uptime high.

Faster Crew Onboarding
Its user-friendly design reduces training time and error rates, meaning fewer delays and more efficient voyages.

Conclusion
Wärtsilä ECDIS is more than a piece of technology—it’s a business investment that delivers returns across efficiency, safety, and compliance.`
  },
  {
    id: 3,
    title: "Wärtsilä ECDIS: Charting a New Era in Smart Navigation",
    image: "/images/b3.png",
    description: `Introduction
In today’s maritime industry, precision and situational awareness are not luxuries—they’re necessities. The Wärtsilä ECDIS transforms how vessels navigate, providing a seamless blend of safety, compliance, and user-focused technology.

Unpacking Wärtsilä ECDIS
Wärtsilä ECDIS isn’t just another navigation system—it’s an intelligent assistant at sea. Offering real-time chart updates, route planning, and collision avoidance capabilities, this system goes beyond IMO compliance to enhance operational efficiency.

Key Features:

Intuitive UI with customizable overlays
Seamless integration with radar, AIS, and sensors
Global ENC support with auto-updating
Route optimization for fuel efficiency
Smart Benefits for Smarter Ships
With data-driven decision-making becoming the new norm, Wärtsilä ECDIS gives crew members access to analytics that reduce risks and fuel costs. The system also supports remote diagnostics and updates, cutting down on downtime.

Conclusion
In an age where digital navigation is rapidly evolving, Wärtsilä ECDIS leads the way with precision, safety, and operational intelligence.`
  },
  {
    id: 4,
    title: "The Digital Helm: How ECDIS Is Revolutionizing Modern Maritime Navigation",
    image: "/images/Fe.jpg",
    description: `What if your ship’s compass could think, talk, and warn you before danger ever appeared on the horizon? Welcome aboard the future of smart navigation: ECDIS.`
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

const PromotionsList = ({ ref }) => {
  const [searchTerm, setSearchTerm] = useState('');

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
        >
          Explore More
        </p>

        {/* Search Bar */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4,
            mb: 4
          }}
        >
          <TextField
            fullWidth
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outlined"
            sx={{
              maxWidth: 700,
              backgroundColor: '#fff'
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </Box>

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

export default PromotionsList;