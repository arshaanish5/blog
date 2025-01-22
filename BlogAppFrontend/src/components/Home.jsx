import { Button, Card, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstane from '../axiosInterceptor';

const Home = () => {
	// const cardData=[
	// 	{Title:"Food Blog",Description:"This is a food blog",Image:'https://www.foodchow.com/blog/wp-content/uploads/2019/02/Food-Blogs-1.jpg'},
	// 	{Title:"Movie Blog",Description:"This is a movie blog",Image:'https://i.pinimg.com/736x/90/47/7b/90477b517165fdedd03b3cc168aa9c38.jpg'},
	// 	{Title:"Travel Blog",Description:"This is a travel blog",Image:'https://www.theprofessionalvagabond.com/wp-content/uploads/2016/05/My-50-favourite-travel-blogs-1.jpg'}
	// ]
  const [cardData,setData]=useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    axiosInstane.get('/api/blog/blogs')
      .then((res) => {
        setData(res.data);  // Set the fetched data to state
        console.log(res.data);  // Optionally log the data for debugging
      })
      .catch((error) => {
        console.log(error);  // Log any errors that occur
      });
  }, []);

  // Function to navigate to the 'addblogs' page with state
  function update_data(val) {
    navigate('/addblogs', { state: { val } });
  }
  function delete_data(id) {
		axiosInstane.delete(`/api/blog/delete/${id}`)
		  .then((res) => {
			// After successful deletion, remove the item from the state
			setData(prevData => prevData.filter(item => item._id !== id));
		  })
		  .catch((error) => {
			console.log(error);
		  });
	  }
	  return (
	<div style={{margin:'5%'}}>
	<Grid2 container spacing={2}>
		{cardData.map((item)=>(
  <Grid2 size={{md:4}}>
  <Card sx={{ maxWidth: 345 }}
	>
      <CardMedia
        sx={{ height: 140 }}
        image={item.imageurl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="warning" variant="contained" onClick={(()=>{ update_data(item);
        })}>Update</Button>
        <Button size="small" color="error" variant="contained" onClick={() => delete_data(item._id)}>Delete</Button>
      </CardActions>
    </Card>
  </Grid2>
  ))}
  </Grid2>

	</div>
	)
	}

export default Home