import Newsletter from './newsletter';

import data from './data';
import styles from './styles';

export default () => (
  <footer className="footer">
    <style jsx>{styles}</style>

    <div className="footer__layout-constraint">
      {data.categories.map(category => (
        <ul className="footer__category">
          <li className="footer__category-item">
            <h5 className="footer__category-item-title">{category.label}</h5>
            <ul className="footer__items">
              {category.items.map(item => (
                <li className="footer__items-item">
                  <span className="footer__items-item-title">{item.label}</span>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      ))}

      <Newsletter />
    </div>
  </footer>
);
