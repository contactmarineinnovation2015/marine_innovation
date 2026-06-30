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

const DetailsModal = ({isOpen, detailItem}) => {

    const [openModal, setIsOpen] = useState(isOpen);

    const handleClose = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Card sx={{ backgroundColor: '#0F2854', borderRadius: 3, width: '90%', padding: 1.5 }}>
            <CardMedia
                component="img"
                image={detailItem.image}
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
            <CardActions style={{marginBottom: '0.8rem'}}>
                <Button variant="contained" style={{backgroundColor: '#5E686D'}}>Read More</Button>
            </CardActions>
        </Card>
        </Modal>
    )
};

export default DetailsModal;