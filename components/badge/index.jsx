import tokens from '../../data/tokens';

export default ({ text }) => (
  <div className="badge">
    <style jsx>{`
      .badge {
        align-items: center;
        background-color: black;
        border-radius: 50%;
        color: white;
        display: flex;
        justify-content: center;
        height: 90px;
        width: 90px;
      }

      @media ${tokens.mq.desktop} {
        .badge__text {
          height: 100px;
          width: 100px;
        }
      }

      .badge__text {
        font-family: ${tokens.fonts.founders.family};
        font-size: 14px;
        font-weight: ${tokens.fonts.founders.weight.medium};
        line-height: 1;
        margin: 0;
        padding: 20px 13px;
        text-align: center;
      }

      @media ${tokens.mq.desktop} {
        .badge__text {
          font-size: 16px;
        }
      }
    `}</style>
  <p className="badge__text">
    { text }
  </p>
</div>);
