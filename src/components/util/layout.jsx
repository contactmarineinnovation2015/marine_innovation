import React from "react";
import { Grid, Box, Typography, Paper, List, ListItem, ListItemText, Container } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import FactoryIcon from '@mui/icons-material/Factory';
import SecurityIcon from '@mui/icons-material/Security';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const leftToRight = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const rightToLeft = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function LayoutSection({ref}) {
  return (
    // <Paper sx={{ p: { xs: 2, sm: 4 }, maxWidth: 1200, mx: "auto", mt: 4 }}>
    <div>
    <Grid container>
  <Grid size={{ xs: 12 }}>
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]}
      effect="fade"
      loop={true}
      speed={1000}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      style={{
        width: "100%",
      }}
    >
      <SwiperSlide>
        <Box
          sx={{
            width: {
              xs: "98%",
              sm: "97%",
              md: "96%",
              lg: "95%",
            },
            mx: "auto",
            borderRadius: 4, // 32px (MUI spacing)
            overflow: "hidden",
            boxShadow: 6, // Optional for a premium look
                        height: 700

          }}
        >
          <Box
            component="img"
            src="/images/Banner_finaln.png"
            alt="Banner 1"
            sx={{
              width: "100%",
              display: "block",
              objectFit: "cover",
            }}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            width: {
              xs: "98%",
              sm: "97%",
              md: "96%",
              lg: "95%",
            },
            mx: "auto",
            borderRadius: 4, // 32px (MUI spacing)
            overflow: "hidden",
            boxShadow: 6, // Optional for a premium look
                        height: 700

          }}
        >
          <Box
            component="img"
            src="/images/banner_wartsila.jpg"
            alt="Banner 1"
            sx={{
              width: "100%",
              display: "block",
              objectFit: "cover",
            }}
          />
        </Box>
      </SwiperSlide>
       <SwiperSlide>
        <Box
          sx={{
            width: {
              xs: "98%",
              sm: "97%",
              md: "96%",
              lg: "95%",
            },
            mx: "auto",
            borderRadius: 4, // 32px (MUI spacing)
            overflow: "hidden",
            boxShadow: 6, // Optional for a premium look
                        height: 700

          }}
        >
          <Box
            component="img"
            src="/images/Banner_1.png"
            alt="Banner 1"
            sx={{
              width: "100%",
              display: "block",
              objectFit: "cover",
            }}
          />
        </Box>
      </SwiperSlide>

        {/* <SwiperSlide>
          <Box
            component="img"
            src="/images/Banner_3.png"
            alt="Banner 2"
            sx={{
              width: "100%",
              display: "block",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Box
            component="img"
            src="/images/navi-sailor_sim_15.jpg"
            alt="Banner 3"
            sx={{
              width: "100%",
              display: "block",
            }}
          />
        </SwiperSlide> */}

      <SwiperSlide>
        <Box
          sx={{
            width: {
              xs: "98%",
              sm: "97%",
              md: "96%",
              lg: "95%",
            },
            mx: "auto",
            borderRadius: 4, // 32px (MUI spacing)
            overflow: "hidden",
            boxShadow: 6, // Optional for a premium look,
            height: 700
          }}
        >
          <Box
            component="img"
            src="/images/last_banner.png"
            alt="Banner 1"
            sx={{
              width: "100%",
              display: "block",
              objectFit: "cover",
            }}
          />
        </Box>
      </SwiperSlide>
    </Swiper>
  </Grid>
