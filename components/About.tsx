import { cubicBezier, motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function About(props: { setNavlink: Function }) {
  const { setNavlink } = props;
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".letter",
      { y: [-40, 0], x: [100, 0], opacity: [0, 1] },
      {
        delay: stagger(0.06, { from: "first" }),
        duration: 0.6,
        ease: "circOut",
      }
    );
  }, [animate]);

  return (
    <div style={{ display: "flex", gap: 10, width: "64ch" }}>
      <motion.div
        layoutId="min"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 30,
          gap: 10,
          marginInline: "auto",
          backgroundImage: "radial-gradient( rgba(0, 0, 0) 2px, #0000 2px )",
          backgroundSize: "4px 4px",
          border: "2px solid black",
          backgroundPosition: "2px 2px",
          backdropFilter: "blur(8px)",
          width: 600,
          height: 228,
        }}
      >
        <div
          ref={scope}
          style={{
            display: "flex",
            fontSize: 30,
            overflow: "hidden",
            textTransform: "uppercase",
            textShadow: "0 0 3px black",
            background: "black",
            width: "fit-content",
            paddingInline: 10,
          }}
        >
          {"Anay Sharma".split("").map((item, i) => (
            <div
              key={i}
              className="letter"
              style={item === "S" ? { paddingLeft: 12 } : { paddingLeft: 1 }}
            >
              {item}
            </div>
          ))}
        </div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          style={{
            opacity: 0.8,
            marginTop: 0,
            background: "black",
            width: "fit-content",
            paddingInline: 10,
            paddingBlock: 7,
            margin: 0,
          }}
        >
          A very passionate front end dev developing pixel-perfect, User
          friendly, engaging UI and UX for a better Internet.
        </motion.p>

        <motion.button
          type="button"
          style={{
            border: 0,
            background: "white",
            borderRadius: 999,
            paddingInline: 20,
            paddingBlock: 10,
            font: "inherit",
            width: "fit-content",
            margin: 0,
          }}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          Resume PDF
        </motion.button>
      </motion.div>

      <motion.div
        onClick={() => setNavlink("work")}
        layoutId="work"
        style={{ background: "black", width: 50 }}
        whileHover={{ scaleY: 1.2 }}
        transition={{ duration: 0.8, ease: cubicBezier(0.1, 0.7, 0, 1) }}
      ></motion.div>

      <motion.div
        onClick={() => setNavlink("skills")}
        layoutId="skills"
        style={{ background: "black", width: 50 }}
        whileHover={{ scaleY: 1.2 }}
        transition={{ duration: 0.8, ease: cubicBezier(0.1, 0.7, 0, 1) }}
      ></motion.div>

      <motion.div
        onClick={() => setNavlink("contact")}
        layoutId="contact"
        style={{ background: "black", width: 50 }}
        whileHover={{ scaleY: 1.2 }}
        transition={{ duration: 0.8, ease: cubicBezier(0.1, 0.7, 0, 1) }}
      ></motion.div>
    </div>
  );
}
