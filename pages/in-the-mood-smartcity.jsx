import { Fragment } from 'react';

import inTheMoodData from '../data/in-the-mood';

import Footer from '../components/footer';
import Header from '../components/header';
import InTheMood from '../components/in-the-mood';
import PageHead from '../components/page-head';

export default () => (
  <Fragment>
    <PageHead title="In the mood - Smart City" />

    <Header />

    <InTheMood {...inTheMoodData[2]} />

    <Footer />
  </Fragment>
);
