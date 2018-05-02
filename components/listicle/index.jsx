import ProductSummary from '../product-summary';
import ListicleItem from './item';

import styles from './styles';

export default ({ products, summary }) => (
  <div className="listicle">
    <ul className="listicle__list">
      <style jsx>{styles}</style>

      {products.map((_, index) => (
        <li className="listicle__item" key={_.title}>
          <ListicleItem {..._} index={index + 1} />
        </li>
      ))}

      <ProductSummary {...summary} />
    </ul>
  </div>
);
