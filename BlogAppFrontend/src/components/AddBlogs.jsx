import { Button, Grid2, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axiosInstane from '../axiosInterceptor'

const AddBlogs = () => {
	const [addData,setAddData]=useState({
	title:'',
	description:'',
	imageurl:''
	})
	const navigate=useNavigate();
	const location=useLocation();
	function capValue(blogData){
		axiosInstane.post('/api/blog/addblogs', blogData)
        .then((res) => {
            alert(res.data.message); // Success message from the server
            navigate('/blogs'); // Navigate to the blogs page
        })
        .catch((error) => {
            console.error('Error adding the blog:', error);
            alert('Failed to add the blog. Please try again.');
        });
	}
	useEffect(()=>{
		if (location.state!=null) {
			setAddData({...addData,title :location.state.val.title,
			description:location.state.val.description,
			imageurl:location.state.val.imageurl})
		} else {
			setAddData({...addData,title :'',
				description:'',
				imageurl:''})
		}
	},[])
	function capValue(){
		if (location.state!=null) {
			axiosInstane.put('/api/blog/edit/'+location.state.val._id,addData).then((res)=>{
				alert(res.data.message);
				navigate('/blogs');
		})
		} else {
			axiosInstane.post('/blog/addblogs',addData).then((res)=>{
				alert(res.data.message);
				navigate('/blogs');
			})
		}
	}

  return (
		<div style={{margin:'8%'}}>
      <Grid2 container spacing={2}>
	  <Grid2 size={{xs:12,md:12}} >
		<TextField label="Title" name="title" variant='outlined' fullWidth onChange={(e)=>setAddData({...addData,title:e.target.value})} value={addData.title}></TextField>
        </Grid2>
		<Grid2 size={{xs:12,md:12}} >
		<TextField label="Description" name="description" variant='outlined' fullWidth onChange={(e)=>setAddData({...addData,description:e.target.value})} value={addData.description}></TextField>
        </Grid2>
		<Grid2 size={{xs:12,md:12}} >
		<TextField label="Image URL" name="imageurl" variant='outlined' fullWidth onChange={(e)=>setAddData({...addData,imageurl:e.target.value})} value={addData.imageurl}></TextField>
        </Grid2>
		<Grid2 size={{xs:12,md:12}} >
		<Button color='secondary' variant="contained" onClick={capValue} fullWidth>Add Blog</Button>
        </Grid2>
	  </Grid2>
	</div>
  )
}

export default AddBlogs