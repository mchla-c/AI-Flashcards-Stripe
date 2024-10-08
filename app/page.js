'use client'

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Grid, Container, Card, CardContent } from '@mui/material';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import Layout from './api/components/layout';
import BoltIcon from '@mui/icons-material/Bolt';
import { Kanit } from 'next/font/google';
import { createTheme,ThemeProvider } from "@mui/material/styles"
import CssBaseline from '@mui/material/CssBaseline';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';

export const theme = createTheme({ 
  palette: {
    primary: {
      main: '#921a40',
    },
    secondary: {
      main: '#c75b7a',
    },
    background: {
      paper: '#f4d9d0',
    },
  },
  typography: {
    fontFamily: 'Kanit',
    h5: {
      color: '#A74766'
    },
    h4: {
      color: '#921A40'
    },
    h2: {
      color: '#66122C'
    },
  },
})


const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div>
      {/* Header and Navigation
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">Login</Button>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar> */}
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <BoltIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#F4D9D0',
              textDecoration: 'none',
            }}
          >
            Flash AI
          </Typography>
        </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', my: 4 }} padding={6}>
        <Typography variant="h2" component="h1" gutterBottom fontWeight='bold' >
          Welcome to Flash AI
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          The easiest way to create flashcards from your text.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }} href="/sign-up">
          Try it for Free
        </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ my: 6, textAlign: 'center'}} padding={2}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight='bold'>Features</Typography>
        <Grid container spacing={2} padding={3}>
          <Grid item xs={12} sm={6} md={4}>
            {/* <Card sx={{ minWidth: 275 }}>
            <CardContent> */}
              <KeyboardIcon style={{fill: '#C75B7A'}} fontSize='large'/>
              <Typography variant="h5" sx={{my: 1}} fontWeight='medium'>Easy Text Input</Typography>
              <Typography sx={{my: 2}}>Simply input your text and let our software do the rest. Creating flashcards has never been easier.</Typography>
            {/* </CardContent>
            </Card> */}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {/* <Card sx={{ minWidth: 275 }}>
            <CardContent> */}
              <AutoAwesomeIcon style={{fill: '#C75B7A'}} fontSize='large'/>
              <Typography variant="h5" sx={{my: 1}} fontWeight='medium'>Smart Flashcards</Typography>
              <Typography sx={{my: 2}}>Our AI intelligently breaks down your text into concise flashcards, perfect for studying.</Typography>
            {/* </CardContent>
            </Card> */}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {/* <Card sx={{ minWidth: 275 }}>
            <CardContent> */}
            <DevicesOtherIcon style={{fill: '#C75B7A'}} fontSize='large'/>
             <Typography variant="h5" sx={{my: 1}} fontWeight='medium'>Accessible Anywhere</Typography>
              <Typography sx={{my: 2}}>Access your flashcards from any device, at any time. Study on the go with ease.</Typography>
            {/* </CardContent>
            </Card> */}
          </Grid>
        </Grid>
      </Box>

      {/* Pricing Section
      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom>Pricing</Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Basic Plan</Typography>
            <Typography>$0/month</Typography>
            <Button variant="contained" color="primary">
              Choose Plan
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Pro Plan</Typography>
            <Typography>$10/month</Typography>
            <Button variant="contained" color="primary">
              Choose Plan
            </Button>
          </Grid>
        </Grid>
      </Box> */}
    </div>
    </ThemeProvider>
  );
};

export default HomePage;