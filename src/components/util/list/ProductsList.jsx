import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

// Keep your existing productsData array unchanged above this

const productsData = [
  {
    id: 1,
    title: "Wartsila Navi-Sailor 4000 ECDIS",
    image: "/images/ecids_prod.png",
    description: `Wärtsilä Navi-Sailor ECDIS works seamlessly with the Fleet Optimisation Solution (FOS), ensuring you stay ahead in the maritime world. Complement it with Navi-Planner software and dedicated hardware, and you will see even smoother connectivity and functionality. Navi-Sailor offers a flexible track for the future S-100 upgrades that won’t require you to replace the hardware: our current solutions are S-100 ready. This will elevate your ECDIS near to being a comprehensive Fleet Operation System. The Navi-Sailor delivers enhanced situational awareness through high-resolution chart displays, real-time weather integration, and comprehensive voyage management tools.`
  },
  {
    id: 1,
    title: "ECDIS on Lease",
    image: "/images/wartsila_1.jpg",
    description: 'Wärtsilä ECDIS Leasing offers a smarter alternative to ownership with zero upfront investment. Pay a fixed monthly fee for a fully certified ECDIS system backed by lifetime warranty, software and hardware upgrades, annual certification, expert support, and automatic hardware refresh every five years. Stay compliant, eliminate technology obsolescence, and convert capital expenditure into predictable operational costs.',
    detailedDescription: "Lease a Fully Certified Wärtsilä ECDIS — Without the Capital Investment.\n\nMarine Innovation's Wärtsilä ECDIS Leasing Program enables vessel owners and operators to deploy a fully certified, IMO-compliant ECDIS system through a simple monthly subscription instead of purchasing the hardware outright. From installation and certification to software updates, hardware upgrades, maintenance, and long-term support, we manage the complete lifecycle of your ECDIS while you benefit from predictable operating expenses and uninterrupted compliance. Simply sign the lease agreement, have the system installed by certified Wärtsilä engineers, and pay one fixed monthly fee covering the equipment, lifetime warranty, service, and ongoing support. Every mandatory software and hardware upgrade is included at no additional cost, ensuring your vessel always operates with the latest IMO-compliant technology. Certified engineers perform a remote Annual Performance Test (APT) every year and issue an ECDIS Shore Based Premium Maintenance Certificate to maintain compliance. Troubleshooting, repairs, and replacement units are fully covered, with vessel owners responsible only for travel-related expenses. To eliminate technology obsolescence, the latest Wärtsilä ECDIS hardware is automatically provided every five years, requiring only installation charges. With zero capital investment, predictable monthly payments, lifetime warranty, continuous compliance, and the flexibility to cancel with just 30 days' notice, Marine Innovation delivers a future-ready navigation solution backed by its position as a Master Distributor for Wärtsilä Voyage, the exclusive ECDIS leasing partner, an in-house service team, dedicated after-sales support, and the strength of the Jason Marine Group."
  },
  {
    id: 2,
    title: "Wartsila Vessel Traffic Management System",
    image: "/images/p1.jpg",
    description: `Advanced vessel traffic management solution designed to enhance maritime safety and operational efficiency in busy waterways. This comprehensive system provides real-time vessel tracking, collision avoidance, and traffic coordination capabilities, enabling port authorities and maritime operators to optimize vessel movements while maintaining the highest safety standards. Features integrated radar tracking, AIS data processing, and intelligent traffic flow management.`
  },
  {
    id: 1,
    title: "Enamor Sea Performer",
    image: "/images/prod2.png",
    description: 'Professional-grade marine navigation system engineered for optimal performance in challenging maritime environments. The Sea Performer integrates multiple navigation sensors and provides reliable positioning data, route optimization, and comprehensive vessel monitoring capabilities. Built with robust maritime-grade components to ensure continuous operation in harsh sea conditions.'
  },
  {
    id: 1,
    title: "Danelec Voyage Data Recorder",
    image: "/images/p4.png",
    description: `IMO-compliant Voyage Data Recorder (VDR) system that captures and stores critical vessel operational data for safety analysis and incident investigation. This advanced recording system continuously monitors bridge audio, radar images, ship position, and key operational parameters, providing essential data for maritime safety enhancement and regulatory compliance.`
  },
  {
    id: 1,
    title: "Hensoldt Kelvin Hughes S-Band Navigation radar",
    image: "/images/p5.png",
    description: `High-performance marine radar system delivering exceptional target detection and tracking capabilities. The SharpEye technology provides superior clutter suppression and target discrimination, enabling reliable navigation in challenging weather conditions and congested waters. Features advanced signal processing for enhanced maritime domain awareness.`
  },
  {
    id: 1,
    title: "Hensoldt Manta NEO X- Band Navigation Radar",
    image: "/images/p6.jpg",
    description: `Next-generation navigation radar system combining solid-state technology with advanced target processing capabilities. The Manta NEO delivers reliable short and medium-range detection with low maintenance requirements and enhanced environmental performance. Designed for professional maritime applications requiring precision navigation support..`
  },
  {
    id: 1,
    title: "ShipIn's FleetVision™",
    image: "/images/p7.png",
    description: `Revolutionary AI-powered maritime surveillance platform that transforms traditional vessel monitoring into intelligent fleet management. FleetVision connects ship-to-shore operations through advanced computer vision technology, providing real-time alerts and analytics from onboard camera systems. This innovative solution enhances safety, security, and operational efficiency by converting thousands of hours of footage into actionable intelligence for seafarers, fleet managers, and vessel owners.`
  },
  {
    id: 1,
    title: "MedAssist Mobile Device Management / Hardware lease",
    image: "/images/p8.png",
    description: `Comprehensive mobile device management solution tailored for maritime healthcare applications. This service provides secure deployment and management of medical devices aboard vessels, ensuring reliable access to digital health tools while maintaining data security and regulatory compliance. Includes hardware leasing options for flexible fleet deployment.`
  },
  {
    id: 1,
    title: "MedAssist Heart App",
    image: "/images/p9.png",
    description: `Specialized cardiovascular monitoring application designed for maritime healthcare environments. The Heart App provides advanced cardiac assessment tools, enabling onboard medical personnel to conduct comprehensive heart health evaluations. Features telemedicine integration for remote consultation capabilities during voyages.`
  },
  {
    id: 1,
    title: "MedAssist Live App",
    image: "/images/p10.png",
    description: `Real-time medical monitoring and consultation platform connecting vessel medical facilities with shore-based healthcare professionals. MedAssist Live enables immediate medical support through video consultations, vital sign monitoring, and emergency medical guidance, ensuring optimal healthcare delivery in maritime environments.`
  },
  
  {
    id: 1,
    title: "VSTEP Response Simulator",
    image: "/images/p12.jpg",
    description: `Advanced maritime emergency response training simulator providing realistic scenario-based learning experiences. This sophisticated system enables comprehensive training for emergency situations, vessel handling, and crisis management in a controlled environment. Features high-fidelity simulation technology for enhanced training effectiveness and crew preparedness..`
  },
  {
    id: 1,
    title: "MedAssist Skills App",
    image: "/images/p13.png",
    description: `Interactive medical training platform designed to enhance healthcare capabilities aboard vessels. This comprehensive application provides medical procedure training, emergency response protocols, and continuing education resources for maritime medical personnel. Features simulation-based learning and certification tracking capabilities.`
  }
];

