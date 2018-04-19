import Newsletter from './newsletter';

import data from './data';
import tokens from '../../data/tokens';

export default () => (
  <footer className="footer">
    <style jsx>{`
      .footer {
        background-color: black;
        color: white;
        display: flex;
        font-family: ${tokens.fonts.gill.family};
        justify-content: center;
        overflow-x: hidden;
        padding: 40px;
      }

      .footer__layout-constraint {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 1200px;
      }

      @media ${tokens.mq.desktop} {
        .footer__layout-constraint {
          flex-direction: row;
        }
      }

      .footer__category,
      .footer__items {
        list-style: none;
        padding: 0;
      }

      .footer__category {
        margin-right: 40px;
        margin-top: 0;
      }

      .footer__category-item-title {
        margin-top: 0;
      }

      .footer__items-item {
        margin-bottom: 10px;
      }

      .footer__items-item-title {
        text-transform: uppercase;
      }
    `}</style>

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
