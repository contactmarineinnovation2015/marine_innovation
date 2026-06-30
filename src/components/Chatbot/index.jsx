import React, { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Markdown from 'react-markdown'
import LinearProgress from '@mui/material/LinearProgress';
import ReplayIcon from '@mui/icons-material/Replay';
import { IconButton } from "@mui/material";
import KnowledgeBase from './knowledgeBase.json';

const chatBotAccessKey = process.env.REACT_APP_CHAT_BOT_API_KEY;

/**
 * RAG CHATBOT WIDGET (SEMANTIC SEARCH — FRONTEND ONLY)
 * ----------------------------------------------------
 * Stable version with:
 * - Proper model initialization
 * - Knowledge base embedding precomputation
 * - Loading guards
 * - Cosine similarity retrieval
 */

export default function WebsiteChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I am NAVÈK. I am here to assist you. How can I help you today?",
    },
  ]);
  const [replyLoading, setReplyLoading] = useState(false);
  const [retry, setRetry] = useState(false);
  const [input, setInput] = useState("");
  const [embedder, setEmbedder] = useState(null);
  const [kbEmbeddings, setKbEmbeddings] = useState([]);
  const [modelReady, setModelReady] = useState(false);

  const toggleChat = () => setOpen(!open);
async function generateAnswer(question) {
    if (!question.trim()) return;
    

    const prompt = `${KnowledgeBase[1].content}
    Based upon the above mentioned details. Answer the following Question (use bullet points wherever required):
    ${question}
    `;

    const currentQuestion = question;

    setReplyLoading(true);
    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "poolside/laguna-m.1:free",
          store: true,
          messages: [{ role: "user", content: prompt }],
        },
        {
          headers: {
            Authorization: `Bearer ${chatBotAccessKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botReply = response.data.choices[0].message.content;
      console.log(response.data.choices[0].message.content);
      setReplyLoading(false);
      setRetry(false);
      return botReply;
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setReplyLoading(false);
      setRetry(true);
      return "Looks like NAVÈK is tired.. Let's try again!"
    }
  }
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
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
      <Fab
        onClick={toggleChat}
        sx={{ position: "fixed", backgroundColor:"#F9F5EB", bottom: 70, right: 20, zIndex: 9999 }}
      >
        
            <img width={300} height={200} src="/images/chat.png"></img> 
        
      </Fab>

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
          <Box sx={{ bgcolor: "#0F2854", color: "white", p: 1 }}>
            <Typography variant="subtitle1">NAVÈK Assistant</Typography>
          </Box>

          <Box sx={{ flex: 1, overflowY: "auto", p: 1, bgcolor: "#F9F5EB" }}>
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
                      msg.sender === "user" ? "#0F2854" : "grey.300",
                    color: msg.sender === "user" ? "white" : "black",
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
            {replyLoading ? <LinearProgress color="inherit" /> : <></>}
          </Box>

          <Box sx={{ display: "flex", backgroundColor:"#F9F5EB", gap: 1, p: 1 }}>
            <TextField
              size="small"
              fullWidth
              value={input}
              placeholder="Type a message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button style={{backgroundColor:"#0F2854"}} variant="contained" onClick={sendMessage}>
              Send
            </Button>
          </Box>
        </Paper>
      )}
    </>
  );
}