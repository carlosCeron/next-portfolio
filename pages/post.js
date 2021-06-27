import { posts } from '../profile';
import { Layout } from './components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';


const Post = () => {

  const router = useRouter();

  const {title, content, imageUrl} = posts.filter(post => post.title === router.query.title)[0];

  return (
    <Layout>
      <div className="text-center">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card">
              <img src={imageUrl} alt={title} className="card-img-top" />
              <div className="card-body">
                <h1>{title}</h1>
                <p>{content}</p>
                <Link href='/blog'>
                  <a className='btn btn-outline-primary'>Regresar...</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Post;
