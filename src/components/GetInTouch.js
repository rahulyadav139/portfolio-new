import styles from './GetInTouch.module.css';

const GetInTouch = props => {
  return (
    <section id="contact" className={styles.getInTouch}>
      {/* <h2>Get in touch</h2>
      <h1>Should we work together?</h1> */}
      <h1>Get in touch</h1>
      <p>Drop a Hi or connect with me on social media.</p>
      <a href="mailto:er.rahulmyadav@gmail.com">er.rahulmyadav@gmail.com</a>
      <br />
      <a href="tel:918435435659">+91-8435435659</a>
    </section>
  );
};
export default GetInTouch;
