import facebook from "../assets/images/facebook1.jpg";
import instagram from "../assets/images/instagram1.jpg";
import twitter from "../assets/images/twitter1.jpg";
import linkedin from "../assets/images/linkedin1.jpg";
const Footer = () => {
  return (
    <div className="footer">
        <ul className="list">
           <li className="facebook">
            <a href="https://www.facebook.com/">
                <img  src= {facebook} height={80} alt="facebook" className="social-img" />
            </a>
           </li>
           <li className="instagram">
            <a href="https://www.instagram.com/">
                 <img  src={instagram} height={80} alt="instagram" className="social-img" />

            </a>
           </li>
           <li className="twitter">
            <a href="https://x.com/?lang=en-in">
              <img  src={twitter} height={80} alt="twitter" className="social-img" />
              
            </a>
           </li>
           <li className="linkedin">
            <a href="https://in.linkedin.com/">
               <img  src={linkedin} height={50} alt="linkedin" className="social-img"  />
            </a>
           </li>
        </ul>
        <p>Copyright @2020 All rights reserved</p>
      
    </div>
  )
}

export default Footer
