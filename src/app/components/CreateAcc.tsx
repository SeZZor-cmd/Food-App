"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'

function CreateAcc() {
  return (
    <Box sx={{ padding: { xs: 2, sm: 3 } }}> 
      
      <Typography sx={{ textAlign: 'center', fontSize: { xs: '24px', sm: '28px' }, fontWeight: 700, mb: 2 }}>
        How The App Works
      </Typography>

      
      <Box sx={{ display: 'flex', justifyContent: {xs:'center',md:'space-between'}, alignItems: 'center', width:'80%' ,gap:'100px', margin:'0 auto', flexDirection:{xs:'column' , sm:'column' ,md:'row' }}}> 
        <Box
          component="img"
          src="/images/CreateAccount.png"
          alt="Create Account Image"
          sx={{ maxWidth: '100%', height: 'auto' , order:{xs:'2',md:'0'} ,alignSelf:{xs:'center' , md:'flex-start'}, mx:{xs:'auto', md:'0'} }} 
        />
        <Box sx={{textAlign:{xs:'center',sm:'center',md:'start'}}}>
          <Typography sx={{ fontWeight: 700, fontSize: '24px', mb: 0.5 , order:{xs:'1',md:'0'} , color:'#FA4A0C'}}> 
            Create an account
          </Typography>
          <Typography sx={{ mb: 0.5 , color:'#252B42' , weight:'700' , fontSize:'40px'}}>
            Create/login to an existing account to get started
          </Typography>
          <Typography sx={{ weight:'500', color:'#737373' , fontSize:'24px'}}>
            An account is created with your email and a desired password
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default CreateAcc;
