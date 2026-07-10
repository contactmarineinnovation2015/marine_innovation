import React, { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Markdown from "react-markdown";
import LinearProgress from "@mui/material/LinearProgress";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Grow from "@mui/material/Grow";

import KnowledgeBase from "./knowledgeBase.json";

const chatBotAccessKey = process.env.REACT_APP_CHAT_BOT_API_KEY;

export default function WebsiteChatbotWidget() {
  const [showAnimatedMascot, setShowAnimatedMascot] = useState(true);
  const [open, setOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I am NAVÈK. I am here to assist you. How can I help you today?",
    },
  ]);

  const [replyLoading, setReplyLoading] = useState(false);
  const [retry, setRetry] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
  const timer = setTimeout(() => {
    setShowAnimatedMascot(false);
  }, 15000); // 15 seconds

  return () => clearTimeout(timer);
}, []);

  const toggleChat = () => {
    //setShowGreeting(false);
    setOpen(!open);
  };

  async function generateAnswer(question) {
    if (!question.trim()) return;

    const prompt = `
${KnowledgeBase[1].content}

Based upon the above mentioned details, answer the following question (use bullet points wherever required):

${question}
`;

    setReplyLoading(true);

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "poolside/laguna-m.1:free",
          store: true,
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${chatBotAccessKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botReply = response.data.choices[0].message.content;

      setReplyLoading(false);
      setRetry(false);

      return botReply;
    } catch (error) {
      console.error(error);
      setReplyLoading(false);
      setRetry(true);

      return "Looks like NAVÈK is tired... Let's try again!";
    }
  }

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const answer = await generateAnswer(input);

    const botMessage = {
      sender: "bot",
      text: answer,
    };

    setMessages((prev) => [...prev, botMessage]);

    setInput("");
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 1,
        }}
      >
        <Grow in={showGreeting} timeout={700}>
          <Paper
            elevation={8}
            sx={{
              px: 2,
              py: 1,
              bgcolor: "#ffffff",
              color: "#0F2854",
              borderRadius: "18px",
              fontWeight: 600,
              fontSize: 14,
              position: "relative",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              animation: "float 2.5s ease-in-out infinite",
              marginBottom: 0,
              transform: "translateY(0px)",
              "@keyframes float": {
                "0%": {
                  transform: "translateY(0px)",
                },
                "50%": {
                  transform: "translateY(-6px)",
                },
                "100%": {
                  transform: "translateY(0px)",
                },
              },

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-16px",
                right: "100px",
                width: 0,
                height: 0,
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "8px solid white",
              },
            }}
          >
            👋 Hey! I am NAVÈK. <br/> How can I assist you today ?
          </Paper>
        </Grow>

        <Box
        onClick={toggleChat}
        sx={{
          width: 200,
          height: 200,
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
  <img
  src={
    showAnimatedMascot
      ? "/images/mascot.gif"
      : "/images/mascot.png"
  }
  alt="NAVÈK"
  style={{
    width: "100%",
    height: "200%",
  }}
/>
</Box>
      </Box>
            {open && (
        <Paper
          elevation={6}
          sx={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: 420,
            height: 420,
            display: "flex",
            flexDirection: "column",
            borderRadius: 3,
            overflow: "hidden",
            zIndex: 9999,
          }}
        >
          {/* Header */}
          <Box
            sx={{
              bgcolor: "#0F2854",
              color: "white",
              px: 2,
              py: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle1" fontWeight={600}>
              NAVÈK Assistant
            </Typography>

            <IconButton
              size="small"
              onClick={() => setOpen(false)}
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.12)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Messages */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              p: 1,
              bgcolor: "#fff",
            }}
          >
            {messages.map((msg, i) => (
              <Box
                key={i}
                sx={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  my: 0.5,
                }}
              >
                <Box
                  sx={{
                    display: "inline-block",
                    bgcolor:
                      msg.sender === "user"
                        ? "#0F2854"
                        : "grey.300",
                    color:
                      msg.sender === "user"
                        ? "white"
                        : "black",
                    px: 1.5,
                    py: 1,
                    borderRadius: 2,
                    fontSize: 14,
                    maxWidth: "85%",
                  }}
                >
                  <Markdown>{msg.text}</Markdown>
                </Box>
              </Box>
            ))}

            {replyLoading && <LinearProgress color="inherit" />}
          </Box>

          {/* Input */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              p: 1,
              bgcolor: "#fff",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
            />

            <Button
              variant="contained"
              onClick={sendMessage}
              sx={{
                bgcolor: "#0F2854",
                "&:hover": {
                  bgcolor: "#0a1d3f",
                },
              }}
            >
              Send
            </Button>
          </Box>
        </Paper>
      )}
    </>
  );
}





