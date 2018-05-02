import ListicleItem from './item';

import styles from './styles';

export default ({ products }) => (
  <ul className="listicle">
    <style jsx>{styles}</style>

    {products.map((_, index) => (
      <li className="listicle__item" key={_.title}>
        <ListicleItem {..._} index={index + 1} />
      </li>
    ))}
  </ul>
);
