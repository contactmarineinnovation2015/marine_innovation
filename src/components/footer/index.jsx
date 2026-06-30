import React from "react";
import { Box, Typography, Link, Stack, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useLocation } from "wouter";

export default function Footer() {
   const [, setLocation] = useLocation()
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0F2854",
        color: "white",
        py: 4,
        px: { xs: 2, sm: 6 },
        mt: "auto",
        marginTop: '8rem'
      }}
    >
      {/* Links section */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        spacing={4}
        mb={2}
        alignItems="center"
      >
        <Link onClick={()=>setLocation("/")} href="#" color="inherit" underline="hover">Home</Link>
        <Link onClick={()=>setLocation("/about-us")} href="#" color="inherit" underline="hover">About Us</Link>
        <Link href="/products" color="inherit" underline="hover">Products</Link>
        <Link href="/services" color="inherit" underline="hover">Services</Link>
        <Link href="/contact-us" color="inherit" underline="hover">Contact</Link>
      </Stack>

      {/* Social icons */}
      <Stack direction="row" justifyContent="center" spacing={2} mb={2}>
        <IconButton color="inherit" ><LinkedInIcon onClick={()=>window.open("https://www.linkedin.com/company/marine-innovation","_blank")} /></IconButton>
        <IconButton color="inherit" ><TwitterIcon onClick={()=>window.open("https://x.com/Marinov_sg","_blank")} /></IconButton>
        <IconButton color="inherit" ><InstagramIcon onClick={()=>window.open("https://www.instagram.com/marine.innovation/","_blank")} /></IconButton>
      </Stack>

      {/* Copyright */}
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} Marine Innovation . All rights reserved.
      </Typography>
    </Box>
  );
}
