import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Grid, Box, Typography, Paper, List, ListItem, ListItemText, Container } from "@mui/material";
import { useLocation } from 'wouter';


const servicesData = [
  {
    id: 1,
    title: "Servicing of Navigation Equipment",
    image: "/images/s1.jpg",
    description: `Marine Innovation delivers expert repair services for comprehensive navigation and marine equipment. Our skilled technicians specialize in handling a wide range of devices in radar systems, GPS units, communication devices, and autopilot systems, ensuring reliable and timely repairs that keep your maritime equipment operating at peak performance.`
  },
  {
    id: 2,
    title: "Servicing of Communication Equipment",
    image: "/images/s2.png",
    description: `Marine Innovation provides expert repair services for marine communication equipment. Our experienced technicians specialize in handling a wide range of devices including VHF radios, satellite communication systems, and onboard intercoms, delivering reliable repairs to ensure seamless maritime communications.`
  }
];

const detailsCard = (detailItem) => {
    return (
    <Grid display={'flex'} justifyContent={'center'} size={{ xs: 12 }} marginTop={'1rem'} >
        <Card sx={{ backgroundColor: '#0F2854', borderRadius: 3, width: '75%', padding: 1.5 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 4 }}>
                    <CardMedia
                        component="img"
                        image={detailItem.image}
                        height={'100%'}
                        alt={detailItem.title}
                    />
                </Grid>
                <Grid size={{ xs: 8 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{color: "#fff", marginTop: 13}}>
                        {detailItem.title}
                        </Typography>
                        <Typography variant="body2" style={{color: "#D7D7D7"}} sx={{ color: 'text.secondary' }}>
                        {detailItem.description}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    </Grid>
    );
}

const Services = () => {

    const [, setLocation] = useLocation();

    return (
        <Container sx={{py: 4}}>
            <h1 style={{marginTop: '3rem', color: '#1D546D', textAlign: 'center'}}>Our Services</h1>
            <Container>
                <Grid container justifyContent="center" spacing={5} alignItems="center" marginTop={'6rem'}>
                    {/* Left: Image */}
                    <Grid size={{ xs: 12, sm: 6, xl: 6 }}>
                    <Box
                        component="img"
                        src="/images/layoutcut.png" // replace with your image path
                        alt="Sample"
                        sx={{
                        width: "100%",
                        height: 500
                        }}
                    />
                    </Grid>
                    {/* Right: Text content */}
                    <Grid size={{ xs: 12, sm: 6, xl: 6 }}>
                    <Typography variant="h3" gutterBottom style={{color: '#1D546D'}}>
                        A Decade Of Trusted Maritime Excellence
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: '#456882', fontWeight: 'normal' }}>
                        Our extensive maritime expertise enables us to handle projects of any scale and complexity, consistently delivering results that exceed industry standards. Trust Marine Innovation to enhance your vessels safety and operational efficiency with technology solutions built for the demanding maritime environment.
                
                    </Typography>
                    <Grid container>
                        <Grid size={{ xs: 6 }}>
                            <List sx={{ pl: 2 }}>
                                <ListItem>
                                <CheckCircleIcon style={{marginRight: 10, color: '#B31312'}} /><ListItemText slotProps={{ primary: {fontWeight: 'bolder'} }} style={{color: '#456882', fontWeight: 'bold'}} primary="Superior Workmanship" />
                                </ListItem>
                                <ListItem>
                                <CheckCircleIcon style={{marginRight: 10, color: '#B31312'}} /><ListItemText primaryTypographyProps={{ fontWeight: 'bolder' }} style={{color: '#456882', fontWeight: 'bold'}} primary="Transparent Practices" />
                                </ListItem>
                                <ListItem>
                                <CheckCircleIcon style={{marginRight: 10, color: '#B31312'}} /><ListItemText primaryTypographyProps={{ fontWeight: 'bolder' }} style={{color: '#456882', fontWeight: 'bold'}} primary="Maritime Expertise" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <Card style={{height: '10rem', borderRadius: '0.8rem'}}>
                                <CardContent>
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div" style={{color: "#000", textAlign: 'center'}}>
                                          10+
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div" style={{color: "grey"}}>
                                          Years of Experience
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
            </Container>
            <CardActions sx={{ justifyContent: "center" }}>
                <Button onClick={() => setLocation('/services')} variant="contained" style={{backgroundColor: '#B31312', borderWidth: 3, fontWeight: 'bold', marginTop: '6rem'}}>{`View More Services >`}</Button>
            </CardActions>
        </Container>
    );
}

export default Services;