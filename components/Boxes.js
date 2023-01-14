import React from 'react'
import { Box } from '@mui/material'

const Boxes = () => {
  
    return (
        <div style={{ 
            marginLeft: '40%', 
            marginTop: '60px', 
            width: '30%' 
        }}>
            <Box color="white" 
                bgcolor="palevioletred" p={1}>
                Greetings from GeeksforGeeks!
            </Box>
        </div>
    );
}
  
export default Boxes