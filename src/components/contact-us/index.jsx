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
import ContactForm from '../util/form';
import Box from '@mui/material/Box';


const detailsCardItems = [{id: 1, title: "Make a Call", desc1: "Sales: +65 86164861", desc2: "Service: +65 93913925 "}, {id: 2, title: "Send Email", desc1: "Sales: sales@marinov.com.sg",desc2: "Service: service@marinov.com.sg", desc3: "Inquiry: info@marinov.com.sg"}, {id: 3, title: "Visit our Office", desc1: "194, Pandan Loop, #06-01 196 Pantech Business Hub", desc2: "Singapore 128383"}]

const detailsCard = (detailItem) => {
    return (
    <Grid display={'flex'} justifyContent={'center'} size={{ xs: 12 }} >
        <Card sx={{ backgroundColor: '#fff', borderRadius: 3, width: '75%', marginTop: 4, padding: 2 }}>
            <CardContent>
                {
                    detailItem.id === 1 ?
                <CallIcon fontSize={'large'} style={{color: '#000'}} /> :
                detailItem.id === 2 ?
                                <EmailIcon fontSize={'large'} style={{color: '#000'}} /> :
                                                <LocationOnIcon fontSize={'large'} style={{color: '#000'}} />

                }
                    <Typography gutterBottom variant="h5" component="div" style={{color: "#000", marginTop: 13}}>
                 {detailItem.title}
                </Typography>
                <Typography slotProps={{ primary: {fontWeight: 'bolder'} }} variant="body2" style={{color: "grey"}} sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                 {detailItem.desc1}
                 <br/>
                 {detailItem.desc2}
                 <br/>
                                  {detailItem.desc3}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
    );
}

const Map = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: 350, md: 500 },
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        marginTop: 10
      }}
    >
      <iframe title="Marine Innovation Location"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7747040194554!2d103.75187299999999!3d1.3105118999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1abfd45702ab%3A0xe5569f7630f72ef7!2s194%20Pandan%20Lp%2C%20%2306-01%20196%20Pantech%20Business%20Hub%2C%20Singapore%20128383!5e0!3m2!1sen!2sin!4v1783661312705!5m2!1sen!2sin"></iframe>
    </Box>
  );
};


const ContactUs = ({ref}) => {
    return (
        <Container style={{py: 4}} ref={ref}>
            <h1 style={{marginTop: '3rem', color: '#1D546D', textAlign: 'center'}}>Search. Click. Connect</h1>
            <Grid container justifyContent={'center'} marginTop={'3rem'}>
                <Grid size={{xs: 12, md: 6}}>
                <ContactForm />
                </Grid>
                <Grid container size={{xs: 12, md: 4}} >
                {detailsCardItems.map((detailsCardItem) => detailsCard(detailsCardItem))}
                </Grid>
            </Grid>
            {Map()}
        </Container>
    );
}



export default ContactUs;