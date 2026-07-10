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
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import DetailsModal from './DetailsModal';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';

const DetailsCard = ({detailItem}) => {
    const [data, setData] = useState({});
    const [openModal, setDetailsModal] = useState(false);

    return (
    <Grid display={'flex'} justifyContent={'center'} size={{ xs: 12, sm: 4 }} marginTop={'1rem'} >
        <Card sx={{ backgroundColor: '#0F2854', borderRadius: 3, width: '90%', padding: 1.5,
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
                alt={detailItem.title}
                height={338}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{color: "#fff", marginTop: 13}}>
                 {detailItem.title?.slice(0,20)+'...'}
                </Typography>
                <Typography variant="body2" style={{color: "#D7D7D7"}} sx={{ color: 'text.secondary' }}>
                 {detailItem.description.slice(0, 200)+'....'}
                </Typography>
            </CardContent>
            <CardActions style={{marginBottom: '0.8rem'}}>
                <Button variant="contained" style={{backgroundColor: '#5E686D'}} onClick={() => setDetailsModal(true)}>Read More</Button>
            </CardActions>
        </Card>
        {/* <DetailsModal isOpen={openModal} detailItem={detailItem} /> */}
        <Modal open={openModal} onClose={() => setDetailsModal(!openModal)}>
            <Box sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)", // centers modal
                width: { xs: "90%", sm: 600 },
                maxHeight: "80vh",                  // limit modal height
                overflowY: "auto",                  // enable vertical scroll
                }}>
                    <Card sx={{ backgroundColor: '#0F2854', borderRadius: 3, padding: 2 }}>
                    <Grid container>
                        <Grid size={{xs: 12}}>
                            <CardMedia
                                component="img"
                                image={detailItem.image}
                                alt={detailItem.title}
                            />
                        </Grid>
                        <Grid size={{xs: 12}}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{color: "#fff", marginTop: 13}}>
                                {detailItem.title}
                                </Typography>
                                <Typography variant="body2" style={{color: "#D7D7D7"}} sx={{ color: 'text.secondary' }}>
                                {detailItem.description}
                                </Typography>
                            </CardContent>
                            <CardActions style={{marginBottom: '0.8rem'}}>
                                <Button variant="contained" style={{backgroundColor: '#B31312'}} onClick={() => setDetailsModal(false)}>Close <CancelIcon style={{marginLeft: 10}}/></Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
            {/* <Button>Close</Button> */}
        </Modal>
    </Grid>
    );
}

export default DetailsCard;