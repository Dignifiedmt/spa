import { motion } from 'framer-motion';

const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 }
};

export default function About() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="card">
        <h1>About This Project</h1>
        <p>
          This application was developed as the primary deliverable for the
          Level 2 Front-End Internship task at Codveda Technology. It fulfills
          all key objectives: SPA architecture, route-based navigation,
          global state persistence, and high-fidelity UI/UX design.
        </p>
        <div className="divider">
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Key Features</h3>
          <ul className="feature-list">
            <li>No full-page reloads during navigation</li>
            <li>Dark / Light mode persists across all views</li>
            <li>Accessible semantic HTML structure</li>
            <li>Fully responsive mobile-first layout</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
