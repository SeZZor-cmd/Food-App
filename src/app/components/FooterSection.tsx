"use client"
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function FooterSection() {
  
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.between(0, 600)); 
  const isSm = useMediaQuery(theme.breakpoints.between(600, 900)); 


  return (
    <Box sx={{display:'flex', justifyContent:'space-between', width:'90%', alignItems:'center', mx:'auto', textAlign:'center' , marginTop:'10px',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
      <Box>
      <Box
          component="img"
          src="/images/BellaOlonjeLogo.png" 
          alt="Logo"
          sx={{height:'70px' , display:{xs:'none' , sm:'none' , md:'flex'}}}
        />
      </Box>
      <Box sx={{display:'flex' , gap:'10px' , alignItems:'center'}}>
        <TwitterIcon sx={{color:'#FA4A0C' , fontSize:'40px'}}/>
        <FacebookIcon sx={{color:'#FA4A0C' , fontSize:'40px'}}/>
        <InstagramIcon sx={{color:'#FA4A0C' , fontSize:'40px'}}/>
      </Box>
      <Box>
        <Typography sx={{color:'#5C5C5C' ,fontSize:'12px' , fontWeight:'700'}}>
        {isXs
          ? 'Just type whats on your mind and well' 
          : isSm
          ? 'Just type whats on your mind and well' 
          : 'Copyright © 2020 Bella Onojie.com'} 
        </Typography>
      </Box>
    </Box>
  )
}

export default FooterSection