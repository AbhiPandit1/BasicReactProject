import React from 'react'
import vg from "../assests/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"


const Home = () => {
  return (

  <>  
    <div className="home" id='home'>
        <main>
            <h1>TechStar</h1>
            <p>Solution to all your Problems</p>
        </main>
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
    <p>We ar only your one and only solution to your tech Problem 
      You Face every day.We are leading tech company whose aim is to increase the problem solving
      ability in children</p>
  </div>
    </div>

<div className="home3" id='About'>
<div>
 <h1>Who we are?</h1>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque delectus
 veniam cumque explicabo excepturi dolorem quam, dignissimos, quos tempora eum distinctio architecto ea
 . Vitae, eum numquam? Reprehenderit, repellat saepe deserunt quaerat dignissimos commodi nam sequi unde, esse
  dolorem cumque? Sapiente, voluptatibus nostrum aliquam ducimus quisquam deserunt consectetur aperiam libero explicabo 
  sunt harum quis reprehenderit aliquid officiis ratione id quam accusamus iusto magni praesentium consequuntur provident ad. 
  Numquam, delectus ipsam quidem itaque, asperiores doloremque incidunt explicabo quas beatae qui adipisci non rem nam maiores
  excepturi similique cupiditate velit voluptate aperiam officiis magnam earum fugit perferendis aspernatur? Cumque, voluptatibus
  odit aliquid labore ab blanditiis molestias quisquam eveniet repellendus facilis tempora. Recusandae et perferendis id, velit 
  ?</p>
  </div>
</div>

<div className="home4" id='brands'>
  <div>
    <h1>Brands</h1>

    <article>
   
    
    <div style={{
      animationDelay:"0.3s"
    }}>
    <AiFillGoogleCircle/>
    <p>Google</p>
    </div>

    <div style={{
      animationDelay:"0.6s"
    }}>
    <AiFillAmazonCircle/>
    <p>Amazon</p>
    </div>


    <div style={{
      animationDelay:"0.9s"
    }}>
    <AiFillInstagram/>
    <p>Instagram</p>
    </div>

    <div style={{
      animationDelay:"1.2s"
    }}>
    <AiFillYoutube/>
    <p>Youtube</p> 
  </div>
  </article>

</div>


</div>

 

    </>
  )


}

export default Home
