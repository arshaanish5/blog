const express=require('express');
const morgan=require('morgan');
const path=require('path');
const cors=require('cors');
require('dotenv').config();
const mongoose=require('mongoose');
require('./db/connection');

const app=express();	

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

const userRoutes=require('./routes/userRoutes');
app.use('/user',userRoutes);

const blogRoutes=require('./routes/blogRoutes');
app.use('/blog',blogRoutes);

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
	console.log(`Server is running on port ${PORT}`);
})