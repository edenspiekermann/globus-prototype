import Content from '../content';
import Image from '../image';
import Products from '../products';
import Title from '../title';

import styles from './styles';

export default ({ content, image, products, title }) => (
  <section className="block">
    <style jsx>{styles}</style>

    {title && <Title {...title} />}
    {image && <Image {...image} />}
    {content && <Content {...content} />}
    {products && <Products {...products} />}
  </section>
);
