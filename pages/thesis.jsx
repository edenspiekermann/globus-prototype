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
    <PageHead title="Thesis" />

    <Header />

    <Intro {...introData[0]}>
      <Edition {...editionData[0]} />
    </Intro>

    <MainContent>
      <ProductList {...productsData[0]}>
        <Button href="#" look="window">
          Alle Blumen-Hemden ansehen
        </Button>
      </ProductList>
      <Sidebar {...sidebarData} />
    </MainContent>

    <Footer />
  </Fragment>
);
