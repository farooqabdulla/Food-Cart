import axios from 'axios'
import { Button, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  let [categary,setCategary] = useState('')
  let [rname,setRname] = useState('')
  let [dname,setDname] = useState('')
  let [price,setPrice] = useState('')
  let [quality,setQuality] = useState('')
  let [description,setDescription] = useState('')
  let [thumbnail,setThumbnail] = useState('')
  let [Rating,setRating] = useState('')
  let Navigate = useNavigate()
  
  const hello = useParams()
  let but2 = () =>{
    axios.put(`http://localhost:3000/Employees/${hello.id}`,{categary,rname,dname,price,quality,description,thumbnail,Rating})
    Navigate('/')
  }
  useEffect(()=>{
    axios.get(`http://localhost:3000/Employees/${hello.id}`)
    .then((response)=>{
      setCategary(response.data.categary)
      setRname(response.data.rname)
      setDname(response.data.dname)
      setPrice(response.data.price)
      setQuality(response.data.quality)
      setDescription(response.data.description)
      setThumbnail(response.data.thumbnail)
      setRating(response.data.Rating)
    })
  },[])
  
  return (
    <Stack sx={{height:'90vh',width:'100%',alignItems:'center',justifyContent:'center'}}>
        <Stack spacing={2} sx={{width:'40%'}}>
            <TextField value={categary} onChange={(e)=>{setCategary(e.target.value)}} label='categary'/>
            <TextField value={rname} onChange={(e)=>{setRname(e.target.value)}} label='Restorent Name'/>
            <TextField value={dname} onChange={(e)=>{setDname(e.target.value)}} label='Dish Name'/>
            <TextField value={price} onChange={(e)=>{setPrice(e.target.value)}} label='Price'/>
            <TextField value={quality} onChange={(e)=>{setQuality(e.target.value)}} label='Quality'/>
            <TextField value={description} onChange={(e)=>{setDescription(e.target.value)}} label='Description'/>
            <TextField value={thumbnail} onChange={(e)=>{setThumbnail(e.target.value)}} label='Thumbnail'/>
            <TextField value={Rating} onChange={(e)=>{setRating(e.target.value)}} label='Rating'/>
            <Button onClick={but2}  variant='contained'>Update</Button>
        </Stack>
    </Stack>
  )
}

export default Edit