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
import DetailsCard from '../util/DetailsCard';
import { useLocation } from 'wouter';



const productsData = [
  {
    id: 1,
    title: "Compliance Made Easy",
    image: "/images/b1.png",
    description: `Introduction
With stricter maritime safety regulations globally, having a compliant ECDIS isn’t a choice—it’s a mandate. Wärtsilä ECDIS ticks every box and adds real-time operational advantages.
Meeting the Mandate
Wärtsilä’s ECDIS complies with:
•	SOLAS requirements
•	IHO S-52 and S-64 testing standards
•	Type-approved under IEC 61174
Beyond Compliance
Unlike older systems that simply fulfill obligations, Wärtsilä ECDIS offers value-added functionalities such as route validation, ENC autoloading, and voyage risk alerts—all contributing to a safer, more efficient bridge.
Training and Support
Wärtsilä offers a wide range of training modules—both on-site and e-learning—ensuring crew can maximize every function of the ECDIS safely and confidently.
Conclusion
Wärtsilä ECDIS isn’t just built for compliance—it’s engineered for superior operational control, safety, and support.
`
  },
  {
    id: 2,
    title: "Why Shipowners Are Switching to Wärtsilä ECDIS for ROI at Sea",
    image: "/images/b2.jpg",
    description: `Opening Profit margins in shipping are tight. One overlooked area of cost-saving? Your ECDIS. Shipowners making the switch to Wärtsilä are seeing better ROI—here’s how.
Lower Fuel Costs with Smarter Routing
Wärtsilä ECDIS supports voyage optimization by analyzing environmental data, weather forecasts, and traffic lanes to reduce fuel burn.
Maintenance Savings
With remote troubleshooting, automatic updates, and fewer hardware failures, Wärtsilä ECDIS keeps operational costs low and uptime high.
Faster Crew Onboarding
Its user-friendly design reduces training time and error rates, meaning fewer delays and more efficient voyages.
Conclusion
Wärtsilä ECDIS is more than a piece of technology—it’s a business investment that delivers returns across efficiency, safety, and compliance.

`
  },
  {
    id: 3,
    title: "Wärtsilä ECDIS: Charting a New Era in Smart Navigation",
    image: "/images/b3.png",
    description: `Introduction
In today’s maritime industry, precision and situational awareness are not luxuries—they’re necessities. The Wartsila ECDIS (Electronic Chart Display and Information System) transforms how vessels navigate, providing a seamless blend of safety, compliance, and user-focused technology.
Unpacking Wärtsilä ECDIS
Wärtsilä ECDIS isn’t just another navigation system—it’s an intelligent assistant at sea. Offering real-time chart updates, route planning, and collision avoidance capabilities, this system goes beyond IMO compliance to enhance operational efficiency.
Key Features:
•	Intuitive UI with customizable overlays
•	Seamless integration with radar, AIS, and sensors
•	Global ENC support with auto-updating
•	Route optimization for fuel efficiency
Smart Benefits for Smarter Ships
With data-driven decision-making becoming the new norm, Wärtsilä ECDIS gives crew members access to analytics that reduce risks and fuel costs. The system also supports remote diagnostics and updates, cutting down on downtime.
Conclusion
In an age where digital navigation is rapidly evolving, Wärtsilä ECDIS leads the way with precision, safety, and operational intelligence.
Introduction
In today’s maritime industry, precision and situational awareness are not luxuries—they’re necessities. The Wartsila ECDIS (Electronic Chart Display and Information System) transforms how vessels navigate, providing a seamless blend of safety, compliance, and user-focused technology.
Unpacking Wärtsilä ECDIS
Wärtsilä ECDIS isn’t just another navigation system—it’s an intelligent assistant at sea. Offering real-time chart updates, route planning, and collision avoidance capabilities, this system goes beyond IMO compliance to enhance operational efficiency.
Key Features:
•	Intuitive UI with customizable overlays
•	Seamless integration with radar, AIS, and sensors
•	Global ENC support with auto-updating
•	Route optimization for fuel efficiency
Smart Benefits for Smarter Ships
With data-driven decision-making becoming the new norm, Wärtsilä ECDIS gives crew members access to analytics that reduce risks and fuel costs. The system also supports remote diagnostics and updates, cutting down on downtime.
Conclusion
In an age where digital navigation is rapidly evolving, Wärtsilä ECDIS leads the way with precision, safety, and operational intelligence.
`
  },
  {
    id: 4,
    title: "The Digital Helm: How ECDIS Is Revolutionizing Modern Maritime Navigation",
    image: "/images/Fe.jpg",
    description: `🔹 What if your ship’s compass could think, talk, and warn you before danger ever appeared on the horizon?
Welcome aboard the future of smart navigation: ECDIS.
In a world where ships are getting smarter and oceans busier, the Electronic Chart Display and Information System (ECDIS) is no longer just a compliance tool — it's the digital heart of the bridge.

🧭 What Is ECDIS, Really?
Think of ECDIS as Google Maps for ships — only supercharged.
It doesn’t just replace paper charts. It integrates:
📍 AIS (Automatic Identification System)
🌦️ Real-time weather overlays
⚓ Predictive route planning
📡 Radar and sensor data
It’s like having an AI-powered navigator on board 24/7.

🌊 From Compliance to Intelligence
ECDIS began as an IMO regulation tool. Now? It’s a strategic advantage:
✅ Live ENC updates
✅ Smart fuel-optimized routing
✅ Integrated collision & grounding alerts
✅ Real-time weather intelligence
✅ Automated safety compliance

💡 Why Maritime Professionals Should Care
ECDIS is more than a tool — it’s a game changer for anyone serious about maritime efficiency and safety:
✔️ Boosts situational awareness
✔️ Lowers operational costs
✔️ Minimizes human error
✔️ Improves reporting accuracy
✔️ Builds confidence on the bridge

📈 Charting the Future
We’re no longer navigating by stars — we’re navigating by smart data.
ECDIS is at the core of the digital maritime transformation, helping vessels sail safer, cleaner, and smarter.
❗The question isn’t “Do I need ECDIS?”
The question is — can you afford to sail without it?

📢 Join the Conversation
Are you using ECDIS on your vessels? How has it changed your experience on the bridge?
Let’s navigate this discussion together 

#ECDIS #MaritimeInnovation #SmartShipping #MarineTechnology #AIS #ENC #ShipNavigation #DigitalBridge #MaritimeSafety #BridgeSystems #FleetManagement #IMO #SOLAS #MarineElectronics #SmartNavigation
.
`
  }
];

const Promotions = ({ref}) => {

  const [, setLocation] = useLocation();

    return (
        <Container sx={{py: 4}} ref={ref}>
            <h1 style={{marginTop: '3rem', color: '#1D546D', textAlign: 'center'}}>NAVEK Speaks</h1>
            <p style={{lineHeight: 1.6, textAlign: 'center', fontWeight: 'bold', color: '#456882'}}>Explore More </p>
            <Grid container spacing={2} marginTop={'3rem'}>
                {productsData.slice(0, 3).map((detailsCardItem) => <DetailsCard detailItem={detailsCardItem} />)}
            </Grid>
            <CardActions sx={{ justifyContent: "center" }}>
                <Button onClick={() => setLocation('/postings')} variant="contained" style={{backgroundColor: '#456882', borderWidth: 3, fontWeight: 'bold', marginTop: '6rem'}}>{`View More Postings >`}</Button>
            </CardActions>
        </Container>
    );
}

export default Promotions;