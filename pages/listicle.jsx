import { Fragment } from 'react';

import editionData from '../data/edition';
import introData from '../data/intro';
import listicleData from '../data/listicle';
import productSummaryData from '../data/product-summary';
import sidebarData from '../data/sidebar';

import Edition from '../components/edition';
import Footer from '../components/footer';
import Header from '../components/header';
import Intro from '../components/intro';
import Listicle from '../components/listicle';
import MainContent from '../components/main-content';
import PageHead from '../components/page-head';
import ProductSummary from '../components/product-summary';
import Sidebar from '../components/sidebar';

export default () => (
  <Fragment>
    <PageHead title="Listicle" />

    <Header />

    <Intro {...introData[1]}>
      <Edition {...editionData[1]} />
    </Intro>

    <MainContent>
      <Listicle {...listicleData[0]} />
      <Sidebar {...sidebarData} />
    </MainContent>

    <Footer />
  </Fragment>
);
