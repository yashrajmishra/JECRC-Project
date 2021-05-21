import Footer from './Footer';

import {Helmet} from 'react-helmet';

function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="title" content="Project Submission for JECRC University" />
      </Helmet>

      <div className="About">
        <div className="faq fadeInUp" style={{animationDelay: `${0.5 * 0.1}s`}}>
          <h2 className="question">
            This is a Project Started with a good friend of mine
            <br />
            <b> Priyanka Sharma</b>
          </h2>
          <h2 className="answer">
            This could not be compleated without help of <br />
            My mentor <b>Mr. Gajanand Sharma</b>
            <br />
            and My HOD <b>Mr. naveen Hemrajjani</b>
          </h2>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
