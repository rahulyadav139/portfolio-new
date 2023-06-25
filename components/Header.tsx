'use client';

import styles from './Header.module.css';

import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

export const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  const mobileNavHandler = () => {
    setShowMobileNav(prev => !prev);
  };

  const scrollToSectionHandler = (id: string) => {
    const el = document.getElementById(`${id}`)!;

    el.scrollIntoView({ behavior: 'smooth' });

    setShowMobileNav(false);
  };
  return (
    <header className={styles.hero}>
      <div onClick={scrollToSectionHandler.bind(null, 'intro')}>
        <img src="/images/sign-initial.png" alt="sign" />
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
