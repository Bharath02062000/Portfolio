import styles from './ProjectsStyles.module.css';
import weather from '../../assets/weather.png';
import profpng from '../../assets/profpng.png';
import vehk from '../../assets/vehk.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={vehk}
          link="https://vehk.in"
          h3="vehk.in"
          p="Vehk Website"
        />
        <ProjectCard
          src={weather}
          link="https://weather-app-2-tufo.onrender.com"
          h3="city weather"
          p="Weather App"
        />
        <ProjectCard
          src={profpng}
          link="https://profile-landingpage.onrender.com"
          h3="Profile"
          p=" Profile Landingpage"
        />
<<<<<<< HEAD
    
        {/* <ProjectCard
=======
{/*         <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
>>>>>>> 8b75f291af71c5b0523a1a7cf78fd7844432f227
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
