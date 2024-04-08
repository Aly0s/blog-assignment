import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import e from 'cors'
import React, { useState } from 'react'

const BlogForm = () => {
  var [inputs, setInputs]=useState({
    ename:"",
    edes:"",
    eauth:""
  })
  const inputHandler = (e)=>{
    const{name,value}=e.target 
    setInputs((prevData)=> ({...prevData,[name]:value}))
    console.log(inputs)
  }
  const addHandler=()=>{
    axios.post("https//jsonplaceholder.typicode.com/posts",inputs)
    .then((response )=>{
      alert(response.data)

    })
    .catch((err)=> console.log(err))

  }
  return (
    <div style={{paddingTop:"70px"}}>
      <Typography variant="h5" color={"darkcyan"}>BLOG FORM </Typography><br/>
      <TextField label='Blog Nmae'
      variant="outlined"
      name="ename"
      value={inputs.ename}
      onChange={inputHandler}/>
      <br></br>
      <TextField label='Description'
      variant="outlined"
      name="edes"
      value={inputs.edes}
      onChange={inputHandler}/>
      <br></br>
      <TextField label='Author Name'
      variant="outlined"
      name="eauth"
      value={inputs.eauth}
      onChange={inputHandler}/>
      <br></br>
      <Button variant="contained" color="secondary" onClick={addHandler}>ADD </Button>
    </div>
  )
}

export default BlogForm