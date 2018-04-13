import tokens from '../../data/tokens';

export default ({ image, label }) => (
  <div className="edition">
    <style jsx>{`
      .edition {
        position: relative;
      }

      @media ${tokens.mq.desktop} {
        .edition {
          margin-top: -200px;
          max-width: 250px;
        }
      }

      .editon__label {
        font-size: 16px;
        margin: 0;
        text-transform: uppercase;
        //transform: rotate(-90deg) translateX(-103%) translateY(150%);
        transform-origin: bottom left;
        white-space: nowrap;
      }
    `}</style>

  {image && <div className="edition__image-container"><img src={image.url} alt={image.alt} className="edition__image" /></div>}

    <p className="editon__label">{label}</p>
  </div>
);
