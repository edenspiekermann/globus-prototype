import Section from './section';
import Share from '../share';

import styles from './styles';

export default ({ sections }) => (
  <main className="in-the-mood">
    <style jsx>{styles}</style>

    {sections.map(_ => <Section {..._} />)}
    <Share centered />
  </main>
);
