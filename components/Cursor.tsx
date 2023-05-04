import useMousePosition from '../hooks/useCursorPosition';
import useCursorSize from '../hooks/useCursorSize';

import { motion } from 'framer-motion';

export default function Cursor() {
	const { x, y } = useMousePosition();
	const size = useCursorSize();

	return (
		<motion.div
			className="cursor pointer-events-none fixed left-0 top-0 z-50 aspect-square rounded-full bg-transparent backdrop-invert"
			style={{
				height: 10,
				x: x - 5,
				y: y - 5,
				boxShadow: `0 0 0 ${size}px #e37f6c`,
			}}
			transition={{ duration: 0.6 }}
		></motion.div>
	);
}
