import type { Project, ProjectStatus } from '../../data';
import { BentoCell } from '../common/BentoCell';
import { TechChip } from '../common/TechChip';
import { ProjectPreview } from './ProjectPreview';
import styles from './ProjectCard.module.css';

const STATUS_LABELS: Record<ProjectStatus, string> = {
  live: 'LIVE',
  prototype: 'PROTOTYPE',
  building: 'BUILDING',
  paused: 'PAUSED',
};

/** A single project — browser chrome, stylized preview, body with chips. */
export function ProjectCard({ project }: { project: Project }) {
  const titleHead = project.name.slice(0, project.name.lastIndexOf(project.nameEmphasis));
  const { live, github, caseStudy } = project.links;
  const primaryHref = live ?? github ?? caseStudy;

  return (
    <BentoCell
      tone="beige"
      as="article"
      interactive={Boolean(primaryHref)}
      className={`${styles.card} ${primaryHref ? styles.clickable : ''}`}
      ariaLabel={project.name}
    >
      {primaryHref && (
        <a
          href={primaryHref}
          className={styles.cardLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name} project in a new tab`}
        />
      )}

      <div className={styles.chrome}>
        <span className={styles.traffic} aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.url}>{project.urlLabel}</span>
        <span className={styles.status} data-status={project.status}>
          {STATUS_LABELS[project.status]}
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
                  aria-label={`Open ${project.name} live project in a new tab`}
                >
                  LIVE →
                </a>
              )}
              {github && (
                <a
                  href={github}
                  className={styles.actionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} source code on GitHub in a new tab`}
                >
                  GITHUB →
                </a>
              )}
              {caseStudy && (
                <a
                  href={caseStudy}
                  className={styles.actionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read ${project.name} case study in a new tab`}
                >
                  CASE STUDY →
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </BentoCell>
  );
}
