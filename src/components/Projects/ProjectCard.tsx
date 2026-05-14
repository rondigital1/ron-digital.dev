import type { Project } from '../../data';
import { BentoCell } from '../common/BentoCell';
import { TechChip } from '../common/TechChip';
import { ProjectPreview } from './ProjectPreview';
import styles from './ProjectCard.module.css';

const STATUS_LABELS: Record<string, string> = {
  live: 'Live',
  prototype: 'Prototype',
  building: 'Building',
  paused: 'Paused',
};

/** A single project — browser chrome, stylized preview, body with chips. */
export function ProjectCard({ project }: { project: Project }) {
  const titleHead = project.name.slice(0, project.name.lastIndexOf(project.nameEmphasis));
  const { live, github, caseStudy } = project.links;

  return (
    <BentoCell tone="beige" as="article" className={styles.card} ariaLabel={project.name}>
      <div className={styles.chrome}>
        <span className={styles.traffic} aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.url}>{project.urlLabel}</span>
        <span className={styles.status} data-status={project.status}>
          {STATUS_LABELS[project.status] ?? project.status}
        </span>
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

          {(live || github || caseStudy) && (
            <div className={styles.actions}>
              {live && (
                <a
                  href={live}
                  className={styles.actionLink}
                  data-variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} — open live site`}
                >
                  Live →
                </a>
              )}
              {github && (
                <a
                  href={github}
                  className={styles.actionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} — view source on GitHub`}
                >
                  GitHub →
                </a>
              )}
              {caseStudy && (
                <a
                  href={caseStudy}
                  className={styles.actionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} — read case study`}
                >
                  Case Study →
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </BentoCell>
  );
}
