import Block from '../block';

import styles from './styles';

export default ({ blocks, collapse }) => (
  <section
    className={`in-the-mood-section ${
      collapse ? 'in-the-mood-section--collapse' : ''
    }`}
  >
    <style jsx>{styles}</style>
    {blocks.map(_ => (
      <div className="in-the-mood-section__container">
        <Block {..._} />
      </div>
    ))}
  </section>
);
