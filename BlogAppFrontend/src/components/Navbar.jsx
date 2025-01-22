import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
return (
	<Box sx={{ flexGrow: 1 }}>
	<AppBar position="static" style={{backgroundColor:"purple"}}>
		<Toolbar>
		<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
			BlogApp
		</Typography>
		<Link to={'/blogs'}><Button style={{color:'white'}}>Home</Button></Link>
		<Link to={'/addblogs'}><Button style={{color:'white'}}>ADDBLOG</Button></Link>
		<Link to={'/'}><Button style={{color:'white'}} onClick={()=>{sessionStorage.removeItem('logintoken');}}>Logout</Button></Link>
		</Toolbar>
	</AppBar>
	</Box>
	)
}

export default Navbar