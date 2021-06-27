import { Layout } from "./components/Layout";
import { Link } from 'next/link';

const Github = ({name, avatar_url, bio, html_url}) => {

  return (
    <Layout>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{name}</h1>
            <img src={avatar_url} alt={name} />
            <p>{bio}</p>
            <a href="#!" target="_blank" className="btn btn-outline-secondary my-2">My blog</a>
            <a href={html_url} target="_blank" className="btn btn-outline-secondary my-2">Go to Github</a>
          </div>
        </div>
      </div>
    </Layout>
  );

  
};

export async function getServerSideProps() {
  const data = await fetch("https://api.github.com/users/carlosCeron").then((response) => response.json());

  return {
    props: data,
  };
}

export default Github;
