import { Fragment } from 'react';

import Block from './block';
import Intro from './intro';

export default ({ intro, blocks }) => (
  <Fragment>
    <Intro {...intro} />

    {blocks.map(_ => <Block {..._} />)}
  </Fragment>
);
