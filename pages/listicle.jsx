import { Fragment } from 'react';
import Head from 'next/head';
import Fonts from '../components/fonts';
import Header from '../components/header';
import Intro from '../components/intro';
import ResetStyles from '../components/reset-styles';

export default () => (
  <Fragment>
    <ResetStyles />
    <Fonts />

    <Head>
      <title>Listicle</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header />

    <Intro />
  </Fragment>
);
