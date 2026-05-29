import { developerTools, projects } from '../../data';
import { SectionHead } from '../common/SectionHead';
import { ProjectCard } from './ProjectCard';
import styles from './ProjectsSection.module.css';

/** Independent product builds followed by reusable AI engineering tooling. */
export function ProjectsSection() {
  return (
    <>
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

      <section className={styles.toolingSection} aria-labelledby="ai-engineering-tooling-title">
        <header className={styles.toolingHead}>
          <span className={styles.toolingEyebrow}>Developer systems</span>
          <h3 className={styles.toolingTitle} id="ai-engineering-tooling-title">
            AI engineering <em>tooling</em>.
          </h3>
          <span className={styles.toolingKicker}>Codex skills · agent workflows</span>
        </header>

        <div className={`${styles.grid} ${styles.toolingGrid}`}>
          {developerTools.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
