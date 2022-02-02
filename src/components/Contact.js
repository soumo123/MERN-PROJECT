import React,{useState,useEffect} from 'react'
import image from '../images/contact.png'

const Contact = () => {

	
	const[userData,setUserData]= useState({name:"",email:"",phone:"",message:""})
	
	
	const usecontactpage=async()=>{
	  try {
	
		const res = await fetch('/getdata',{
		  method: "GET",
		  headers:{
			"Content-Type":"application/json",
		  },
		})
		
	
		const data = await res.json()
		console.log(data)
		setUserData({...userData,name:data.name, email:data.email,phone:data.phone})
	
		if(!res.status===200){
		  const error = new Error(res.error)
		  throw error
		}
	
	  } catch (error) {
		console.error(error)
	
	  }
	
	}
	
	
	
	useEffect(() => {
	  usecontactpage()
	}, [])

	const handleInputs=(e)=>{
		const name= e.target.name
		const value = e.target.value

		setUserData({...userData,[name]:value})
	}

	//send data to backend//

	const contactForm = async(e)=>{
		e.preventDefault()
		const {name,email,phone,message} =userData

		const res = await fetch('/contact',{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body: JSON.stringify({
				name,email,phone,message
			})
		})


		const data = await res.json()
		if(!data){
			console.log("Message not sent")
			alert("Message not sent")
		}else{
			console.log("Message sent Succesfully")
			alert("Message sent Succesfully")
			setUserData({...userData,message:""})
		}
	}



    return (
       <>
       <div className="container contact">
	<div className="row">
		<div className="col-md-3">
			<div className="contact-info">
				 <img src={image} alt="image "/>
				<h2>Contact Us</h2>
				<h4>We would love to hear from you !</h4>
			</div>
		</div>
		<div className="col-md-9">
			<div className="contact-form">
				<form method="POST">
				<div className="form-group">
				  <label className="control-label col-sm-2" for="fname">Full Name :</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="name" placeholder="Enter your Name" name="name" value={userData.name} onChange={handleInputs} required />
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" for="lname">Contact No :</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="phone" placeholder="Enter Your Number" name="phone" value={userData.phone} onChange={handleInputs} required/>
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" for="email">Email:</label>
				  <div className="col-sm-10">
					<input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={userData.email} onChange={handleInputs} required/>
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" for="comment">Comment:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="5" name="message"id="comment" value={userData.message} onChange={handleInputs}></textarea>
				  </div>
				</div>
				<div className="form-group">        
				  <div className="col-sm-offset-2 col-sm-10">
					<button type="submit" className="btn btn-default" onClick={contactForm}>Submit</button>
				  </div>
				</div>
				</form>
			</div>
		</div>
	</div>
</div>
       </>
    )
}

export default Contact
