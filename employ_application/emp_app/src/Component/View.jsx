import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    var [emp, setEmp] = useState([])
    useEffect(() => {
        axios.get("http://localhost:1236/view")
            .then((response) => {
                console.log(response)
                setEmp(response.data.show)
            })
          
    })
    const deValue = (id) => {
        axios.delete("http://localhost:1236/remove/"+id)
            .then((response) => {
                console.log(response.data)
                setEmp(response.data)
            })

    

        return (
            <div>
                <h1>VIEW</h1>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Age</TableCell>
                                <TableCell>Department</TableCell>
                                <TableCell>Salary</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {emp.map((val) => {
                                return (
                                    <TableRow>
                                        <TableCell>{val.Name}</TableCell>
                                        <TableCell>{val.Age}</TableCell>
                                        <TableCell>{val.Dept}</TableCell>
                                        <TableCell>{val.Sal}</TableCell>
                                        <TableCell>
                                            {/* <Button variant='contained' onClick={() => { upValue(val._id) }}>update</Button>&nbsp; */}
                                            <Button variant='contained' onClick={() => {deValue(val._id) }}>Delete</Button></TableCell>

                                    </TableRow>
                                )
                            })}
                      
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}
export default View
