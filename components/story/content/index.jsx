import styles from './styles';

export default ({ blocks }) => (
  <div className="content">
    <style jsx>{styles}</style>
    {blocks.map(_ => <p>{_.content}</p>)}
  </div>
);
