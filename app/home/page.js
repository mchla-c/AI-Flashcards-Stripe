'use client'

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Grid } from '@mui/material';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import Layout from '../api/components/layout';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';

export default function Home() {
  return (
    <Layout>
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

      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', my: 4 }} padding={6}>
        <Typography variant="h2" component="h1" gutterBottom fontWeight='bold'>
          Welcome to Flash AI
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          The easiest way to create flashcards from your text.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }} href="/generate">
          Get Started
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

      {/* Pricing Section */}
      <Box sx={{ my: 6, textAlign: 'center' }} padding={2}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight='bold'>Pricing</Typography>
        <Grid container spacing={2} justifyContent="center" padding={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" fontWeight='medium'>Basic Plan</Typography>
            <Typography sx={{my: 1}}>$0/month</Typography>
            <Button variant="contained" color="primary">
              Choose Plan
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" fontWeight='medium'>Pro Plan</Typography>
            <Typography sx={{my: 1}}>$10/month</Typography>
            <Button variant="contained" color="primary">
              Choose Plan
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
    </Layout>
  );
}

