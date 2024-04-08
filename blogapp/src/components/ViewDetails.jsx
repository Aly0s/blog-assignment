import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewDetails= () => {
  var [users,setUsers] =useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
      console.log(res.data )
      setUsers(res.data)

  })
    .catch (err=>console.log(err))
})
  return (
    <div style={{paddingTop:"80px"}}>DASHBOARD DATA
    <Table>
      <TableHead>
        <TableRow>
        <TableCell>ID </TableCell>
        <TableCell> TITLE </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {users.map((val,i)=>{
            return(
              <TableRow>
                <TableCell>{val.id}</TableCell>
                <TableCell>{val.title }</TableCell>
              </TableRow>
            )
          })}
          </TableBody>
          </Table>

    </div>
  )
}

export default ViewDetails