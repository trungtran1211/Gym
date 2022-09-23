import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`} >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button sx={{ml: '21px', color: '#fff', background: '#ffa9a9', fontSize: '14px', 
        borderRadius: '20px', textTransform: 'capitalize',
        '&:hover': {color: '#ffa9a9'}
        }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ml: '21px', color: '#fff', background: '#fcc757', fontSize: '14px', 
        borderRadius: '20px', textTransform: 'capitalize',
        '&:hover': {color: '#fcc757'}
        }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml="21px" color="#000" fontWeight="bold" fontSize="24px" mt="11px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard