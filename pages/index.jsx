import { Fragment } from 'react';
import Intro from '../components/intro';

export default () => (
  <Fragment>
    <style jsx>{`
      .intro {
        background-color: blue;
        color: white;
        padding: 1rem;
      }
    `}</style>

    <div className="intro">
      <Intro />
      <p>This is going to be the shiny prototype for globus!</p>
    </div>
  </Fragment>
);
