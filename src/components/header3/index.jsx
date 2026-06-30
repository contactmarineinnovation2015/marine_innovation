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
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const productsData = [
  {
    id: 1,
    title: "Mr. Joseph Foo",
    image: "/images/Foo.jpg",
    description: `Chairman, Jason Marine Group Ltd.`,
    link: 'https://www.linkedin.com/in/josephfooct/'
  },
  {
    id: 2,
    title: "Dominic Oliver",
    image: "/images/D.jpg",
    description: `Managing Director, Marine Innovations PTE.LTD`,
    link: 'https://sg.linkedin.com/in/dominicoliver'
  }];

const detailsCard = (detailItem) => {
    return (
    <Grid display={'flex'} justifyContent={'center'} size={{ xs: 12, sm: 6, xl: 4 }} marginTop={'1rem'} >
        <Card sx={{ backgroundColor: '#0F2854', borderRadius: 3, width: '100%', padding: 1.5 }}>
            <CardMedia
                component="img"
                image={detailItem.image}
                alt={detailItem.title}
                sx={{border: "4px solid #F9F5EB", marginTop: '0.8rem', width: '20rem', height: '20rem', borderRadius: '50%', mx: 'auto'}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{color: "#fff", marginTop: 13, textAlign: 'center'}}>
                 {detailItem.title}
                </Typography>
                <Typography variant="body2" style={{color: "#D7D7D7"}} sx={{ color: 'text.secondary', textAlign: 'center' }}>
                 {detailItem.description}
                </Typography>
            </CardContent>
            <CardActions style={{marginBottom: '0.8rem', justifyContent: 'center'}}>
                <LinkedInIcon style={{color: 'white'}} fontSize={'medium'} onClick={()=>window.open(detailItem.link)}/>

            </CardActions>
        </Card>
    </Grid>
    );
}

const Team = ({ref}) => {
    return (
        <Container style={{py: 4}} ref={ref}>
            <h1 style={{marginTop: '3rem', color: '#1D546D', textAlign: 'center'}}>Meet Our Team</h1>
            <Grid
  container
  spacing={4}
  justifyContent="center"
  marginTop="3rem"
>

                {productsData.map((detailsCardItem) => detailsCard(detailsCardItem))}
            </Grid>
        </Container>
    );
}

export default Team;