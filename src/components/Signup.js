import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
const Signup = () => {

    const history = useHistory()
    
  const [user,setUser] = useState({
    name:"",email:"", phone:"", work:"",password:"",cpassword:""
  })
  

  let name,value;
  const handleInputs= (e)=>{
    name = e.target.name
    value = e.target.value

    setUser({...user,[name]:value})
    console.log(e)
  }

  const Postdata= async(e)=>{
    e.preventDefault()
    const {name, email, phone, work, password, cpassword} = user;

    const res = await fetch("/register",{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    })


    const data = res.json()
    if(data.status===422 || !data){
      window.alert("Invalid Registration")
      console.log("Invalid Registration")
    }else{
      window.alert(" Registration Succesful")
      console.log("Registration Succesful")
      history.push("/login")
    }
  }



    return (
        <>
        <h1 className="h1">Registration Page</h1>
        <form className="register-form" method = "POST">
            
  <label>
    <p class="label-txt">ENTER YOUR FULL NAME</p>
    
    <input type="text" class="input" name= "name" id= "name" value={user.name} onChange={handleInputs} autoComplete="off"/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">ENTER YOUR EMAIL</p>
    <input type="email" class="input"  name= "email" id= "email" autoComplete="off" value={user.email} onChange={handleInputs}/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">ENTER YOUR CONTACT NUMBER</p>
    <input type="text" class="input" name= "phone" id= "phone" autoComplete="off" value={user.phone} onChange={handleInputs}/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">ENTER YOUR WORK DETAILS</p>
    <input type="text" class="input"  name= "work" id= "work" value={user.work} onChange={handleInputs} autoComplete="off" />
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
      
    <p class="label-txt">ENTER YOUR PASSWORD</p>
    <input type="password" class="input"  name= "password" id= "password" value={user.password} onChange={handleInputs} autoComplete="off"/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">CONFIRM PASSWORD</p>
    <input type="password" class="input" name="cpassword" id="cpassword"  value={user.cpassword} onChange={handleInputs} autoComplete="off"/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <button type="submit" name="signup" id="signup" value="register" onClick={Postdata}>submit</button>
</form>
        </>
    )
}

export default Signup
