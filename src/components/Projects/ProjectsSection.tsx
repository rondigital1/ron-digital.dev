import { projects } from '../../data';
import { SectionHead } from '../common/SectionHead';
import { ProjectCard } from './ProjectCard';
import styles from './ProjectsSection.module.css';

/** Independent product builds — three active full-stack AI projects. */
export function ProjectsSection() {
  return (
    <section aria-label="Independent product builds">
      <SectionHead
        id="projects"
        num="01"
        title="Independent product"
        titleEmphasis="builds"
        kicker="3 active builds · live demos + source"
      />
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
