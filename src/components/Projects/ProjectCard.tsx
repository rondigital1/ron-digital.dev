import type { Project } from '../../data';
import { BentoCell } from '../common/BentoCell';
import { TechChip } from '../common/TechChip';
import { ProjectPreview } from './ProjectPreview';
import styles from './ProjectCard.module.css';

/** A single project — browser chrome, stylized preview, body with chips. */
export function ProjectCard({ project }: { project: Project }) {
  const titleHead = project.name.slice(0, project.name.lastIndexOf(project.nameEmphasis));

  return (
    <BentoCell
      tone="beige"
      href={project.url}
      className={styles.card}
      ariaLabel={`${project.name} — open project`}
    >
      <div className={styles.chrome}>
        <span className={styles.traffic} aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.url}>{project.urlLabel}</span>
        <span className={styles.status}>{project.status}</span>
      </div>

      <ProjectPreview kind={project.preview} />

      <div className={styles.body}>
        <span className={styles.tag}>{project.tag}</span>
        <h3 className={styles.title} id={`project-${project.id}`}>
          {titleHead}
          <em>{project.nameEmphasis}</em>
        </h3>
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.meta}>
          <span className={styles.stack}>
            {project.stack.map((tech) => (
              <TechChip key={tech} name={tech} on="beige" size="sm" />
            ))}
          </span>
          <span className={styles.visit}>Visit →</span>
        </div>
      </div>
    </BentoCell>
  );
}