// import React from "react";
// import { Grid, Box, Typography, Paper, List, ListItem, ListItemText, Container } from "@mui/material";
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
// import FactoryIcon from '@mui/icons-material/Factory';
// import SecurityIcon from '@mui/icons-material/Security';

// export default function AboutUs({ref}) {
//   return (
//     // <Paper sx={{ p: { xs: 2, sm: 4 }, maxWidth: 1200, mx: "auto", mt: 4 }}>
//     <>
//     <Container ref={ref}>
//       <Grid container justifyContent="center" spacing={5} alignItems="center" marginTop={'6rem'}>
//         {/* Left: Image */}
//         <Grid size={{ xs: 12, sm: 6, xl: 6 }}>
//           <Box
//             component="img"
//             src="/images/Ao.png" // replace with your image path
//             alt="Sample"
//             sx={{
//               width: "100%",
//               height: 600
//             }}
//           />
//         </Grid>
//         {/* Right: Text content */}
//         <Grid size={{ xs: 12, sm: 6, xl: 6 }}>
//           <Typography variant="h3" gutterBottom style={{color: '#1D546D'}}>
//             Our Story
//           </Typography>
//            <Typography variant="h5" paragraph sx={{ lineHeight: 2.0, color: '#456882', fontWeight: 'bold' }}>
//                                      Navigating the Future of Marine Systems with Confidence
//                       </Typography>
//           <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: '#456882', fontWeight: 'normal' }}>
//                Founded in 2015, Marine Innovation has been transforming maritime operations through cutting-edge navigation and communication solutions. We empower shipping companies to optimize efficiency across all operational levels, from fleet management to individual vessel performance.
// </Typography>
// <br/>
//           <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: '#456882', fontWeight: 'normal' }}>
// Our commitment to excellence is demonstrated through our ISO 45001 (Occupational Health & Safety) and ISO 9001 (Quality Management) certifications, ensuring we deliver reliable, world-class solutions that meet the highest industry standards.
// </Typography>
//         </Grid>
//       </Grid>

//       <Grid container justifyContent="center" spacing={5} alignItems="center" marginTop={'6rem'}>
//         {/* Left: Image */}
        
//         {/* Right: Text content */}
//         <Grid size={{ xs: 12, sm: 6, xl: 6 }}>
//           <Typography variant="h3" gutterBottom style={{color: '#1D546D'}}>
//             Our Mission
//           </Typography>
//           <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: '#456882', fontWeight: 'normal' }}>
//             Marine Innovation is committed to reducing maritime accidents by 3% by year 2030 through smarter navigation, integrated systems, real-time data intelligence, and enhanced crew training—ensuring safer seas, stronger decision-making, and a more resilient global maritime ecosystem.
//           </Typography>
          
//         </Grid>
//         <Grid size={{ xs: 12, sm: 6, xl: 6 }}>
//           <Box
//             component="img"
//             src="/images/Ab us.png" // replace with your image path
//             alt="Sample"
//             sx={{
//               width: "100%",
//             }}
//           />
//         </Grid>
//       </Grid>

//       <Grid container justifyContent="center" spacing={5} alignItems="center" marginTop={'6rem'}>
//         {/* Left: Image */}
//         <Grid size={{ xs: 12, sm: 6, xl: 6 }}>
//           <Box
//             component="img"
//             src="/images/Why.jpeg" // replace with your image path
//             alt="Sample"
//             sx={{
//               width: "100%",
//             }}
//           />
//         </Grid>
//         {/* Right: Text content */}
//         <Grid size={{ xs: 12, sm: 6, xl: 6 }}>
//           <Typography variant="h3" gutterBottom style={{color: '#1D546D'}}>
//             Our Vision
//           </Typography>
//           <Typography variant="body1" paragraph sx={{ lineHeight: 1.7, color: '#456882', fontWeight: 'normal' }}>
//             Marine Innovation aims to be a leading provider of Innovative technological solutions to the Maritime Industry through its wide range of products and services offerings to the shipping companies globally. 

//           </Typography>

    
//         </Grid>
//       </Grid>
//     </Container>
//     </>
//     // </Paper>
//   );
// }
