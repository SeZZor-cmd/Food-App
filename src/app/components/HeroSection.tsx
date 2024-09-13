"use client";
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function HeroSection() {
  return (
    <Box
      sx={{
        height: '600px', 
        backgroundImage: {
          sm:'none',
          md:'url(/images/Hero-Background.png)', 
        },
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems:'center',
        color: 'white', 
        textAlign: 'center', 
        flexDirection: 'column',
        padding: 2, 
      }}
    >
      <Box sx={{ color: {xs: "#252B42" , sm:"#252B42" , md:"#FFFFFF"}}}>
        <Typography variant="h3" sx={{ fontSize: { xs: '16px', sm: '20px' }, fontWeight: 700 ,color: {xs: "#737373" , sm:"#737373" , md:"#FFFFFF"} }}>
          Food App
        </Typography>
        <Typography variant='h1' sx={{ fontSize: { xs: '36px', sm: '48px', md: '58px' }, fontWeight: 700 , marginTop:'10px' }}>
          Why stay hungry when 
          you can order from Bella Onojie
        </Typography>
        <Typography variant='h2' sx={{ fontSize: { xs: '18px', sm: '24px' }, fontWeight: 500 , color: {xs: "#737373" , sm:"#737373" , md:"#FFFFFF"} , marginTop:'10px'}}>
          Download Bella Onojie’s food app now on
        </Typography>
      </Box>
      
      <Box sx={{ mt: 2, gap:'30px' , display:'flex' , flexDirection:{xs:'column', sm:'column' ,md:'row'} }}>
        <Button variant="contained" color="primary" sx={{ mr: 1, borderRadius: '50px', backgroundColor:'#FA4A0C', textTransform:'none', padding: '10px 20px', fontSize:'16px'}}>
          PlayStore
        </Button>
        <Button variant="outlined" sx={{ borderRadius: '50px', textTransform:'none', padding: '10px 20px' , fontSize:'16px' , color:{xs:'#FA4A0C' , sm:'#FA4A0C' , md:'#FFFFFF'}, borderColor:{xs:'#FA4A0C' , sm:'#FA4A0C' , md:'#FFFFFF'} }}>
          App Store
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;
