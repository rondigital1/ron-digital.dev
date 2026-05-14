import styles from './NowModule.module.css';

const roleFitRows = [
  {
    num: '01',
    title: 'Backend-heavy product engineering',
    desc: 'Node/TypeScript services, APIs, background jobs, ledgers, and data workflows.',
    isTarget: false,
  },
  {
    num: '02',
    title: 'Distributed systems & reliability',
    desc: 'Queues, retries, failure modes, observability, and production ownership.',
    isTarget: false,
  },
  {
    num: '03',
    title: 'AI-native application engineering',
    desc: 'LangGraph/LangChain workflows, MCP, structured outputs, and agent handoffs.',
    isTarget: false,
  },
  {
    num: '04',
    title: 'Looking for',
    desc: 'Senior SWE / AI Product Engineer roles on small, high-ownership product teams.',
    isTarget: true,
  },
];

export function NowModule() {
  return (
    <section className={styles.module} aria-label="Role fit">
      <div className={styles.head}>
        <span className={styles.live}>
          <span className={styles.dot} aria-hidden />
          Now · Role Fit
        </span>
      </div>
      <p className={styles.intro}>What I'm strongest at — and where I'm aiming next.</p>

      <div className={styles.list}>
        {roleFitRows.map((row) => (
          <div
            key={row.num}
            className={`${styles.item}${row.isTarget ? ` ${styles.itemTarget}` : ''}`}
          >
            <span className={styles.num}>{row.num}</span>
            <span className={styles.body}>
              <span className={styles.itemTitle}>{row.title}</span>
              <span className={styles.desc}>{row.desc}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
