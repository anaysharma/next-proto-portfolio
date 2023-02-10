import { motion, cubicBezier, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Section(props: {
  content: string;
  navlink: string;
  setNavlink: Function;
  id: string;
}) {
  const { content, id } = props;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  return (
    <motion.div
      ref={containerRef}
      layoutId={id}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        margin: "auto",
        background: "black",
        padding: 60,
        display: "grid",
        placeItems: "center",
        overflowY: "auto",
      }}
      transition={{
        layout: { duration: 0.8, ease: cubicBezier(0.3, 0.4, 0, 1) },
      }}
    >
      <div style={{ height: "200vh" }}></div>
      <motion.div
        style={{
          height: 600,
          width: 500,
          border: "1px solid red",
        }}
        initial={{ x: 400 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <div style={{ position: "sticky", top: 20 }}>{content}</div>
      </motion.div>
      <div style={{ height: "200vh" }}></div>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          height: 1,
          width: "calc(100% - 440px)",
          background: "white",
          position: "fixed",
          top: 54,
          left: 100,
          transformOrigin: "left",
        }}
      ></motion.div>
    </motion.div>
  );
}
