import { Box, Button, Grid2, Paper, styled, TextField } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: '#fff',
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		...theme.applyStyles('dark', {
		  backgroundColor: '#1A2027',
		}),
	  }));
  return (
	<div style={{margin:'8%'}}>
      <Grid2 container spacing={2}>
        <Grid2 size={{xs:6,md:6}}>
          <TextField label="Name" variant='outlined' fullWidth></TextField>
        </Grid2>
        <Grid2 size={{xs:6,md:6}}>
		<TextField label="Email" variant='outlined' fullWidth></TextField>
        </Grid2>
        <Grid2 size={{xs:6,md:6}}>
        <TextField label="Password" variant='outlined' fullWidth></TextField>
        </Grid2>
		<Grid2 size={{xs:6,md:6}}>
		<TextField label="Phone" variant='outlined' fullWidth></TextField>
        </Grid2>
		<Grid2 size={{xs:12,md:12}} >
		<TextField label="Address" multiline rows={4} variant='outlined' fullWidth></TextField>
        </Grid2>
		<Grid2 size={{xs:12,md:12}} >
		<Button color='secondary' variant="contained">Register</Button>
        </Grid2>
      </Grid2>
	  <Grid2 size={{xs:12,md:12}} >
			<br />
			<Link to={'/'} style={{color:'purple'}}>Already Registered? Login here</Link>
		</Grid2>
	</div>
  )
}

export default Signup