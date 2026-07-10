import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useLocation } from "wouter";

const pages = [
  "Home",
  "About Us",
  "Products",
  "Services",
  "NAVÈK Speaks",
  "Partners",
  "Team",
  "Contact Us",
];

function NavBar({ onNavigate, refs }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [, setLocation] = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const pageRefMap = {
    Home: refs.homeRef,
    "About Us": refs.aboutRef,
    Products: refs.servicesRef,
    Services: refs.servicesRef,
    "NAVÈK Speaks": refs.promotionsRef,
    Partners: refs.header2Ref,
    Team: refs.header3Ref,
    "Contact Us": refs.contactRef,
  };

  const navHandler = (page) => {
    const ref = pageRefMap[page];

    if (page === "About Us") {
      setLocation("/about-us");
    } else if (page === "Home") {
      setLocation("/");
    } else if (page === "Products") {
      setLocation("/products");
    } else if (page === "NAVÈK Speaks") {
      setLocation("/postings");
    } else if (page === "Partners") {
      setLocation("/partners");
    } else if (page === "Contact Us") {
      setLocation("/contact-us");
    } else if (page === "Services") {
      setLocation("/services");
    } else if (page === "Team") {
      setLocation("/team?allMembers=true");
    } else if (ref) {
      onNavigate(ref);
    }

    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "none",
        borderBottom: "none",
        backgroundImage: "none",
        height: 90,
      }}
    >
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Toolbar
          disableGutters
          sx={{
            height: "100%",
            minHeight: "90px !important",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src="/images/MI imp.png"
            alt="Logo"
            onClick={() => setLocation("/")}
            sx={{
              height: 50,
              display: "block",
              cursor: "pointer",
              mr: 3,
            }}
          />

          {/* Mobile Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
              alignItems: "center",
              height: "100%",
            }}
          >
            <IconButton onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon sx={{ color: "#000" }} />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => navHandler(page)}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
              height: "100%",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => navHandler(page)}
                sx={{
                  height: "100%",
                  px: 2,
                  color: "#000",
                  fontWeight: 700,
                  textTransform: "none",
                  borderRadius: 0,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;