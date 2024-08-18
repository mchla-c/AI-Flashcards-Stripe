import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Button, Container, Typography, Toolbar, Box, Grid } from "@mui/material";
import Head from 'next/head';

export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create a flashcard from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>Flashcard SaaS</Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">Login</Button>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{my: 6, textAlign: 'center',}}>
        <Typography variant="h4">Pricing</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} ms={4}>
            <Box sx={{p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 2,}}>
              <Typography variant="h6">Basic Pricing</Typography>
              <Typography variant="h5" color="red">$5 / Month</Typography>
              <Typography>Access to basic flashcard features and limited storage.</Typography>
              <Button variant="contained" color="primary">Choose Basic</Button>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} ms={4}>
            <Box sx={{p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 2,}}>
              <Typography variant="h6">Premium Pricing</Typography>
                <Typography variant="h5" color="red">$10 / Month</Typography>
                <Typography>Access to exculsive flashcard features and unlimited storage.</Typography>
                <Button variant="contained" color="primary">Choose Basic</Button>
              </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}