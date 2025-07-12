import React from 'react'
import styles from './ExperianceStyles.module.css';
import kaashivlogo from '../../assets/kaashivlogo.png';
import profpng from '../../assets/profpng.png';
import vehk1 from '../../assets/vehk1.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Experiance(){
    return (
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">EXPERIENCE</h1>
        <div className={styles.projectsContainer}>
        <ProjectCard
            src={vehk1}
            link="https://drive.google.com/file/d/139EPlsRVvlVZS35Rmp2g5KerpRrjXigm/view?usp=drivesdk"
            h3="IDOTINFINITY pvt"
            p="junior software engneer"
          />
          <ProjectCard
            src={kaashivlogo}
            link="https://drive.google.com/file/d/1O2-hdAhdu4_nqmwnsZ5HuiH2JO_p6sa4/view?usp=sharing"
            h3="KaaShiv InfoTech"
            p="web designing internship"
          />
          {/* <ProjectCard
            src={profpng}
            link="https://profile-landingpage.onrender.com"
            h3="Profile"
            p=" Profile Landingpage"
          /> */}
      
          {/* <ProjectCard
            src={fitLift}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="FitLift"
            p="Fitness App"
          /> */}
        </div>
      </section>
    );
  }
export default Experiance
