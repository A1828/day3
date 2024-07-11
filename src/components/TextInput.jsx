import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const TextInput = () => {
    const [inputs,setInputs]=useState({sname:'',age:'',place:''})
    const inputHandler =(e)=>{
        setInputs({... inputs,[e.target.name]: e.target.value});
        console.log(inputs);
    }
  return (
    <div>
     <TextField  variant='outlined' label='Name' onChange={inputHandler} name="sname" value={inputs.sname}/>
     <br /><br />
     <TextField  variant='outlined' label='Age'  onChange={inputHandler} name="age" value={inputs.age}/>
     <br /><br />
     <TextField  variant='outlined' label='place' onChange={inputHandler} name="place" value={inputs.place}/>
     <br /><br />
     <Button variant='contained'> submit</Button>
    </div>
  );
}

export default TextInput;

