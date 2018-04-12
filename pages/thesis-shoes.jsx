import { Fragment } from 'react';
import Head from 'next/head';

import introData from '../data/intro';
import productsData from '../data/product-list';
import sidebarData from '../data/sidebar';

import Button from '../components/input/button';
import Edition from '../components/edition';
import Fonts from '../components/fonts';
import Footer from '../components/footer';
import Header from '../components/header';
import Intro from '../components/intro';
import MainContent from '../components/main-content';
import ProductList from '../components/product-list';
import ResetStyles from '../components/reset-styles';
import Sidebar from '../components/sidebar';

export default () => (
  <Fragment>
    <ResetStyles />
    <Fonts />

    <Head>
      <title>Thesis</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header />

    <Intro {...introData[2]} />

    <Edition />

    <MainContent>
      <ProductList {...productsData[1]}>
        <Button href="#" look="window">
          Alle Cowboy-Boots ansehen
        </Button>
      </ProductList>
      <Sidebar {...sidebarData} />
    </MainContent>

    <Footer />
  </Fragment>
);
