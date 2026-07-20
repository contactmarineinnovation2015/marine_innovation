import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import Container from '@mui/material/Container';
import ContactForm from '../util/form';
import Box from '@mui/material/Box';

const detailsCardItems = [
  {
    id: 1,
    title: "Make a Call",
    contacts: [
      {
        label: "Sales",
        value: "+65 86164861",
        href: "tel:+6586164861"
      },
      {
        label: "Service",
        value: "+65 93913925",
        href: "tel:+6593913925"
      }
    ]
  },
  {
    id: 2,
    title: "Send Email",
    contacts: [
      {
        label: "Sales",
        value: "sales@marinov.com.sg",
        href: "mailto:sales@marinov.com.sg"
      },
      {
        label: "Service",
        value: "service@marinov.com.sg",
        href: "mailto:service@marinov.com.sg"
      },
      {
        label: "Inquiry",
        value: "info@marinov.com.sg",
        href: "mailto:info@marinov.com.sg"
      }
    ]
  },
  {
    id: 3,
    title: "Visit our Office",
    desc1: "194, Pandan Loop, #06-01 196 Pantech Business Hub",
    desc2: "Singapore 128383"
  }
];

const detailsCard = (detailItem) => {
  return (
    <Grid display={'flex'} justifyContent={'center'} size={{ xs: 12 }}>
      <Card
        sx={{
          backgroundColor: '#fff',
          borderRadius: 3,
          width: '75%',
          marginTop: 4,
          padding: 2,
          boxShadow: 3
        }}
      >
        <CardContent>
          {detailItem.id === 1 ? (
            <CallIcon fontSize="large" sx={{ color: "#000" }} />
          ) : detailItem.id === 2 ? (
            <EmailIcon fontSize="large" sx={{ color: "#000" }} />
          ) : (
            <LocationOnIcon fontSize="large" sx={{ color: "#000" }} />
          )}

          <Typography
            gutterBottom
            variant="h5"
            sx={{
              color: "#000",
              mt: 2
            }}
          >
            {detailItem.title}
          </Typography>

          {detailItem.contacts ? (
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                lineHeight: 2
              }}
            >
              {detailItem.contacts.map((contact, index) => (
                <div key={index}>
                  <strong>{contact.label}:</strong>{" "}
                  <a
                    href={contact.href}
                    style={{
                      color: "#1D546D",
                      textDecoration: "none",
                      fontWeight: 500
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.textDecoration = "underline")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.textDecoration = "none")
                    }
                  >
                    {contact.value}
                  </a>
                </div>
              ))}
            </Typography>
          ) : (
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                lineHeight: 2
              }}
            >
              {detailItem.desc1}
              <br />
              {detailItem.desc2}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

const Map = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: 350, md: 500 },
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        marginTop: 10
      }}
    >
      <iframe
        title="Marine Innovation Location"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7747040194554!2d103.75187299999999!3d1.3105118999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1abfd45702ab%3A0xe5569f7630f72ef7!2s194%20Pandan%20Lp%2C%20%2306-01%20196%20Pantech%20Business%20Hub%2C%20Singapore%20128383!5e0!3m2!1sen!2sin!4v1783661312705!5m2!1sen!2sin"
      />
    </Box>
  );
};

const ContactUs = ({ ref }) => {
  return (
    <Container sx={{ py: 4 }} ref={ref}>
      <Typography
        variant="h3"
        sx={{
          mt: 6,
          color: "#1D546D",
          textAlign: "center",
          fontWeight: 700
        }}
      >
        Search. Click. Connect.
      </Typography>

      <Grid container justifyContent="center" mt={6} spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <ContactForm />
        </Grid>

        <Grid container size={{ xs: 12, md: 4 }}>
          {detailsCardItems.map((item) => (
            <Grid key={item.id} size={{ xs: 12 }}>
              {detailsCard(item)}
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Map />
    </Container>
  );
};

export default ContactUs;