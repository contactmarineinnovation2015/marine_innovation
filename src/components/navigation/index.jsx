import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
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

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar({ onNavigate, refs }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [, setLocation] = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // ✅ Page → Ref mapping
  const pageRefMap = {
    "Home": refs.homeRef,
    "About Us": refs.aboutRef,
    "Products": refs.servicesRef,
    "Services": refs.servicesRef,
    "NAVÈK Speaks": refs.promotionsRef,
    "Partners": refs.header2Ref,
    "Team": refs.header3Ref,
    "Contact Us": refs.contactRef,
  };

  // ✅ Single navigation handler (desktop + mobile)
  const navHandler = (page) => {
    const ref = pageRefMap[page];
    if(page === 'About Us') {
      setLocation('/about-us')
    }
    else if(page === 'Home') {
      setLocation('/')
    }
    else if(page === 'Products') {
      setLocation('/products')
    }
    else if(page === 'NAVÈK Speaks') {
      setLocation('/postings');
    }
    else if(page === 'Partners') {
      setLocation('/partners')
    }
    else if(page === 'Contact Us') {
      setLocation('/contact-us')
    }
    
    else if(page === 'Services') {
      setLocation('/services')
    }
    else if(page === 'Team') {
      setLocation('/team')
    }
    else if (ref) {
      onNavigate(ref);
    }
    setAnchorElNav(null); // close mobile menu
  };

  return (
<AppBar position="sticky" sx={{ backgroundColor: "#0F2854", opacity: 0.88 }}>
  <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo - Desktop */}
          
           <img
  src="/images/MI imp.png"
  alt="Logo"
  onClick={() => setLocation("/")}
  style={{
    height: 54,
    marginRight: 20,
    cursor: "pointer",
    transition: "transform .3s ease",
  }}
/>
          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none", justifyContent: 'flex-end' } }}>
            <IconButton onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => navHandler(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
            }}
          >
            LOGO
          </Typography> */}

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", justifyContent: 'end' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => navHandler(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* User Menu */}
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
