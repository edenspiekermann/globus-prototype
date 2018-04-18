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
        height: 100px;
        width: 100px;
      }

      .badge__text {
        font-family: ${tokens.fonts.founders.family};
        font-size: 16px;
        font-weight: ${tokens.fonts.founders.weight.medium};
        line-height: 1;
        margin: 0;
        padding: 20px;
        text-align: center;
      }
    `}</style>
  <p className="badge__text">
    { text }
  </p>
</div>);
