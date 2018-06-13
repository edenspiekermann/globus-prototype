import slugify from 'slugify';

import Content from '../content';
import Image from '../image';
import Products from '../products';
import Title from '../title';

import styles from './styles';

export default ({ content, image, products, title, blockTitle }) => (
  <section
    className="block"
    id={blockTitle ? slugify(blockTitle).toLowerCase() : null}
  >
    <style jsx>{styles}</style>

    {title && <Title {...title} />}
    {image && <Image {...image} />}
    {content && <Content {...content} />}
    {products && <Products {...products} />}
  </section>
);
