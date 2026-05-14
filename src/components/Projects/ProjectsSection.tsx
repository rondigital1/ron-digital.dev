import { projects } from '../../data';
import { SectionHead } from '../common/SectionHead';
import { ProjectCard } from './ProjectCard';
import styles from './ProjectsSection.module.css';

/** Personal projects — three 0-to-1 full-stack AI prototypes. */
export function ProjectsSection() {
  return (
    <section aria-label="Personal projects">
      <SectionHead
        id="projects"
        num="01"
        title="Personal"
        titleEmphasis="projects"
        kicker="0-to-1 AI builds · click to open"
      />
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
