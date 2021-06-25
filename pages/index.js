import { Layout } from './components/Layout';

const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="./images/ryan-ray-profile2.jpeg" alt=""  className='img-fluid'/>
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
  </Layout>
)

export default Index;