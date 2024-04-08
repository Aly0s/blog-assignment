import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography> HOME </Typography>
                <Button variant="contained" color="success">

                <Link to={'/'}style={{textDecoration:'none',color:'white'}}>
                    DASHBOARD 

                </Link>
                </Button>
                <Button variant="contained" color="error">
                    <Link to={'/add'} style={{textDecoration:"none",color:"white"}}>
                        BLOG FORM 
                    </Link>
                     </Button>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar