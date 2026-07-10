import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import Modal from "@mui/material/Modal";
import {
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { useEffect, useState } from "react";

const servicesData = [
  {
    id:1,
    title: "MI Care 365",
    image: "/images/se1.jpg",
    description: "Marine Innovation PTE. LTD. offers a comprehensive **Annual Remote Service Agreement (ARSA)** for **Wärtsilä (formerly Transas) Navi-Sailor 4000 ECDIS**, providing ship owners, fleet managers, technical managers, and vessel operators with reliable year-round remote technical support to maximize navigation system reliability, minimize operational downtime, and enhance fleet efficiency. Our ARSA delivers **24/7 remote technical assistance**, secure remote diagnostics and troubleshooting, annual remote system health and performance assessments, hardware and software support, technical advisory, and global service coordination by experienced maritime engineers. Whenever practical, our specialists remotely access the vessel's ECDIS to diagnose faults, resolve software and hardware issues, provide configuration guidance, analyze alarms, and recommend preventive maintenance measures, significantly reducing the need for costly onboard attendance. If an issue cannot be resolved remotely, Marine Innovation coordinates timely service attendance through its global maritime service network while ensuring seamless communication with vessel managers, technical superintendents, and local port agents. ARSA customers also benefit from **priority technical support**, **preferential service rates**, discounted onboard attendance and spare parts during the contract period, and expert assistance throughout the service lifecycle. The agreement is specifically designed for commercial vessels, including container ships, bulk carriers, tankers, offshore support vessels, LNG and LPG carriers, passenger vessels, research ships, government vessels, and workboats operating worldwide. By combining proactive remote monitoring, rapid response, expert troubleshooting, and global service coordination, Marine Innovation helps customers improve equipment availability, reduce maintenance costs, extend the operational life of their Wärtsilä ECDIS systems, and maintain safe, efficient, and compliant navigation across their fleet.",
    detailedDescription: "Marine Innovation PTE. LTD. offers a comprehensive **Annual Remote Service Agreement (ARSA)** for **Wärtsilä (formerly Transas) Navi-Sailor 4000 ECDIS**, providing ship owners, fleet managers, technical managers, and vessel operators with reliable year-round remote technical support to maximize navigation system reliability, minimize operational downtime, and enhance fleet efficiency. Our ARSA delivers **24/7 remote technical assistance**, secure remote diagnostics and troubleshooting, annual remote system health and performance assessments, hardware and software support, technical advisory, and global service coordination by experienced maritime engineers. Whenever practical, our specialists remotely access the vessel's ECDIS to diagnose faults, resolve software and hardware issues, provide configuration guidance, analyze alarms, and recommend preventive maintenance measures, significantly reducing the need for costly onboard attendance. If an issue cannot be resolved remotely, Marine Innovation coordinates timely service attendance through its global maritime service network while ensuring seamless communication with vessel managers, technical superintendents, and local port agents. ARSA customers also benefit from **priority technical support**, **preferential service rates**, discounted onboard attendance and spare parts during the contract period, and expert assistance throughout the service lifecycle. The agreement is specifically designed for commercial vessels, including container ships, bulk carriers, tankers, offshore support vessels, LNG and LPG carriers, passenger vessels, research ships, government vessels, and workboats operating worldwide. By combining proactive remote monitoring, rapid response, expert troubleshooting, and global service coordination, Marine Innovation helps customers improve equipment availability, reduce maintenance costs, extend the operational life of their Wärtsilä ECDIS systems, and maintain safe, efficient, and compliant navigation across their fleet.",
  },
  {
    id: 2,
    title: "Servicing of Navigation Equipment",
    image: "/images/Bridge.jpg",
    description: `Marine Innovation delivers expert repair services for comprehensive navigation and marine equipment. Our skilled technicians specialize in handling a wide range of devices in radar systems, GPS units, communication devices, and autopilot systems, ensuring reliable and timely repairs that keep your maritime equipment operating at peak performance.`,
    detailedDescription: `Marine Innovation delivers expert repair services for comprehensive navigation and marine equipment. Our skilled technicians specialize in handling a wide range of devices in radar systems, GPS units, communication devices, and autopilot systems, ensuring reliable and timely repairs that keep your maritime equipment operating at peak performance.`,
  },
  {
    id: 3,
    title: "Servicing of Communication Equipment",
    image: "/images/se2.jpg",
    description: `Marine Innovation provides expert repair services for marine communication equipment. Our experienced technicians specialize in handling a wide range of devices including VHF radios, satellite communication systems, and onboard intercoms, delivering reliable repairs to ensure seamless maritime communications.`,
    detailedDescription: `Marine Innovation provides expert repair services for marine communication equipment. Our experienced technicians specialize in handling a wide range of devices including VHF radios, satellite communication systems, and onboard intercoms, delivering reliable repairs to ensure seamless maritime communications.`,
  }
];

const ServiceCard = ({ service, onOpen }) => {
  return (
    <Grid
      display={"flex"}
      justifyContent={"center"}
      size={{ xs: 12 }}
      marginTop={"1rem"}
    >
      <Card
        sx={{
    position: "relative",
    background: "#0F2854",
    borderRadius: 3,
    width: "75%",
    padding: 1.5,
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
  }}
        
        onClick={() => onOpen(service)}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <CardMedia
              component="img"
              image={service.image}
              height="100%"
              alt={service.title}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                sx={{
                  color: "#fff",
                  mt: 1,
                }}
              >
                {service.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#D7D7D7",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {service.description.slice(0, 200) + '...'}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

const ServicesList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedService(null);
  };

  const openInquireNow = () => {
    window.location.href =
      "mailto:info@marinov.com.sg?subject=Service Inquiry&body=";
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Container sx={{ py: 4 }}>
      <h1
        style={{
          marginTop: "3rem",
          color: "#1D546D",
          textAlign: "center",
        }}
      >
        Our Services
      </h1>

      <Grid container spacing={2} marginTop={"7rem"}>
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onOpen={handleOpenModal}
          />
        ))}
      </Grid>

      {/* Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "95%", sm: 700 },
            maxHeight: "85vh",
            overflowY: "auto",
            outline: "none",
          }}
        >
          <Card
            sx={{
              backgroundColor: "#0F2854",
              borderRadius: 3,
              padding: 2,
            }}
          >
            {selectedService && (
              <>
                <CardMedia
                  component="img"
                  image={selectedService.image}
                  alt={selectedService.title}
                />

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    sx={{
                      color: "#fff",
                      mt: 2,
                    }}
                  >
                    {selectedService.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#D7D7D7",
                      lineHeight: 1.8,
                    }}
                  >
                    {selectedService.detailedDescription}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#B31312",
                    }}
                    onClick={handleCloseModal}
                  >
                    Close
                    <CancelIcon sx={{ ml: 1 }} />
                  </Button>
                </CardActions>
              </>
            )}
          </Card>
        </Box>
      </Modal>
    </Container>
  );
};

export default ServicesList;