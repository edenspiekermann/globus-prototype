import mixins from '../../../data/mixins';
import tokens from '../../../data/tokens';

const IntroTitle = ({ byline, title }) => <h2 className="intro__title">
  <style jsx>{`
    .intro__byline {
      display: block;
      font-size: 20px;
      margin-bottom: ${tokens.colWidth.mobile}px;
    }

    .intro__byline-separator {
      ${mixins.visuallyHidden};
    }

    .intro__title {
      font-size: 48px;
      line-height: 1;
      margin-left: ${tokens.colWidth.mobile * 2}px;
      margin-right: ${tokens.colWidth.mobile * 2}px;
      white-space: wrap;
    }

    @media ${tokens.mq.desktop} {
      .intro__title {
        font-size: 88px;
        margin-left: -${tokens.colWidth.desktop * 8}px;
        max-width: 700px;
        order: 2;
      }
    }
  `}</style>

  <small className="intro__byline">{byline}</small>
  <span className="intro__byline-separator">:</span>
  {title}
</h2>;

export default IntroTitle;
