import styles from './Portfolio.module.css';
import { FaGithub } from 'react-icons/fa';
const Portfolio = props => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2>Portfolio</h2>
      <h1>My recent projects</h1>

      {/* <p>
        
      </p> */}

      <div className={styles.projects}>
        <div>
          <div className={`${styles.project} ${styles.projectOne}`}>
            <a
              href="https://palasio-quiz-app.vercel.app/"
              rel="noreferrer"
              target="_blank"
            >
              <button>Live</button>
            </a>
            <a
              href="https://github.com/rahulyadav139/palasio-quiz-app"
              rel="noreferrer"
              target="_blank"
            >
              <button>Github</button>
            </a>
          </div>
          {/* <p>
            <b>About:</b>
            This is a GK quiz app with alots of functionality like individual
            user account, progress dashboard etc.
          </p>
          <p>
            <b>Tech Stack:</b>
            NextJS, MongoDB,
          </p> */}
        </div>
        <div className={`${styles.project} ${styles.projectTwo}`}>
          <a
            href="https://palasio-designs.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            <button>Live</button>
          </a>
          <a
            href="https://github.com/rahulyadav139/palasio-designs/tree/dev"
            rel="noreferrer"
            target="_blank"
          >
            <button>Github</button>
          </a>
        </div>
        <div className={`${styles.project} ${styles.projectThree}`}>
          <a
            href="https://palasio-banking-website.vercel.app/welcome"
            rel="noreferrer"
            target="_blank"
          >
            <button>Live</button>
          </a>
          <a
            href="https://github.com/rahulyadav139/palasio-banking-website"
            rel="noreferrer"
            target="_blank"
          >
            <button>Github</button>
          </a>
        </div>
        <div className={`${styles.project} ${styles.projectFour}`}>
          <a
            href="https://social-links-green.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <button>Live</button>
          </a>
          <a
            href="https://github.com/rahulyadav139/social-links"
            rel="noreferrer"
            target="_blank"
          >
            <button>Github</button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
