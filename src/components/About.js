import React from 'react'
import { useEffect , useState} from 'react'
import {useHistory} from 'react-router-dom'
import userimage from '../images/user.png'
const About = () => {

const history = useHistory()
const[userData,setUserData]= useState({})


const callAboutPage=async()=>{
  try {

    const res = await fetch('/about',{
      method: "GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      },
      credentials:"include"
    })
    

    const data = await res.json()
    console.log(data)
    setUserData(data)

    if(!res.status===200){
      const error = new Error(res.error)
      throw error
    }

  } catch (error) {
    console.error(error)
    history.push('/login')
  }

}



useEffect(() => {
  callAboutPage()
}, [])

    return (
        <>
        <div className="container">
        <div className="row">
  <div className="col-sm-12 col-lg-6 offset-lg-3">
            <div className="card card1 mb-4">
              <form method="GET">
              <div className="card-body pb-0 details-point">
                <div className="row align-items-center mb-3">
                  <div className="col-12">
                    <div className="profile-details">
                      <div className="profile-text">
                        <div className="profile-img"> <img src={userimage} className="img-fluid"/> </div>
                        <h5 className="mb-1">
                        {userData.name}
                  </h5>
                        <p>Phone: {userData.phone}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 lists-"> Email address </div>
                    <div className="col-md-7 lists-b">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 lists-"> ID </div>
                    <div className="col-md-7 lists-b">
                      <p>{userData._id}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 lists-">WORK</div>
                    <div className="col-md-7 lists-b">
                      <p> {userData.work}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 lists-">PASSWORD</div>
                    <div className="col-md-7 lists-b">
                      <p>{userData.password}</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                   
                  </div>
                </div>
              </div>
              </form>
            </div>
          </div>
          </div>
          </div>

<div class="about-section paddingTB60 gray-bg">
                <div class="container">
                    <div class="row">
						<div class="col-md-12 text-center">
							<div class="about-title clearfix">
								<h1>About <span>Us</span></h1>
								<h3>Lorem ipsum dolor sit amet </h3>
								<p class="about-paddingB">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget venenatis mauris finibus dictum. Vestibulum quis elit eget neque porttitor congue non sit amet dolor. Proin pretium purus a lorem ornare </p>
								<p>sed lobortis pulvinar. Integer laoreet mi id eros porta euismod. Suspendisse potenti. Nulla eros mauris, convallis et sem tempus, viverra hendrerit sapien</p>
						<div class="about-icons"> 
                            {/* <ul >
                                <li><a href="https://www.facebook.com/soummya.biswas.7"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a> </li>
                                <li><a href="https://twitter.com/BiswasSoummya"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a> </li>
                                <li> <a href="https://plus.google.com/"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a> </li>
                                <li> <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a> </li>
                            </ul>        */}

<center>Contact Us</center>
  <div class="rounded-social-buttons mt-5">
                    <a class="social-button facebook" href="https://www.facebook.com/soummya.biswas.7" target="_blank"><i class="fa fa-facebook"></i></a>
                    <a class="social-button twitter" href="https://twitter.com/BiswasSoummya" target="_blank"><i class="fa fa-twitter"></i></a>
                    <a class="social-button linkedin" href="https://www.linkedin.com/in/soummya-biswas-5465a8219/
" target="_blank"><i class="fa fa-linkedin"></i></a>
                    <a class="social-button youtube" href="https://www.youtube.com/channel/UCHrRH2epJcPC-MRT4Y4dt3w" target="_blank"><i class="fa fa-youtube"></i></a>
                    <a class="social-button instagram" href="https://www.instagram.com/soummya_biswas/" target="_blank"><i class="fa fa-instagram"></i></a>
                </div>
               
               
	           
	           
	        
	        </div>
							</div>
						</div>
						<div class="col-md-5 col-sm-6">
							<div class="about-img">
								{/* <img src="https://devitems.com/preview/appmom/img/mobile/2.png" alt=""> */}
							</div>
						</div>	
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
