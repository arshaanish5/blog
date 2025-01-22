const mongoose=require('mongoose');
mongoose.connect(process.env.mongoURL).then(()=>{
	console.log('Connected to database');
}).catch(()=>{
	console.log('Connection failed');
})