"use client"
import React from 'react'
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';


function Download() {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.between(0, 600)); 
  const isSm = useMediaQuery(theme.breakpoints.between(600, 900)); 

  return (
    <Box
      sx={{
        height: '600px', 
        backgroundColor:{
          xs:'#252B42' ,
          sm:'#252B42'
        },
        backgroundImage: {  
          md:'url(/images/Download-Background.png)'
        },
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        color: 'white', 
        textAlign: 'center', 
        flexDirection: 'column',
        padding: 2, 
      }}
    >
      <Box sx={{ color:"#FFFFFF"}}>
        <Typography variant='h1' sx={{ fontSize: { xs: '36px', sm: '48px', md: '58px' }, fontWeight: 700 }}>
          Download the App now.
        </Typography>
        <Typography variant='h2' gutterBottom sx={{ fontSize: { xs: '18px', sm: '24px' }, fontWeight: 500 , color:{xs:'#BDBDBD',sm:'#BDBDBD',md:'#FFFFFF'}}}>
          
          {isXs
          ? 'Most calendars are designed for teams.' 
          : isSm
          ? 'Most calendars are designed for teams.' 
          : 'Available on your favorite store. Start your premium experience now'} 
        </Typography>
      </Box>
      
      <Box sx={{ mt: 2, gap:'30px' , display:'flex' }}>
        <Button variant="contained" color="primary" sx={{ mr: 1, backgroundColor:'#FA4A0C', textTransform:'none', padding: '10px 20px', fontSize:'16px'}}>
        {isXs
          ? 'Buy now' 
          : isSm
          ? 'Buy now' 
          : 'PlayStore'}
          
        </Button>
        <Button variant="outlined" sx={{ textTransform:'none', padding: '10px 20px' , fontSize:'16px' , color:{xs:'#FA4A0C' , sm:'#FA4A0C' , md:'#FFFFFF'}, borderColor:{xs:'#FA4A0C' , sm:'#FA4A0C' , md:'#FFFFFF'} }}>
        {isXs
          ? 'Try for free' 
          : isSm
          ? 'Try for free' 
          : 'App Store'}
        </Button>
      </Box>
    </Box>
  )
}

export default Download