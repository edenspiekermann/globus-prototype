import { Fragment } from 'react';
import Head from 'next/head';

import editionData from '../data/edition';
import introData from '../data/intro';
import listicleData from '../data/listicle';
import productSummaryData from '../data/product-summary';
import sidebarData from '../data/sidebar';

import Edition from '../components/edition';
import Fonts from '../components/fonts';
import Footer from '../components/footer';
import Header from '../components/header';
import Intro from '../components/intro';
import Listicle from '../components/listicle';
import MainContent from '../components/main-content';
import ProductSummary from '../components/product-summary';
import ResetStyles from '../components/reset-styles';
import Sidebar from '../components/sidebar';

export default () => (
  <Fragment>
    <ResetStyles />
    <Fonts />

    <Head>
      <title>Listicle</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header />

    <Intro {...introData[1]}>
      <Edition {...editionData[1]} />
    </Intro>

    <MainContent>
      <Listicle {...listicleData} />
      <Sidebar {...sidebarData} />
    </MainContent>

    <ProductSummary {...productSummaryData} />

    <Footer />
  </Fragment>
);
