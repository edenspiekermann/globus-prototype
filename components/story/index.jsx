import { Fragment } from 'react';

import Block from './block';
import Intro from './intro';
import Navigation from './navigation';

export default ({ intro, blocks }) => (
  <Fragment>
    <Intro {...intro} />

    <Navigation blocks={blocks} />

    {blocks.map(_ => <Block {..._} />)}
  </Fragment>
);
