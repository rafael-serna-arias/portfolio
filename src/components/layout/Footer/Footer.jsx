
import "./footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const socialIcons = [faXTwitter, faLinkedin, faCodepen, faGithub, ];

function Footer() {
  return (
  <div className="footer">

    <div className="footer__top">
      <div className="footer__line"></div>
      <div className="footer__icons">

          {socialIcons.map((icon, index) => (
            <div className="icon-counter" key={index}>
              <FontAwesomeIcon icon={icon}/>
            </div>
          ))}

      </div>
      <div className="footer__line"></div>
    </div>
    
    <div className="footer__bot">
     <p>© 2026 Rafael Serna.</p>
    </div>
  </div>
  )    
};

export default Footer;




