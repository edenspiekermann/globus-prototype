import Block from '../block';

import styles from './styles';

export default ({ blocks }) => (
  <section className="in-the-mood-section">
    <style jsx>{styles}</style>
    {blocks.map(_ => <Block {..._} />)}
  </section>
);
