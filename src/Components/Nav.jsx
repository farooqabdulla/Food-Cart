import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Nav = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar sx={{ justifyContent: 'space-between',bgcolor:'#1F7A8C' }}>
        <Stack direction='row' spacing={1}>
          <Typography variant='h3'> <RestaurantIcon sx={{fontSize:'2.2vw'}}/> Food</Typography>
          <Typography sx={{color:'#022B3A',fontWeight:'600'}} variant='h3'>Cart</Typography>
        </Stack>
        <Stack direction='row'>
          <Button component={Link} to='/' color='inherit'>View</Button>
          <Button component={Link} to='/add' color='inherit'>Add Product</Button>
          {/* <Button component={Link} to='/edit' color='inherit'>Edit Product</Button> */}
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Nav