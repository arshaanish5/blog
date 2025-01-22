import axios from "axios";
const axiosInstane=axios .create({
	baseURL:'/api',
})
axiosInstane.interceptors.request.use((config)=>{
	const accessToken=sessionStorage.getItem('logintoken')
	if(accessToken){
	if(config){
		config.headers.token=accessToken;
	}
}
return config;
},(error)=>{
	return Promise.reject(error);
})
export default axiosInstane;
