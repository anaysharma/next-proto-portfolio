import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function Navbar(props: {
  currentLink: string;
  setCurrentLink: Function;
}) {
  const { currentLink, setCurrentLink } = props;
  const navItems = ["home", "work", "skills", "contact"];
  const [scope, animate] = useAnimate();

  useEffect(() => {
    setTimeout(() => {
      animate(
        "li",
        { y: [-40, 0], opacity: [0, 1] },
        { delay: stagger(0.1), duration: 0.6 }
      );
    }, 400);
  }, [animate]);

  return (
    <motion.ul
      ref={scope}
      style={{
        display: "flex",
        padding: 0,
        margin: 0,
        gap: 2,
        position: "fixed",
        zIndex: 2,
        top: "2rem",
        left: "2rem",
        width: "calc(100vw - 5rem)",
      }}
    >
      {navItems.map((item, index) => (
        <li
          key={index}
          onClick={() => setCurrentLink(item)}
          style={{
            color: "white",
            position: "relative",
            listStyle: "none",
            paddingBlock: 10,
            paddingInline: 10,
            opacity: 0,
            marginRight: index === 0 ? "auto" : 0,
          }}
        >
          <motion.span
            style={{
              mixBlendMode: "exclusion",
              position: "relative",
              zIndex: 1,
              paddingBlock: 10,
              paddingInline: 10,
            }}
          >
            {index === 0 ? String.fromCharCode(0x2716) : item}
          </motion.span>
          {currentLink === item && (
            <motion.div
              layoutId="navlink-bg"
              style={{
                position: "absolute",
                inset: 0,
                background: "white",
                borderRadius: 999,
              }}
            ></motion.div>
          )}
        </li>
      ))}
    </motion.ul>
  );
}
