import React, { useState } from "react";
import { TextField, Button, MenuItem, Box, Typography } from "@mui/material";

const RegistrationForm = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    campus: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    alert("Registration Successful!");
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "20px auto",
        padding: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          type="email"
          required
        />

        {/* Password Field */}
        <TextField
          fullWidth
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          type="password"
          required
        />

        {/* Username Field */}
        <TextField
          fullWidth
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          margin="normal"
          required
        />

        {/* Campus Selection Dropdown */}
        <TextField
          fullWidth
          select
          label="Campus"
          name="campus"
          value={formData.campus}
          onChange={handleChange}
          margin="normal"
          required
        >
          <MenuItem value="North Campus">North Campus</MenuItem>
          <MenuItem value="South Campus">South Campus</MenuItem>
          <MenuItem value="East Campus">East Campus</MenuItem>
          <MenuItem value="West Campus">West Campus</MenuItem>
        </TextField>

        {/* Register Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Register
        </Button>
      </form>
    </Box>
  );
};

export default RegistrationForm;
