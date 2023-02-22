import Carousel from '../components/Carousel';
import '../style/Projects.css';

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">Projetos</h2>
      <div className="carousel-container">
        <Carousel />
      </div>
    </div>
  )
}

export default Projects;