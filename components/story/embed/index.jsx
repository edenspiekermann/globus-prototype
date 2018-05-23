import { Fragment } from 'react';

import styles from './styles';

export default ({ markup }) => <Fragment>
  <style jsx global>{styles}</style>

  { /* eslint-disable-next-line react/no-danger */ }
  <div className="embed" dangerouslySetInnerHTML={{ __html: markup }} />
</Fragment>;
