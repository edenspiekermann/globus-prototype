export default ({ index, image, title, text, type = 'left' }) => (
  <div className={`listicle-item listicle-item--${type}`}>
    <style jsx>{`
      .listicle-item {
        display: flex;
      }

      .listicle-item--full {
        align-items: center;
        flex-direction: column;
      }

      .listicle-item--left,
      .listicle-item--right {
        align-items: center;
        flex-direction: row;
      }

      .listicle-item--right .listicle-item__image,
      .listicle-item--left .listicle-item__content {
        order: 1;
      }

      .listicle-item--right .listicle-item__content,
      .listicle-item--left .listicle-item__image {
        order: 2;
      }

      .listicle-item__title {
        font-size: 32px;
      }

      .listicle-item__index {
        display: block;
        font-size: 128px;
        font-family: Arial;
      }

      .listicle-item--left .listicle-item__image,
      .listicle-item--right .listicle-item__image {
        width: 65%;
        z-index: 1;
      }

      .listicle-item--left .listicle-item__content,
      .listicle-item--right .listicle-item__content {
        width: 35%;
        z-index: 2;
      }

      .listicle-item--left .listicle-item__content {
        margin-right: -40px;
        padding-left: 60px;
      }

      .listicle-item--right .listicle-item__content {
        margin-left: -40px;
        text-align: right;
      }

      .listicle-item--full .listicle-item__content {
        margin-top: -120px;
        max-width: 60%;
        text-align: center;
      }

      .listicle-item__text {
        font-size: 20px;
        line-height: 1.45;
      }
    `}</style>

    <img src={image.url} alt={image.alt} className="listicle-item__image" />

    <div className="listicle-item__content">
      <h3 className="listicle-item__title">
        <span className="listicle-item__index">{index}</span>
        {title}
      </h3>
      <div className="listicle-item__text">{text.map(paragraph => <p>{paragraph}</p>)}</div>
    </div>
  </div>
);