</Grid>
    <Container sx={{py: 4}} ref={ref}>
      <Grid component={motion.div}
                variants={leftToRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} container justifyContent="center" spacing={5} alignItems="center" marginTop={'6rem'}>
        {/* Left: Image */}
        <Grid size={{ xs: 12, sm: 6, xl: 6 }}>
          <Box
            component="img"
            src="/images/layout1.png" // replace with your image path
            alt="Sample"
            sx={{
              width: "100%",
            }}
          />
        </Grid>
        {/* Right: Text content */}
        <Grid size={{ xs: 12, sm: 6, xl: 6 }}>
          <Typography variant="h3" gutterBottom style={{color: '#1D546D'}}>
            Welcome to Marine Innovation
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: '#456882', fontWeight: 'normal' }}>
               Marine Innovation stands at the forefront of maritime technology, delivering intelligent navigation and marine equipment solutions that drive safer seas and smarter operations. With a focus on innovation, reliability, and regulatory readiness, we help the global maritime industry move forward with clarity and control.
          </Typography>

          <List sx={{ pl: 2 }}>
            <ListItem>
              <SettingsInputAntennaIcon style={{marginRight: 10, color: '#B31312'}} /><ListItemText slotProps={{ primary: {fontWeight: 'bolder'} }} style={{color: '#456882', fontWeight: 'bold'}} primary="Advanced Technology" />
            </ListItem>
            <ListItem>
              <FactoryIcon style={{marginRight: 10, color: '#B31312'}} /><ListItemText primaryTypographyProps={{ fontWeight: 'bolder' }} style={{color: '#456882', fontWeight: 'bold'}} primary="Industry Expertise" />
            </ListItem>
            <ListItem>
              <CheckCircleIcon style={{marginRight: 10, color: '#B31312'}} /><ListItemText primaryTypographyProps={{ fontWeight: 'bolder' }} style={{color: '#456882', fontWeight: 'bold'}} primary="Safety & Security Focus" />
            </ListItem>
          </List>
        </Grid>
      </Grid>

      <Grid component={motion.div}
                variants={rightToLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} container justifyContent="center" spacing={5} alignItems="center" marginTop={'6rem'}>
        {/* Left: Image */}
        
        {/* Right: Text content */}
        <Grid size={{ xs: 12, sm: 6, xl: 6 }}>
          <Typography variant="h3" gutterBottom style={{color: '#1D546D'}}>
            About Us
          </Typography>
          <Typography variant="h5" paragraph sx={{ lineHeight: 2.0, color: '#456882', fontWeight: 'bold' }}>
            Enhancing Maritime Safety And Efficiency
            </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: '#456882', fontWeight: 'normal' }}>
            With over a decade of maritime expertise, we deliver innovative and compliant solutions for safer, more efficient fleet operations. From crew management and safety audits to marine technical services, our team ensures excellence in every voyage. Trust Marine Innovation for reliable, end-to-end maritime support in Singapore and beyond.
          </Typography>

          <List sx={{ pl: 2 }}>
            <ListItem>
              <CheckCircleIcon style={{marginRight: 10, color: '#B31312'}} /><ListItemText slotProps={{ primary: {fontWeight: 'bolder'} }} style={{color: '#456882', fontWeight: 'bold'}} primary="ISO certified 45001 and 9001" />
            </ListItem>
            <ListItem>
              <CheckCircleIcon style={{marginRight: 10, color: '#B31312'}} /><ListItemText primaryTypographyProps={{ fontWeight: 'bolder' }} style={{color: '#456882', fontWeight: 'bold'}} primary="Second key highlight" />
            </ListItem>
            <ListItem>
              <CheckCircleIcon style={{marginRight: 10, color: '#B31312'}} /><ListItemText primaryTypographyProps={{ fontWeight: 'bolder' }} style={{color: '#456882', fontWeight: 'bold'}} primary="Third amazing feature" />
            </ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, xl: 6 }}>
          <Box
            component="img"
            src="/images/layout2.png" // replace with your image path
            alt="Sample"
            sx={{
              width: "100%",
            }}
          />
        </Grid>
      </Grid>

      <Grid component={motion.div}
                variants={leftToRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} container justifyContent="center" spacing={5} alignItems="center" marginTop={'6rem'}>
        {/* Left: Image */}
        <Grid size={{ xs: 12, sm: 6, xl: 6 }}>
          <Box
            component="img"
            src="/images/layout3.png" // replace with your image path
            alt="Sample"
            sx={{
              width: "100%",
            }}
          />
        </Grid>
        {/* Right: Text content */}
        <Grid size={{ xs: 12, sm: 6, xl: 6 }}>
          <Typography variant="h3" gutterBottom style={{color: '#1D546D'}}>
            Our Commitment to Maritime Excellence
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: '#456882', fontWeight: 'normal' }}>
            Expertise & Experience 
            <br/>
                With years of industry experience and deep knowledge of maritime operations and cutting-edge technology solutions, our team delivers best-in-class innovations that address the unique challenges of the maritime industry.
                <br/>
                <br/>
                Safety-First Approach
                <br/>
                We prioritize maritime safety above all else, implementing technologies and solutions that enhance operational safety standards while maintaining regulatory compliance across all maritime operations.
                <br/>
                <br/>
                Efficiency-Driven Solutions
                <br/>
                Our technology solutions are designed to optimize maritime operations, reducing operational costs while improving performance through smart automation, predictive analytics, and advanced vessel control systems.

          </Typography>
        </Grid>
      </Grid>
    </Container>
    </div >
    // </Paper>
  );
}
