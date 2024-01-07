import React from 'react'

import { Box, TextField,Button,Typography} from '@mui/material';
import { useState } from 'react';
import axios from '../axios.js';
import { Link } from 'react-router-dom';

function Analytics() {
    const [code, setCode] = useState('');
    const [analytics,setAnalytics]=useState(0);
    const [url,setUrl]=useState('')
    const handleTextChange = (event) => {
        setCode(event.target.value);
      };
    
      const handleButtonClick = async () => {
        try {
          const response = await axios.get(`/analytics/${code}`)

          setAnalytics(response.data.data.total_clicks)
          setUrl(response.data.data.redirect_url)
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
                    label="Enter Code" 
                    variant="outlined" 
                    value={code} 
                    onChange={handleTextChange} />
                <Button 
                sx={{
                    width:'250px',
                    marginTop:'25px'
                }}
                variant="contained" color="primary" onClick={handleButtonClick}>Get Analysis</Button>
                <Typography 
                sx={{marginTop:'55px',marginBottom: '4px'}}
                variant="body1" gutterBottom>Want to Shorten a URL?<Link to="/">Shortern Now</Link></Typography>
            </Box>
            {analytics ? <div><Box sx={{display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'center',height: '275px',width:'700px'  }}><Typography>Original Url: <b>{url}</b></Typography><Typography>The numbers of clicks <b>{analytics}</b></Typography> </Box></div> : <div></div>}
        </Box>
      );
}

export default Analytics;