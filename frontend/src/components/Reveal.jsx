import { motion } from "framer-motion";

// Scroll-triggered reveal wrapper — fade + slight rise + subtle skew.
export const Reveal = ({
  children,
  delay = 0,
  y = 40,
  className = "",
  once = true,
  as = "div",
}) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration: 0.95,
        delay,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      {children}
    </MotionTag>
  );
};

// Signature line-by-line mask rise — for headline moments.
export const MaskReveal = ({ children, delay = 0, className = "" }) => (
  <span className={`mask-line ${className}`}>
    <span style={{ animationDelay: `${delay}s` }}>{children}</span>
  </span>
);

// Stagger container for children.
export const RevealGroup = ({ children, delay = 0, stagger = 0.08, className = "" }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-60px" }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: stagger, delayChildren: delay } },
    }}
  >
    {children}
  </motion.div>
);

export const RevealItem = ({ children, y = 30, className = "" }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y, filter: "blur(6px)" },
      show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] },
      },
    }}
  >
    {children}
  </motion.div>
);
