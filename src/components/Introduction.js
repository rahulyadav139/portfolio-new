import styles from './Introduction.module.css';

const Introduction = props => {
  return (
    <section id="intro" className={styles.intro}>
      <h2>Hello!</h2>
      <h1>I'm Rahul Yadav.</h1>
      {/* <p>
        I am a web developer.
        I have always been fascinated by technologies and how they have made our
        lives better. So learning and exploring new things have always made me
        happier.
      </p> */}
      <p>
        I'm a full stack developer (MERN). I have always been fascinated by
        technologies and how they have made our lives better. So learning and
        exploring new things have always made me happier. Let’s build together,
        solve for better!
      </p>
    </section>
  );
};
export default Introduction;
