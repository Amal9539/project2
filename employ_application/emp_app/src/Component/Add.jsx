import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
      <div>
          <h1>ADD</h1>
          <TextField label="Name" variant="filled"></TextField><br/>
          <TextField label="Age" variant="filled"></TextField><br />
          <TextField label="Department" variant="filled"></TextField><br />
          <TextField label="Salary" variant="filled"></TextField><br/><br/>
          <Button variant='contained'>ADD</Button>

    </div>
  )
}

export default Add
