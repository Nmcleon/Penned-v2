import data from '../data/db.json';
import Card from '../components/CardSection/Card';

export const cardElement = data.blogs.map((blog) => {
  return <Card key={blog.id} {...blog} />;
});
{
  /*removed blog={blog} instead used spread syntax instead got rid of .blog in the Card component */
}
