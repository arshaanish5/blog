const mongoose=require('mongoose');
const blogSchema=mongoose.Schema({
	title:String,
	description:String,
	imageurl:String	
})
const blogData=mongoose.model('blog',blogSchema);
module.exports=blogData;