import Cards from '../cards';

import globalStyles from './styles-global';
import localStyles from './styles';

export default ({ blocks, cards }) => (
  <div className="content">
    <style jsx global>
      {globalStyles}
    </style>

    <style jsx>{localStyles}</style>

    {cards && <Cards {...cards} />}

    {/* eslint-disable react/no-danger */}
    {blocks.map(_ => (
      <p
        className={`${_.theme && `content__paragraph--theme-${_.theme}`}`}
        dangerouslySetInnerHTML={{ __html: _.content }}
      />
    ))}
    {/* eslint-enable react/no-danger */}
  </div>
);
