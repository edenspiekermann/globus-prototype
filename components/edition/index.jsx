import tokens from '../../data/tokens';

export default ({ image, label }) => (
  <div className={`edition ${image ? 'edition--with-image' : ''}`}>
    <style jsx>{`
      .edition {
        width: 30px;
      }

      .edition--with-image {
        max-width: 250px;
        position: relative;
        width: auto;
      }

      @media ${tokens.mq.desktop} {
        .edition {
          transform: translateY(-80%);
        }
      }

      .editon__label {
        font-family: ${tokens.fonts.founders.family};
        font-size: 16px;
        font-weight: ${tokens.fonts.founders.weight.medium};
        line-height: ${20 / 16};
        margin: 0;
        text-transform: uppercase;
        transform: rotate(-90deg) translateX(calc(100% + 10px));
        transform-origin: bottom right;
        white-space: nowrap;
      }

      .edition--with-image .editon__label {
        bottom: 0;
        position: absolute;
        right: -25px;
      }
    `}</style>

  {image && <div className="edition__image-container"><img src={image.url} alt={image.alt} className="edition__image" /></div>}

    <p className="editon__label">{label}</p>
  </div>
);
