const Footer = () => {
  return (
    <div className="footer">
        <ul className="list">
           <li className="facebook">
            <a href="https://www.facebook.com/">
                <img  src="public/images/facebook1.jpg" height={80} alt="facebook" className="social-img" />
            </a>
           </li>
           <li className="instagram">
            <a href="https://www.instagram.com/">
                 <img  src="public/images/instagram1.jpg" height={80} alt="instagram" className="social-img" />

            </a>
           </li>
           <li className="twitter">
            <a href="https://x.com/?lang=en-in">
              <img  src="public/images/twitter1.jpg" height={80} alt="twitter" className="social-img" />
              
            </a>
           </li>
           <li className="linkedin">
            <a href="https://in.linkedin.com/">
               <img  src="public/images/linkedin1.jpg" height={50} alt="linkedin" className="social-img"  />
            </a>
           </li>
        </ul>
        <p>Copyright @2020 All rights reserved</p>
      
    </div>
  )
}

export default Footer
