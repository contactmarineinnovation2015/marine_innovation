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


const detailsCardItems = [{id: 1, title: "Make a Call", desc1: "Sales: +65 86164861", desc2: "Service: +65 93913925 "}, {id: 2, title: "Send Email", desc1: "Sales: sales@marinov.com.sg", desc2: "Inquiry: info@marinov.com.sg"}, {id: 3, title: "Visit our Office", desc1: "194, Pandan Loop, #06-01 196 Pantech Business Hub", desc2: "Singapore 128383"}]

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
                </Typography>
            </CardContent>
        </Card>
    </Grid>
    );
}

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
        </Container>
    );
}



export default ContactUs;