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
    id: 1,
    title: "Servicing of Navigation Equipment",
    image: "/images/se1.jpg",
    description: `Marine Innovation delivers expert repair services for comprehensive navigation and marine equipment. Our skilled technicians specialize in handling a wide range of devices in radar systems, GPS units, communication devices, and autopilot systems, ensuring reliable and timely repairs that keep your maritime equipment operating at peak performance.`,
    detailedDescription: `Marine Innovation delivers expert repair services for comprehensive navigation and marine equipment. Our skilled technicians specialize in handling a wide range of devices in radar systems, GPS units, communication devices, and autopilot systems, ensuring reliable and timely repairs that keep your maritime equipment operating at peak performance.`,
  },
  {
    id: 2,
    title: "Servicing of Communication Equipment",
    image: "/images/se2.jpg",
    description: `Marine Innovation provides expert repair services for marine communication equipment. Our experienced technicians specialize in handling a wide range of devices including VHF radios, satellite communication systems, and onboard intercoms, delivering reliable repairs to ensure seamless maritime communications.`,
    detailedDescription: `Marine Innovation provides expert repair services for marine communication equipment. Our experienced technicians specialize in handling a wide range of devices including VHF radios, satellite communication systems, and onboard intercoms, delivering reliable repairs to ensure seamless maritime communications.`,
  },
  {
    id: 3,
    title: "ECDIS as a Service (Leasing)",
    image: "/images/se3.png",
    description: 'Wärtsilä ECDIS Leasing offers a smarter alternative to ownership with zero upfront investment. Pay a fixed monthly fee for a fully certified ECDIS system backed by lifetime warranty, software and hardware upgrades, annual certification, expert support, and automatic hardware refresh every five years. Stay compliant, eliminate technology obsolescence, and convert capital expenditure into predictable operational costs.',
    detailedDescription: "Lease a Fully Certified Wärtsilä ECDIS — Without the Capital Investment.\n\nMarine Innovation's Wärtsilä ECDIS Leasing Program enables vessel owners and operators to deploy a fully certified, IMO-compliant ECDIS system through a simple monthly subscription instead of purchasing the hardware outright. From installation and certification to software updates, hardware upgrades, maintenance, and long-term support, we manage the complete lifecycle of your ECDIS while you benefit from predictable operating expenses and uninterrupted compliance. Simply sign the lease agreement, have the system installed by certified Wärtsilä engineers, and pay one fixed monthly fee covering the equipment, lifetime warranty, service, and ongoing support. Every mandatory software and hardware upgrade is included at no additional cost, ensuring your vessel always operates with the latest IMO-compliant technology. Certified engineers perform a remote Annual Performance Test (APT) every year and issue an ECDIS Shore Based Premium Maintenance Certificate to maintain compliance. Troubleshooting, repairs, and replacement units are fully covered, with vessel owners responsible only for travel-related expenses. To eliminate technology obsolescence, the latest Wärtsilä ECDIS hardware is automatically provided every five years, requiring only installation charges. With zero capital investment, predictable monthly payments, lifetime warranty, continuous compliance, and the flexibility to cancel with just 30 days' notice, Marine Innovation delivers a future-ready navigation solution backed by its position as a Master Distributor for Wärtsilä Voyage, the exclusive ECDIS leasing partner, an in-house service team, dedicated after-sales support, and the strength of the Jason Marine Group."
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
          backgroundColor: "#0F2854",
          borderRadius: 3,
          width: "75%",
          padding: 1.5,
          cursor: "pointer",
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

      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          left: 20,
          right: 0,
          display: "flex",
          justifyContent: "flex-start",
          zIndex: 1000,
        }}
      >
        <Button
          onClick={openInquireNow}
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#456882",
          }}
        >
          Inquire Now
        </Button>
      </Box>
    </Container>
  );
};

export default ServicesList;