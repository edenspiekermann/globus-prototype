import tokens from '../../data/tokens';

export default ({ children }) => (
  <section className="main-content">
    <style jsx>{`
      .main-content {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
        max-width: 1200px;
      }

      @media ${tokens.mq.desktop} {
        .main-content {
          align-items: flex-start;
          flex-direction: row;
        }
      }
    `}</style>
    {children}
  </section>
);
