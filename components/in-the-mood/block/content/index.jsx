import styles from './styles';

export default ({
  content,
  align = 'left',
  hasShoppingLayer = false,
  blockHasImage = false
}) => (
  <div
    className={`content content--${align} ${
      hasShoppingLayer && blockHasImage
        ? 'content--has-image-and-shoppinglayer'
        : ''
    }`}
  >
    <style jsx>{styles}</style>
    {content.map(_ => <p className="content__paragraph">{_}</p>)}
  </div>
);
