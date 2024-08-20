'use client'

import { useEffect, useState } from 'react'
import { Container, Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import Layout from '../api/components/layout'

export default function Flashcards() {
  const { isLoaded, isSignedIn, user } = useUser()
  const [flashcardSets, setFlashcardSets] = useState([])
  const router = useRouter()

  useEffect(() => {
    async function getFlashcardSets() {
      if (!isLoaded || !isSignedIn || !user) {
        return
      }

      try {
        const userDocRef = doc(db, 'users', user.id)
        const userDocSnap = await getDoc(userDocRef)

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data()
          setFlashcardSets(userData.flashcardSets || [])
        } else {
          console.log('No flashcard sets found for this user.')
        }
      } catch (error) {
        console.error('Error fetching flashcard sets:', error)
      }
    }

    getFlashcardSets()
  }, [isLoaded, isSignedIn, user])

  const handleCardClick = (id) => {
    router.push(`/flashcard?name=${id}`)
  }

  return (
    <Layout>
      <Typography textAlign={'center'} sx={{my: 3}} variant="h4" component="h1" gutterBottom fontWeight='medium'>
          Saved Flashcards
        </Typography>
    <Container maxWidth="md">
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {flashcardSets.map((set) => (
          <Grid item xs={12} sm={6} md={4} key={set.name}>
            <Card>
              <CardActionArea onClick={() => handleCardClick(set.name)}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {set.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Layout>
  )
}
