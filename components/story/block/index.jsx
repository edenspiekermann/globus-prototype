import slugify from 'slugify';

import Content from '../content';
import Image from '../image';
import Embed from '../embed';
import Products from '../products';
import Title from '../title';

import styles from './styles';

export default ({ content, image, products, title, embed, blockTitle }) => (
  <section
    className="block"
    id={blockTitle ? slugify(blockTitle).toLowerCase() : null}
  >
    <style jsx>{styles}</style>

    {title && <Title {...title} />}
    {image && <Image {...image} />}
    {content && <Content {...content} />}
    {products && <Products {...products} />}
    {embed && <Embed {...embed} />}
  </section>
);
