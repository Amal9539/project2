import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
          <div>
              <AppBar>
                  <Toolbar>
                      <Typography variant='h3'>Emp App</Typography> &nbsp;
                      <Link to='/add'>
                          <Button variant='contained'>ADD</Button></Link> &nbsp;
                      <Link to='/View'>
                          <Button variant='contained'>VIEW</Button></Link> &nbsp;
                      

                  </Toolbar>
              </AppBar>
          </div>
    </div>
  )
}

export default Navbar
