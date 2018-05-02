import { Fragment } from 'react';
import Head from 'next/head';

import Fonts from '../fonts';
import ResetStyles from '../reset-styles';

export default ({ title }) => (
  <Fragment>
    <ResetStyles />
    <Fonts />

    <Head>
      <title>Globus - {title}</title>
      <link rel="icon" href="/static/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  </Fragment>
);
