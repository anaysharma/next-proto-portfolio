import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function Cursor() {
	const cursorX = useMotionValue(-100);
	const cursorY = useMotionValue(-100);
	const size = useMotionValue(1);

	const scaleSpringConfig = { damping: 10, stiffness: 600 };
	const sizeSpring = useSpring(size, scaleSpringConfig);

	useEffect(() => {
		const shrink = () => size.set(2);
		const reset = () => size.set(1);
		const mouseMoveHandler = (event: MouseEvent) => {
			const { clientX, clientY } = event;
			cursorX.set(clientX - 5);
			cursorY.set(clientY - 5);
		};

		document.addEventListener('mousemove', mouseMoveHandler);
		document.addEventListener('mousedown', shrink);
		document.addEventListener('mouseup', reset);

		return () => {
			document.removeEventListener('mousemove', mouseMoveHandler);
			document.removeEventListener('mousedown', shrink);
			document.removeEventListener('mouseup', reset);
		};
	}, [cursorX, cursorY, size]);

	console.log('Render');

	return (
		<motion.div
			className="cursor pointer-events-none fixed left-0 top-0 z-50 aspect-square rounded-full bg-transparent backdrop-invert"
			style={{
				height: 10,
				x: cursorX,
				y: cursorY,
				scale: sizeSpring,
			}}
			transition={{ duration: 0.6 }}
		></motion.div>
	);
}
