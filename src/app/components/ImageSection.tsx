"use client"
import { Box } from '@mui/material'
import React from 'react'

function ImageSection() {
  return (
    <>
      <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'center', position:'relative'}}>
        <Box 
          component="img"
          src="/images/2-Phones.png" 
          alt='Overlapping Image'
          sx={{
            position:'absolute' ,
            zIndex: 1 ,
            marginTop:'19rem'
          }}
        /> 
      </Box> 
      <Box
        component="hr"
        sx={{
          margin:'0 auto',
          marginTop: '35rem', // Adjust this value based on the image height
          border: 'none',
          borderBottom: '2px solid #E4E4E4', // Customize thickness and color of the line
          width: '70%', // The line will be full width below the image
        }}
      />
      
    </>
  )
}

export default ImageSection