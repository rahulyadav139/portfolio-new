import styles from './Footer.module.css';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h4>2020 ©. All Rights Reserved.</h4>
      <div className={styles.icons}>
        <a
          href="https://twitter.com/rahulyadav139"
          rel="noreferrer"
          target="_blank"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/rahulyadav139/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/rahulyadav139"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};
