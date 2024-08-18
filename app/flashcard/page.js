'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { useSearchParams } from 'next/navigation'
import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { Container, Grid, Card, CardActionArea, CardContent, Typography, Box } from '@mui/material'

export default function Flashcard() {
  const { isLoaded, isSignedIn, user } = useUser()
  const [flashcards, setFlashcards] = useState([])
  const [flipped, setFlipped] = useState({})
  
  const searchParams = useSearchParams()
  const setName = searchParams.get('name') // Updated to match the query param key

  useEffect(() => {
    async function getFlashcardSet() {
      if (!setName || !user) return

      const setDocRef = doc(db, 'users', user.id, 'flashcardSets', setName)
      const setDocSnap = await getDoc(setDocRef)

      if (setDocSnap.exists()) {
        setFlashcards(setDocSnap.data().flashcards || [])
      } else {
        console.log('No flashcards found for this set.')
      }
    }
    getFlashcardSet()
  }, [setName, user])

  const handleCardClick = (index) => {
    setFlipped((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
            {flashcards.map((flashcard, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardActionArea onClick={() => handleCardClick(index)}>
                    <CardContent>
                      <Box
                        sx={{
                          perspective: '1000px',
                          '& > div': {
                            transition: 'transform 0.6s',
                            transformStyle: 'preserve-3d',
                            position: 'relative',
                            width: '100%',
                            height: '200px',
                            boxShadow: '0 4px 8px 0 rgba(0,0,0, 0.2)',
                            transform: flipped[index]
                              ? 'rotateY(180deg)'
                              : 'rotateY(0deg)',
                          },
                          '& > div > div': {
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backfaceVisibility: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 2,
                            boxSizing: 'border-box',
                          },
                          '& > div > div:nth-of-type(2)': {
                            transform: 'rotateY(180deg)',
                          },
                        }}
                      >
                        <div>
                          <div>
                            <Typography variant="h6"/>
                            <Typography>{flashcard.front}</Typography>
                          </div>
                          <div>
                            <Typography variant="h6"/>
                            <Typography>{flashcard.back}</Typography>
                          </div>
                        </div>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
    </Container>
  )
}
