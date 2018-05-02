import { Fragment } from 'react';

import editionData from '../data/edition';
import introData from '../data/intro';
import listicleData from '../data/listicle';
import sidebarData from '../data/sidebar';

import Edition from '../components/edition';
import Footer from '../components/footer';
import Header from '../components/header';
import Intro from '../components/intro';
import Listicle from '../components/listicle';
import MainContent from '../components/main-content';
import PageHead from '../components/page-head';
import Sidebar from '../components/sidebar';

export default () => (
  <Fragment>
    <PageHead title="Listicle - Wine" />

    <Header />

    <Intro {...introData[3]}>
      <Edition {...editionData[2]} />
    </Intro>

    <MainContent>
      <Listicle {...listicleData[1]} />
      <Sidebar {...sidebarData} />
    </MainContent>

    <Footer />
  </Fragment>
);
