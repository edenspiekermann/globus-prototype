import { Fragment } from 'react';

import editionData from '../data/edition';
import introData from '../data/intro';
import productsData from '../data/product-list';
import sidebarData from '../data/sidebar';

import Button from '../components/input/button';
import Edition from '../components/edition';
import Footer from '../components/footer';
import Header from '../components/header';
import Intro from '../components/intro';
import MainContent from '../components/main-content';
import PageHead from '../components/page-head';
import ProductList from '../components/product-list';
import Sidebar from '../components/sidebar';

export default () => (
  <Fragment>
    <PageHead title="Thesis - Logomania" />

    <Header />

    <Intro {...introData[4]}>
      <Edition {...editionData[0]} />
    </Intro>

    <MainContent>
      <ProductList {...productsData[2]}>
        <Button href="#" look="window">
          Alle ansehen
        </Button>
      </ProductList>
      <Sidebar {...sidebarData} />
    </MainContent>

    <Footer />
  </Fragment>
);
