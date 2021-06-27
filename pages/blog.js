import { posts } from '../profile';
import { Layout } from './components/Layout';
import { PostCard } from './components/PostCard';

console.log(posts);

const Blog = () => (
  <Layout>
    <h1>Blog</h1>
    <div className="row">
      {
        posts.map((post, index) => (
          <PostCard {...post} key={index}/>
        ))
      }
    </div>
  </Layout>
);

export default Blog