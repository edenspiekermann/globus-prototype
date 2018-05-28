import styles from './styles';
import tokens from '../../../../tokens';

export default ({
  content,
  align = 'left',
  hasShoppingLayer = false,
  blockHasImage = false,
  color = 'inherit'
}) => (
  <div
    className={`content content--${align} ${
      hasShoppingLayer && blockHasImage
        ? 'content--has-image-and-shoppinglayer'
        : ''
    }`}
  >
    <style jsx>{styles}</style>

    <style jsx>{`
      @media ${tokens.mq.phablet} {
        .content__paragraph {
          color: ${color};
        }
      }
    `}</style>

    {content.map(_ => <p className="content__paragraph">{_}</p>)}
  </div>
);
