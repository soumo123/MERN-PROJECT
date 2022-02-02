import React,{useState,useContext} from 'react'
import {useHistory,Link} from 'react-router-dom'
import {UserContext} from '../App'


const Login = () => {

const {state,dispatch} = useContext(UserContext)



const history = useHistory()
const[email , setEmail] = useState('')
const [password,setPassword]= useState('')

const loginUser = async(e)=>{
  e.preventDefault()
  const res = await fetch('/signin',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      email,
      password
    })

  })
  const data = res.json()
  if(res.status===400 || !data){
    window.alert("Invalid Credentials")
    console.log("Invalid Credentials")
  }else{
    dispatch({type:"USER",payload:true})
    window.alert(" Login Succesful")
    console.log("Login Succesful")
    history.push("/")
  }

}

    return (

        <>
        <h1 className="h1">Sign In Page</h1>
        <form className="register-form" method="POST">
            
  <label>
    <p class="label-txt">USER EMAIL</p>
    
    <input type="email" class="input" name= "email" value={email} onChange={(e)=>setEmail(e.target.value)} id= "email" autoComplete="off"/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">PASSWORD</p>
    <input type="password" class="input"  name= "password" value={password} onChange={(e)=>setPassword(e.target.value)} id= "password" autoComplete="off"/>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <button type="submit" name="signin" id="signin" onClick={loginUser} value="log in">Sign in</button>
</form>
        </>
    )
}

export default Login
