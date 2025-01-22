const express=require('express');
const jwt= require('jsonwebtoken');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));

const userData=require('../model/userData');

router.post('/login',async(req,res)=>{
	const user=await userData.findOne({email:req.body.email});
	if(!user){
		res.status(404).send({message:'User not found'});
	}try {
		if(user.password==req.body.password){
			const payload={
				email:user.email,
				password:user.password
			};
			const token=jwt.sign(payload,'blogApp');
			res.status(200).send({message:'Login Successfull',token:token});
		}else{
			res.status(400).send({message:'Invalid Credentials'})
		}
	} catch (error) {
		console.log(error);
	}

})








module.exports=router;