const ProductCard = ({ product, onOpen }) => {
  return (
    <Grid
      display={"flex"}
      justifyContent={"center"}
      size={{ xs: 12 }}
      marginTop={"1rem"}
    >
      <Card
        // sx={{
        //   backgroundColor: "#0F2854",
        //   borderRadius: 3,
        //   width: "75%",
        //   padding: 1.5,
        //   cursor: "pointer",
        // }}
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
        onClick={() => onOpen(product)}
      >
        <Grid container spacing={2} sx={{maxHeight: 250}}>
          <Grid size={{ xs: 12, md: 4 }}>
            <CardMedia
              component="img"
              image={product.image}
              height="100%"
              width='100%'
              alt={product.title}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "#fff", mt: 1 }}
              >
                {product.title}
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
                {product.description.slice(0, 250) + '...'}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

const ProductsList = ({ ref }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProduct(null);
  };

  const openInquireNow = () => {
    window.location.href =
      "mailto:info@marinov.com.sg?subject=Product Inquiry&body=";
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Container sx={{ py: 4 }} ref={ref}>
      <h1
        style={{
          marginTop: "3rem",
          color: "#1D546D",
          textAlign: "center",
        }}
      >
        Our Full Range of Products
      </h1>

      <p
        style={{
          lineHeight: 1.6,
          textAlign: "center",
          fontWeight: "bold",
          color: "#456882",
        }}
      >
        Advanced Maritime Solutions for Enhanced Safety & Performance
      </p>

      <Grid container spacing={2} marginTop={"3rem"}>
        {productsData.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onOpen={handleOpenModal}
          />
        ))}
      </Grid>

      {/* SINGLE MODAL */}
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
            {selectedProduct && (
              <>
                <CardMedia
                  component="img"
                  image={selectedProduct.image}
                  alt={selectedProduct.title}
                />

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    sx={{ color: "#fff", mt: 2 }}
                  >
                    {selectedProduct.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#D7D7D7",
                      lineHeight: 1.8,
                    }}
                  >
                    {selectedProduct.description}
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

      {/* <Box
        sx={{
          position: "fixed",
          bottom: 16,
          left: 20,
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
            backgroundColor: "#B31312",
          }}
        >
          Inquire Now
        </Button>
      </Box> */}
    </Container>
  );
};

export default ProductsList;