import { Layout } from "./components/Layout";
import { experiences, skills, projects } from "./../profile";
import Link from "next/link";

const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="./images/ryan-ray-profile2.jpeg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Rayan ray</h1>
              <h3>Fullstack Developer</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat cum delectus minus eum corrupti, impedit sit qui laboriosam, dolores deleniti magnam maxime sunt quis laborum. Nisi maiores non labore atque?</p>
              <a href="/hireme">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second Section */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: `${percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>

            <ul>
              {experiences.map(({ title, description, from, to }, i) => (
                <li key={i}>
                  <h3>{title}</h3>
                  <h5>
                    {from} - {to}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>

            <div className="row text-center">
              <div className="col-md-12">
                <Link href="/experiences">
                  <a className="btn btn-primary text-center">Experiences</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Portfolio */}

    <div className="row">
      <div className="card card-body bg-dark">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center text-light">Portfolio</h1>
          </div>

          {projects.map(({ name, description, image }, index) => (
            <div className="col-md-4 py-3" key={index}>
              <div className="card h-100">
                <img src={`./images/${image}`} alt="portfolio" />
                <div className="card-body">
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <Link href="#!">
                    <a>Conoce mas..</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
