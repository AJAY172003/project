import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./App.css";
import Stack from "@mui/material/Stack";
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const nameRegex = /^[a-zA-Z\s]+$/; // Only letters and spaces are allowed in the name
  const phoneRegex = /^[6-9]\d{9}$/; // Indian phone number format
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Basic email validation

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nameRegex.test(name)) {
      alert("Please enter a valid name.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    const formData = { savedName: name, savedEmail: email, savedPhone: phone };
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate('/new');
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "150ch",
          height: "80ch",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        },
      }}
      noValidate
      autoComplete="off"
    >

      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="column"
        useFlexGap
        flexWrap="wrap"
      >
        <TextField
          type="text"
          id="name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="standard"
        />
        <TextField
          type="tel"
          id="phone"
          label="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          variant="standard"
        />
        <TextField
          type="email"
          id="email"
          label="Email"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

export default App;
