import styles from './About.module.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import {
  SiNextdotjs,
  SiExpress,
  SiRedux,
  SiFirebase,
  SiJsonwebtokens,
  SiMongodb,
  SiSequelize,
} from 'react-icons/si';

const About = props => {
  return (
    <section id="about" className={styles.about}>
      <h2>My Skills</h2>
      <h1>Ways I can help you</h1>

      <p>
        Give me a site or a task that needs solving from a user experience
        perspective. This is where I feel most at home.
      </p>
      <div className={styles.icons}>
        <FaHtml5 />
        <FaCss3Alt />
        <IoLogoJavascript />
        <FaReact />
        <SiNextdotjs />
        <FaNodeJs />
        <SiExpress />
        <SiRedux />
        <SiFirebase />
        <SiJsonwebtokens />
        <SiMongodb />
        <FaGitAlt />
        <SiSequelize />
      </div>
    </section>
  );
};
export default About;
