import styles from './styles';

export default ({
  label,
  align = 'center',
  size = 'large',
  standalone = false
}) => (
  <h2
    className={`
      title
      title--${align}
      title--${size}
      ${standalone ? 'title--standalone' : ''}
  `}
  >
    <style jsx>{styles}</style>
    {label}
  </h2>
);
