import { AnimatePresence, motion } from "framer-motion";

export default function ComingSoonModal({ page, onClose }) {
  return (
    <AnimatePresence>
      {page ? (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-card"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="status-pill">Coming soon</div>
            <h3>{page}</h3>
            <p>
              This page is already planned in the structure. For now, the homepage is the
              polished launch-ready page, and this section can be expanded next.
            </p>

            <div className="modal-points">
              <div>
                <strong>Ready next</strong>
                <span>Custom content, forms, and school-specific sections</span>
              </div>
              <div>
                <strong>Design match</strong>
                <span>Same premium style, same motion language, same branding</span>
              </div>
            </div>

            <button className="primary-btn wide-btn" onClick={onClose}>
              Back to homepage
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
