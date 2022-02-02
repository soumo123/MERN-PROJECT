import React,{useState,useEffect} from 'react'
import image from '../images/home1.jpg'

const Home = () => {

  const[userName,setUserName]= useState('')
	const [show,setShow] = useState(false)
	
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
		setUserName(data.name)
    setShow(true)
	
	  } catch (error) {
		console.error(error)
	
	  }
	
	}
	
	useEffect(() => {
	  usecontactpage()
	}, [])

    return (
       <>
        <div className="wrapper"> 
  <main>
    <div className="home-page align-items-center">
      <div className="block">
       
        <h1>{userName}</h1>
        <h2>{show ? 'Nice to meet You': 'Sir, Please Login'}</h2>
        <p className="intro">I'm a writer and designer helping people get the most out of the web and email. I care about creating accessible and inclusive experiences with the help of technology.</p>
        <p>I also send a well-received email newsletter.</p>
        <a href="/" className="button">Subscribe here</a>
      </div>
      <div className="block">
        <img src={image}alt="An illustration of me in profile"/>
      </div>
    </div>
  </main>

  

  <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossorigin="anonymous"></script>


<footer>


  <center>Contact Us</center>
  <div class="rounded-social-buttons mt-5">
                    <a class="social-button facebook" href="https://www.facebook.com/soummya.biswas.7" target="_blank"><i class="fa fa-facebook"></i></a>
                    <a class="social-button twitter" href="https://twitter.com/BiswasSoummya" target="_blank"><i class="fa fa-twitter"></i></a>
                    <a class="social-button linkedin" href="https://www.linkedin.com/in/soummya-biswas-5465a8219/
" target="_blank"><i class="fa fa-linkedin"></i></a>
                    <a class="social-button youtube" href="https://www.youtube.com/channel/UCHrRH2epJcPC-MRT4Y4dt3w" target="_blank"><i class="fa fa-youtube"></i></a>
                    <a class="social-button instagram" href="https://www.instagram.com/soummya_biswas/" target="_blank"><i class="fa fa-instagram"></i></a>
                </div>
</footer>
 
</div>
       </>
    )
}

export default Home
