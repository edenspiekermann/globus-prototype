import { Fragment } from 'react';

import storyData from '../data/story';

import Footer from '../components/footer';
import Header from '../components/header';
import PageHead from '../components/page-head';
import Story from '../components/story';

export default () => (
  <Fragment>
    <PageHead title="Story" />

    <Header />

    <Story {...storyData} />

    <Footer />
  </Fragment>
);
