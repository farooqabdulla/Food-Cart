import { Button, Card, CardContent, CardMedia, Rating, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const View = () => {
  let [content, setContent] = useState([])
  axios.get('http://localhost:3000/Employees')
    .then((response) => {
      setContent(response.data)
    })
  let handleDelete = (s) => {
    axios.delete(`http://localhost:3000/Employees/${s}`)
  }
  return (
    <Stack sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {
        content.map((x) => {
          return (
            <Card sx={{ width: '25vw', ml: '12vh', mt: '4vh' }} key={x.id}>
              <CardMedia image={x.thumbnail} sx={{ height: '30vh', width: '100%' }} />
              <CardContent>
                <Typography variant='h6' sx={{ fontWeight: '600' }} >{x.dname}</Typography>
                <Stack direction='row' sx={{ justifyContent: 'space-between'}}>
                  <Typography>Rs. {x.price}</Typography>
                  <Rating name="read-only" value={x.Rating} readOnly />
                </Stack>
                <Typography sx={{fontSize:'0.9vw',mb:'1vh'}} variant='body2'>Hotel : {x.rname}</Typography>
                <Button variant='outlined' component={Link} to={`/edit/${x.id}`}>Edit</Button>
                <Button color='warning' sx={{ ml: '1vw' }} variant='outlined' onClick={() => { handleDelete(x.id) }}>Delete</Button>
              </CardContent>
            </Card>
          )
        })
      }

    </Stack>
  )
}

export default View