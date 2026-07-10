import React from "react";
import { Grid, Box, Typography, Paper, List, ListItem, ListItemText, Container } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import FactoryIcon from '@mui/icons-material/Factory';
import SecurityIcon from '@mui/icons-material/Security';

import { motion } from "framer-motion";

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

export default function AboutUs({ref}) {
  return (
    // <Paper sx={{ p: { xs: 2, sm: 4 }, maxWidth: 1200, mx: "auto", mt: 4 }}>
    <>
    <Container ref={ref}>
      <Grid component={motion.div}
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} container justifyContent="center" spacing={5} alignItems="center" marginTop={'6rem'}>
        {/* Left: Image */}
        <Grid 
          size={{ xs: 12, sm: 6, xl: 6 }}>
            <Box
              component="img"
              src="/images/about_1.png" // replace with your image path
              alt="Sample"
              sx={{
                width: "100%",
                height: 600
              }}
            />
          </Grid>
          {/* Right: Text content */}
          <Grid size={{ xs: 12, sm: 6, xl: 6 }}>
            <Typography variant="h3" gutterBottom style={{color: '#1D546D'}}>
              Our Story
            </Typography>
            <Typography variant="h5" paragraph sx={{ lineHeight: 2.0, color: '#456882', fontWeight: 'bold' }}>
                                      Navigating the Future of Marine Systems with Confidence
                        </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: '#456882', fontWeight: 'normal' }}>
                Founded in 2015, Marine Innovation has been transforming maritime operations through cutting-edge navigation and communication solutions. We empower shipping companies to optimize efficiency across all operational levels, from fleet management to individual vessel performance.
  </Typography>
  <br/>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: '#456882', fontWeight: 'normal' }}>
  Our commitment to excellence is demonstrated through our ISO 45001 (Occupational Health & Safety) and ISO 9001 (Quality Management) certifications, ensuring we deliver reliable, world-class solutions that meet the highest industry standards.
  </Typography>
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
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: '#456882', fontWeight: 'normal' }}>
            Marine Innovation is committed to reducing maritime accidents by 3% by year 2030 through smarter navigation, integrated systems, real-time data intelligence, and enhanced crew training—ensuring safer seas, stronger decision-making, and a more resilient global maritime ecosystem.
          </Typography>
          
        </Grid>
        <Grid size={{ xs: 12, sm: 6, xl: 6 }}>
          <Box
            component="img"
            src="/images/about_2.png" // replace with your image path
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
            src="/images/about_3.png" // replace with your image path
            alt="Sample"
            sx={{
              width: "100%",
            }}
          />
        </Grid>
        {/* Right: Text content */}
        <Grid size={{ xs: 12, sm: 6, xl: 6 }}>
          <Typography variant="h3" gutterBottom style={{color: '#1D546D'}}>
            Our Vision
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: '#456882', fontWeight: 'normal' }}>
            Marine Innovation aims to be a leading provider of Innovative technological solutions to the Maritime Industry through its wide range of products and services offerings to the shipping companies globally. 

          </Typography>

    
        </Grid>
      </Grid>
    </Container>
    </>
    // </Paper>
  );
}
