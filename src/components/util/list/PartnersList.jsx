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
import { useEffect } from 'react';


const productsData = [
  {
    id: 1,
    title: "Getting Started with React",
    image: "/images/wartsila.jpeg",
    description: `React is a popular JavaScript library for building user interfaces.
It allows developers to create reusable UI components.
The component-based architecture makes applications easier to maintain.
State management helps keep data in sync with the UI.
React is widely used in modern web development.`
  },
  {
    id: 2,
    title: "Understanding Material UI",
    image: "/images/vstep.jpeg",
    description: `Material UI is a React component library based on Google's Material Design.
It provides pre-built components that are customizable and responsive.
Themes allow you to control colors, typography, and spacing globally.
Material UI helps speed up development significantly.
It integrates seamlessly with React projects.`
  },
  {
    id: 3,
    title: "Responsive Web Design",
    image: "/images/enamore.jpeg",
    description: `Responsive design ensures your application works on all screen sizes.
Layouts automatically adapt to mobile, tablet, and desktop views.
Using grids and flexible units improves responsiveness.
Media queries play an important role in styling.
Good responsive design improves user experience.`
  },
  {
    id: 4,
    title: "Component Reusability",
    image: "/images/medassist.jpeg",
    description: `Reusable components reduce duplication across the codebase.
They help maintain consistency throughout the UI.
Well-designed components are easier to test and debug.
Reusability improves scalability of large applications.
React promotes this pattern by design.`
  },
  {
    id: 5,
    title: "Getting Started with React",
    image: "/images/danelec.jpeg",
    description: `React is a popular JavaScript library for building user interfaces.
It allows developers to create reusable UI components.
The component-based architecture makes applications easier to maintain.
State management helps keep data in sync with the UI.
React is widely used in modern web development.`
  },
  {
    id: 6,
    title: "Understanding Material UI",
    image: "/images/hensoldt.jpeg",
    description: `Material UI is a React component library based on Google's Material Design.
It provides pre-built components that are customizable and responsive.
Themes allow you to control colors, typography, and spacing globally.
Material UI helps speed up development significantly.
It integrates seamlessly with React projects.`
  },
  {
    id: 7,
    title: "Responsive Web Design",
    image: "/images/shipin.jpeg",
    description: `Responsive design ensures your application works on all screen sizes.
Layouts automatically adapt to mobile, tablet, and desktop views.
Using grids and flexible units improves responsiveness.
Media queries play an important role in styling.
Good responsive design improves user experience.`
  }
];

const detailsCard = (detailItem) => {
    return (
    <Grid display={'flex'} justifyContent={'center'} size={{ xs: 12, sm: 6, md: 3 }} marginTop={'1rem'} >
        <Card sx={{ backgroundColor: '#fff', borderRadius: 3, width: '75%', padding: 1.5 }}>
            <CardMedia
                component="img"
                image={detailItem.image}
                alt={detailItem.title}
                style={{height: 142}}
            />
        </Card>
    </Grid>
    );
}

const PartnersList = ({ref}) => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (
        <Container sx={{py: 4}} ref={ref}>
            <h1 style={{marginTop: '3rem', color: '#1D546D', textAlign: 'center'}}>Our Trusted Partners</h1>
            <Grid container spacing={2} marginTop={'3rem'}>
                {productsData.map((detailsCardItem) => detailsCard(detailsCardItem))}
            </Grid>
        </Container>
    );
}

export default PartnersList;