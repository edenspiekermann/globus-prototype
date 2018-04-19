import tokens from '../../data/tokens';

export default ({ children }) => (
  <section className="main-content">
    <style jsx>{`
      .main-content {
        display: flex;
        flex-direction: column;
        padding-bottom: 80px;
      }

      @media ${tokens.mq.tablet} {
        .main-content {
          flex-direction: row;
          justify-content: space-between;
        }
      }
    `}</style>
    {children}
  </section>
);
