import { motion } from 'framer-motion';

const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 }
};

export default function Home() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="card">
        <h1>Dashboard</h1>
        <p>
          Welcome to the Codveda Single Page Application. This interface
          demonstrates modern React practices including client-side routing,
          persistent global state management, and seamless page transitions.
        </p>
        <div className="tags-container">
          <span className="tag tag-accent">React Router v6</span>
          <span className="tag tag-outline">Context API</span>
          <span className="tag tag-outline">Framer Motion</span>
        </div>
      </div>
    </motion.div>
  );
}
