import styles from './Header.module.css';
import signInitial from '../assets/sign-initial.png';

import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

const Header = props => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const mobileNavHandler = () => {
    setShowMobileNav(prev => !prev);
  };

  const scrollToSectionHandler = id => {
    const el = document.getElementById(`${id}`);

    el.scrollIntoView({ behavior: 'smooth' });

    setShowMobileNav(false);
  };
  return (
    <header className={styles.hero}>
      <div onClick={scrollToSectionHandler.bind(null, 'intro')}>
        <img src={signInitial} alt="sign" />
      </div>

      <div onClick={mobileNavHandler}>
        <GiHamburgerMenu />
      </div>

      <nav className={showMobileNav ? styles.show : ''}>
        <ul>
          <li onClick={scrollToSectionHandler.bind(null, 'about')}>ABOUT</li>
          <li>
            <a
              href="https://dev.to/rahulyadav139"
              rel="noreferrer"
              target="_blank"
            >
              BLOGS
            </a>
          </li>
          <li onClick={scrollToSectionHandler.bind(null, 'portfolio')}>
            PORTFOLIO
          </li>
          <li onClick={scrollToSectionHandler.bind(null, 'contact')}>
            GET IN TOUCH
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
