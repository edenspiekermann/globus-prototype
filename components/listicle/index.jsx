import ProductSummary from '../product-summary';
import ListicleItem from './item';

import productSummaryData from '../../data/product-summary';

import styles from './styles';

export default ({ products }) => (
  <div className="listicle">
    <ul className="listicle__list">
      <style jsx>{styles}</style>

      {products.map((_, index) => (
        <li className="listicle__item" key={_.title}>
          <ListicleItem {..._} index={index + 1} />
        </li>
      ))}

      <ProductSummary {...productSummaryData} />
    </ul>
  </div>
);
