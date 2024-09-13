"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'

function ExploreVar() {
  return (
    <Box sx={{ padding: { xs: 2, sm: 3 } }}> {/* Adjusted padding */}
    {/* Flexbox for image and content */}
    <Box sx={{ display: 'flex', justifyContent: {xs:'center',md:'space-between'}, alignItems: 'center', width:'80%' ,gap:'100px', margin:'0 auto', flexDirection:{xs:'column' , sm:'column' ,md:'row' }}}> {/* Reduced gap */}
      <Box sx={{textAlign:{xs:'center',sm:'center',md:'start'}}}>
        <Typography sx={{ fontWeight: 700, fontSize: '24px', mb: 0.5 , order:{xs:'1',md:'0'} , color:'#FA4A0C'}}> {/* Reduced margin-bottom */}
          Explore varieties
        </Typography>
        <Typography sx={{ mb: 0.5 , color:'#252B42' , weight:'700' , fontSize:'40px'}}> {/* Reduced margin-bottom */}
          Shop for your favorites meal as e dey hot.
        </Typography>
        <Typography sx={{ weight:'500', color:'#737373' , fontSize:'24px'}}>
          Shop your favorite meal or drinks and enjoy while doing it.
        </Typography>
      </Box>
      <Box
        component="img"
        src="/images/Explore.png"
        alt="Explore Image"
        sx={{ maxWidth: '100%', height: 'auto' , order:{xs:'2',md:'0'} ,alignSelf:{xs:'center' , md:'flex-start'}, mx:{xs:'auto', md:'0'} }} 
      />
      
    </Box>
  </Box>
  )
}

export default ExploreVar