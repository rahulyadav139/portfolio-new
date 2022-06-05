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
          <div className={styles.projectDescription}>
            <p>
              <b>About:</b> This is a GK quiz app with alots of functionality
              like individual user account, progress dashboard etc.
            </p>
            <p>
              <b>Tech Stack:</b> NextJS, MongoDB, Server-side Authentication
              with Next-session
            </p>
          </div>
        </div>
        <div>
          <div className={`${styles.project} ${styles.projectTwo}`}>
            <a
              href="https://palasio-designs.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <button>Live</button>
            </a>
            <a
              href="https://github.com/rahulyadav139/palasio-designs"
              rel="noreferrer"
              target="_blank"
            >
              <button>Github</button>
            </a>
          </div>
          <div className={styles.projectDescription}>
            <p>
              <b>About:</b> Palasio Designs is a component library where you can
              find reusable UI components for designing any project. You can
              also find the source HTML code for each component.
            </p>
            <p>
              <b>Tech Stack:</b> HTML5, CSS3, Responsive Design
            </p>
          </div>
        </div>
        <div>
          <div className={`${styles.project} ${styles.projectThree}`}>
            <a
              href="https://palasio-bank.netlify.app/welcome"
              rel="noreferrer"
              target="_blank"
            >
              <button>Live</button>
            </a>
            <a
              href="https://github.com/rahulyadav139/palasio-bank"
              rel="noreferrer"
              target="_blank"
            >
              <button>Github</button>
            </a>
          </div>
          <div className={styles.projectDescription}>
            <p>
              <b>About:</b> Palasio Bank is a simulator application for net
              banking portal for a bank, where you can use services just like
              you use in real net banking portal like transfer money, change
              password, bill payment etc.
            </p>
            <p>
              <b>Tech Stack:</b> ReactJS, Redux, MongoDB, Mongoose ODM,
              ExpressJS, NodeJS, REST API, JWT Authentication
            </p>
          </div>
        </div>
        <div>
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
          <div className={styles.projectDescription}>
            <p>
              <b>About:</b> Social Link is an application where you can share
              all the social medial links/project links/portfolio links with
              others.
            </p>
            <p>
              <b>Tech Stack:</b> ReactJS, Redux, Firebase real-time Database and
              Authentication
            </p>
          </div>
        </div>
        <div>
          <div className={`${styles.project} ${styles.projectFive}`}>
            <a
              href="https://palasio-lane.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <button>Live</button>
            </a>
            <a
              href="https://github.com/rahulyadav139/palasio-lane"
              rel="noreferrer"
              target="_blank"
            >
              <button>Github</button>
            </a>
          </div>
          <div className={styles.projectDescription}>
            <p>
              <b>About:</b> Palasio Lane is e-commerce website to shop car decor
              accessories.
            </p>
            <p>
              <b>Tech Stack:</b> ReactJS, MongoDB, Mongoose ODM, ExpressJS,
              NodeJS, REST API, JWT Authentication
            </p>
          </div>
        </div>
        <div>
          <div className={`${styles.project} ${styles.projectSix}`}>
            <a
              href="https://palasio-connect.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <button>Live</button>
            </a>
            <a
              href="https://github.com/rahulyadav139/palasio-connect/tree/dev"
              rel="noreferrer"
              target="_blank"
            >
              <button>Github</button>
            </a>
          </div>
          <div className={styles.projectDescription}>
            <p>
              <b>About:</b> Palasio Connect is great for meeting new people,
              making friends and sharing interests.
            </p>
            <p>
              <b>Tech Stack:</b> ReactJS, Redux Toolkit, MongoDB, Mongoose ODM,
              ExpressJS, NodeJS, REST API, JWT Authentication
            </p>
          </div>
        </div>
        <div>
          <div className={`${styles.project} ${styles.projectSeven}`}>
            <a
              href="https://palasio-reviews.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <button>Live</button>
            </a>
            <a
              href="https://github.com/rahulyadav139/palasio-reviews/tree/dev"
              rel="noreferrer"
              target="_blank"
            >
              <button>Github</button>
            </a>
          </div>
          <div className={styles.projectDescription}>
            <p>
              <b>About:</b> This video libray project helps you to get car
              reviews of various car at one place. You can manage your video
              history at one place after signup. Enjoy Watching!
            </p>
            <p>
              <b>Tech Stack:</b> ReactJS, MongoDB, Mongoose ODM, ExpressJS,
              NodeJS, REST API, JWT Authentication
            </p>
          </div>
        </div>
        <div>
          <div className={`${styles.project} ${styles.projectEight}`}>
            <a
              href="https://www.npmjs.com/package/barrel-exporter"
              rel="noreferrer"
              target="_blank"
            >
              <button>Live</button>
            </a>
            <a
              href="https://github.com/rahulyadav139/barrel-exporter"
              rel="noreferrer"
              target="_blank"
            >
              <button>Github</button>
            </a>
          </div>
          <div className={styles.projectDescription}>
            <p>
              <b>About:</b> This is a NPM package for implementing barrel
              exporting.
            </p>
            <p>
              <b>Tech Stack:</b> NPM, NodeJS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
