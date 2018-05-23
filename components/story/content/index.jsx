import styles from './styles';

export default ({ blocks }) => (
  <div className="content">
    <style jsx global>{styles}</style>
    {/* eslint-disable-next-line react/no-danger */}
    {blocks.map(_ => <p dangerouslySetInnerHTML={{ __html: _.content }} />)}
  </div>
);
