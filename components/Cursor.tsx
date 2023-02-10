import useMousePosition from "../hooks/useCursorPosition";
import useCursorSize from "../hooks/useCursorSize";

export default function Cursor() {
  const { x, y } = useMousePosition();
  const size = useCursorSize();

  return (
    <div
      className="cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: size,
        aspectRatio: 1,
        borderRadius: 999,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        background: "transparent",
        backdropFilter: "invert()",
        pointerEvents: "none",
        outline: "3px solid #e37f6c",
        outlineOffset: (-1 * size) / 2 + 20,
        zIndex: 10,
      }}
    ></div>
  );
}
