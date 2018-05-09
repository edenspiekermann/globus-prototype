import styles from './styles';

export default ({ content, align = 'left' }) =>
  <div className={`content content--${align}`}>
    <style jsx>{styles}</style>
    {content.map(_ => <p>{_}</p>)}
  </div>
;
