import React from 'react'

import { Box, TextField,Button,Typography} from '@mui/material';
import { useState } from 'react';
import axios from '../axios.js';
import { Link } from 'react-router-dom';
function Shortern() {
    const [text, setText] = useState('');
    const [code, setCode] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
      };
    
      const handleButtonClick = async () => {
        try {
          const response = await axios.post('/createUrl', {
            url: text 
          });
          setCode(response.data.data)
        } catch (error) {
        }
      };
    
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginTop:'20px' ,height: '100vh' }}>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '275px',
                width:'700px' ,
                border: '1px solid black',
                borderRadius: '8px', }}>
                <TextField 
                    sx={{
                        width:'600px'
                    }}
                    label="Enter Url" 
                    variant="outlined" 
                    value={text} 
                    onChange={handleTextChange} />
                <Button 
                sx={{
                    width:'250px',
                    marginTop:'25px'
                }}
                variant="contained" color="primary" onClick={handleButtonClick}>Shorten Url</Button>
                <Typography 
                sx={{marginTop:'55px',marginBottom: '4px'}}
                variant="body1" gutterBottom>Already have a code ? <Link to="/analytics">View Analytics</Link></Typography>
            </Box>
            {code ? <div><Box sx={{display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'center',height: '275px',width:'700px'  }}><Typography>Your code is <b>${code}</b></Typography><Typography>Url: <b>https://url-shortner-pliz.onrender.com/{code}</b></Typography> </Box></div> : <div></div>}
        </Box>
      )
}

export default Shortern;
