import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import emailjs from "@emailjs/browser";



export default function ContactForm() {

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

    const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test")

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
        }
      );
  };


  return (
    <Paper
      sx={{
        mx: "auto",
        mt: 4,
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
        height: '40rem'
      }}
    >

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        {/* Name Field */}
        <TextField
          label="Name"
          onChange={handleChange}
          variant="outlined"
          required
          style={{marginTop: 20}}
          name="from_name"
        margin="normal"
        value={formData.from_name}
        />

        {/* Contact Field */}
        {/* <TextField
          label="Contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          variant="outlined"
          required
        /> */}

        {/* Contact Field */}
        <TextField
          label="Email"
          name="from_email"
          onChange={handleChange}
          variant="outlined"
          required
          margin="normal"
        value={formData.from_email}
        type="email"
        />

        {/* Message Field */}
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          variant="outlined"
          multiline
          rows={12}
          required
        />

        {/* Submit Button */}
        <Button type="submit" variant="contained" style={{backgroundColor: '#B31312'}}>
          Send your Query 
          <SendIcon style={{marginLeft: 10}} />
        </Button>
      </Box>
    </Paper>
  );
}
