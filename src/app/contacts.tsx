import {
  faGithub,
  faLinkedin,
  faMailchimp,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMailBulk,
  faMailForward,
  faMailReply,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contacts({ anchor = 'justify-center' }) {
  return (
    <div className={'flex flex-row ' + anchor}>
      <a href="https://github.com/martinr0x" className="hover:text-indigo-700">
        <FontAwesomeIcon
          className="text-xl sm:text-3xl pr-4 sm:pr-5  text-blue hover:text-indigo-700"
          icon={faGithub}
        ></FontAwesomeIcon>
      </a>
      <a href="https://www.linkedin.com/in/martinbogusz/">
        <FontAwesomeIcon
          className="text-xl sm:text-3xl pr-4 sm:pr-5  text-blue hover:text-indigo-700"
          icon={faLinkedin}
          color="#FFFFF"
        ></FontAwesomeIcon>
      </a>

      <a href="https://twitter.com/martinbogusz">
        <FontAwesomeIcon
          className="text-xl sm:text-3xl pr-4 sm:pr-5  text-blue hover:text-indigo-700"
          icon={faTwitter}
        ></FontAwesomeIcon>
      </a>
      <a href="mailto:martin@bogusz.dev">
        <FontAwesomeIcon
          className="text-xl sm:text-3xl text-blue hover:text-indigo-700"
          icon={faEnvelope}
        ></FontAwesomeIcon>
      </a>
    </div>
  );
}
