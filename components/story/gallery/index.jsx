import Figure from './figure';

import styles from './styles';

import tokens from '../../../tokens';

export default ({ items }) => (
  <div className="gallery">
    <style jsx>{styles}</style>
    {items.map((_, index) => <Figure key={index} {..._} />)}
  </div>
);
