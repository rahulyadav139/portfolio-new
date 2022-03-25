import { Fragment } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import GetInTouch from '../components/GetInTouch';
import Introduction from '../components/Introduction';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const Homepage = props => {
  return (
    <Fragment>
      <Header />
      <Introduction />
      <About />
      <Portfolio />
      <GetInTouch />
      <Footer />
    </Fragment>
  );
};
export default Homepage;
