import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Contacts({anchor = "justify-center"}){

    return  <div className={'flex flex-row '+ anchor}>
    <a href="https://www.linkedin.com/in/martinbogusz/">
      <FontAwesomeIcon
        className="text-4xl pr-3 text-primary hover:text-indigo-700"
        icon={faLinkedin}
        color='#FFFFF'
      ></FontAwesomeIcon>
    </a>
    <a href="https://github.com/martinr0x">
      <FontAwesomeIcon
        className="text-4xl pr-3 text-primary hover:text-indigo-700"
        icon={faGithub}
      ></FontAwesomeIcon>
    </a>
    <a href="https://twitter.com/martinbogusz">
      <FontAwesomeIcon
        className="text-4xl pr-3 text-primary hover:text-indigo-700"
        icon={faTwitter}
      ></FontAwesomeIcon>
    </a>
    
  </div>
}