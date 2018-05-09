import Section from './section';

export default ({ sections }) => (
  <main className="in-the-mood">{sections.map(_ => <Section {..._} />)}</main>
);
