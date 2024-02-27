import { Button, Stack, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  let [categary,setCategary] = useState('')
  let [rname,setRname] = useState('')
  let [dname,setDname] = useState('')
  let [price,setPrice] = useState('')
  let [quality,setQuality] = useState('')
  let [description,setDescription] = useState('')
  let [thumbnail,setThumbnail] = useState('')
  let [Rating,setRating] = useState('')
  let Navigate = useNavigate()
  let but1 = () =>{
    axios.post('http://localhost:3000/Employees',{categary,rname,dname,price,quality,description,thumbnail,Rating})
    Navigate('/')
  }
  return (
    <Stack sx={{height:'91vh',width:'100%',alignItems:'center',justifyContent:'center',bgcolor:'#E1E5F2'}}>
        <Stack spacing={1} sx={{width:'40%',bgcolor:'#BFDBF7',p:'5vh 3.5vw',borderRadius:'10px'}}>

            <TextField  value={categary} onChange={(e)=>{setCategary(e.target.value)}} label='catrgary'/>
            <TextField  value={rname} onChange={(e)=>{setRname(e.target.value)}} label='Restorent Name'/>
            <TextField value={dname} onChange={(e)=>{setDname(e.target.value)}} label='Dish Name'/>
            <TextField value={price} onChange={(e)=>{setPrice(e.target.value)}} label='Price'/>
            <TextField value={quality} onChange={(e)=>{setQuality(e.target.value)}} label='Quality'/>
            <TextField value={description} onChange={(e)=>{setDescription(e.target.value)}} label='Description'/>
            <TextField value={thumbnail} onChange={(e)=>{setThumbnail(e.target.value)}} label='Thumbnail'/>
            <TextField value={Rating} onChange={(e)=>{setRating(e.target.value)}} label='Rating'/>
            <Button onClick={but1} sx={{height:'6vh'}} variant='contained'>Add Dish</Button>
        </Stack>
    </Stack>
  )
}

export default Add