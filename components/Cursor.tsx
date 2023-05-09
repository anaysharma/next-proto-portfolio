import useMousePosition from '../hooks/useCursorPosition';
import useCursorSize from '../hooks/useCursorSize';

import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
	const { x, y } = useMousePosition();

	const cursorX = useMotionValue(-100);
	const cursorY = useMotionValue(-100);

	cursorX.set(x - 5);
	cursorY.set(y - 5);

	const springConfig = { damping: 30, stiffness: 300 };
	const cursorXSpring = useSpring(cursorX, springConfig);
	const cursorYSpring = useSpring(cursorY, springConfig);

	const size = useCursorSize();

	return (
		<motion.div
			className="cursor pointer-events-none fixed left-0 top-0 z-50 aspect-square rounded-full bg-transparent backdrop-invert"
			style={{
				height: 10,
				x: cursorXSpring,
				y: cursorYSpring,
				boxShadow: `0 0 0 ${size}px #e37f6c`,
			}}
			transition={{ duration: 0.6 }}
		></motion.div>
	);
}
