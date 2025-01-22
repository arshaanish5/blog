import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { isSession, Link, useNavigate } from 'react-router-dom'
import axiosInstane from '../axiosInterceptor'

const Login = () => {
	const [form,setForm]=useState({
		email:'',
		password:''
	})
	const navigate=useNavigate();
	function capValue(){
		// console.log(form)
		axiosInstane.post('/api/user/login',form).then((res)=>{
			alert(res.data.message);
			// console.log(res)
			if(res.data.token){
				sessionStorage.setItem('logintoken',res.data.token)
				navigate('/blogs');
			}else{
				navigate('/');
			}
		}).catch((error)=>{
			console.log(error);
			alert('Invalid login');
		})
	}
	
  return (
	<div style={{margin:'10%'}}>
		<Typography variant='h3' style={{color:"cornflowerblue"}}>Blog App Login</Typography>
		<br /><br />
		<TextField label='Email' variant='outlined' name='email' onChange={(e)=>setForm({...form,email:e.target.value})}></TextField>
		<br /><br />
		<TextField label='Password' variant='outlined' name='password' onChange={(e)=>setForm({...form,password:e.target.value})}></TextField>
		<br /><br />
		<Button variant="contained" onClick={capValue}>Login</Button>
		<div>
			<br />
			<Link to={'/signup'}>New user? Please register here</Link>
		</div>
	</div>
  )
}

export default Login