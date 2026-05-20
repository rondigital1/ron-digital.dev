import styles from './NowModule.module.css';

const roleFitRows = [
  {
    num: '01',
    title: 'Backend product systems',
    desc: 'Node/TypeScript services, APIs, payments, ledgers, background jobs, and data-intensive workflows.',
    isTarget: false,
  },
  {
    num: '02',
    title: 'Distributed reliability',
    desc: 'Event-driven architecture, queues, retries, failure modes, observability, and production ownership.',
    isTarget: false,
  },
  {
    num: '03',
    title: 'AI-native product engineering',
    desc: 'LangGraph/LangChain agents, structured outputs, orchestration, evaluation loops, and human approval workflows.',
    isTarget: false,
  },
  {
    num: '04',
    title: 'Seeking',
    desc: 'Senior SWE, Backend, Full-Stack, or AI-native product roles at small, ambitious, high-ownership teams.',
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
