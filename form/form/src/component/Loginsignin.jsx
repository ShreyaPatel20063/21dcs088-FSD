import React, { useState } from 'react';
import { Button, TextField, Container, Grid, Typography, Paper } from '@mui/material';

const App = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registrationData, setRegistrationData] = useState({ username: '', password: '', confirmPassword: '' });
  const [loginErrors, setLoginErrors] = useState({});
  const [registrationErrors, setRegistrationErrors] = useState({});

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleRegistrationChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData({ ...registrationData, [name]: value });
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Validate the login form data
    const errors = {};
    if (!loginData.username) {
      alert("Username is required")
    }
    if (!loginData.password) {
      alert("Password is required")
    }
    setLoginErrors(errors);
  };

  const handleRegistrationSubmit = (event) => {
    event.preventDefault();
    // Validate the registration form data
    const errors = {};
    if (!registrationData.username) {
      alert("Username is required")
    }
    if (!registrationData.password) {
      alert("Password is required")
    } else if (registrationData.password !== registrationData.confirmPassword) {
      alert("Password and Confirm Password must match")
    }
    setRegistrationErrors(errors);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', margin: '20px auto' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h4">Login</Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={loginData.username}
                onChange={handleLoginChange}
                error={!!loginErrors.username}
                helperText={loginErrors.username}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                error={!!loginErrors.password}
                helperText={loginErrors.password}
              />
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </form>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4">Registration</Typography>
            <form onSubmit={handleRegistrationSubmit}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={registrationData.username}
                onChange={handleRegistrationChange}
                error={!!registrationErrors.username}
                helperText={registrationErrors.username}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={registrationData.password}
                onChange={handleRegistrationChange}
                error={!!registrationErrors.password}
                helperText={registrationErrors.password}
              />
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={registrationData.confirmPassword}
                onChange={handleRegistrationChange}
                error={!!registrationErrors.confirmPassword}
                helperText={registrationErrors.confirmPassword}
              />
              <Button type="submit" variant="contained" color="primary">
                Register
              </Button>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default App;
