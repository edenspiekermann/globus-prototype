import Block from './block';
import Intro from './intro';
import Share from '../share';

export default ({ intro, blocks }) => (
  <>
    <style jsx>{`
      .share {
        margin-bottom: 60px;
        margin-top: 60px;
        text-align: center;
      }
    `}</style>

    <Intro {...intro} />

    {blocks.map(_ => <Block {..._} />)}

    <div className="share">
      <Share />
    </div>
  </>
);
