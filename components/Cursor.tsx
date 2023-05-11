import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function Cursor() {
	const cursorX = useMotionValue(-100);
	const cursorY = useMotionValue(-100);
	const size = useMotionValue(1);

	const scaleSpringConfig = { damping: 10, stiffness: 600 };
	const cursorSpringConfig = { damping: 30, stiffness: 300 };
	const sizeSpring = useSpring(size, scaleSpringConfig);

	const cursorXSpring = useSpring(cursorX, cursorSpringConfig);
	const cursorYSpring = useSpring(cursorY, cursorSpringConfig);

	useEffect(() => {
		const shrink = () => size.set(2);
		const reset = () => size.set(1);
		const mouseLeaveHandler = () => {
			cursorX.set(-100);
			cursorY.set(-100);
		};
		const mouseMoveHandler = (event: MouseEvent) => {
			const { clientX, clientY } = event;
			cursorX.set(clientX - 5);
			cursorY.set(clientY - 5);
		};

		document.addEventListener('mousemove', mouseMoveHandler);
		document.addEventListener('mousedown', shrink);
		document.addEventListener('mouseup', reset);
		document.addEventListener('mouseleave', mouseLeaveHandler);

		return () => {
			document.removeEventListener('mousemove', mouseMoveHandler);
			document.removeEventListener('mousedown', shrink);
			document.removeEventListener('mouseup', reset);
			document.removeEventListener('mouseleave', mouseLeaveHandler);
		};
	}, [cursorX, cursorY, size]);

	console.log('Render');

	return (
		<motion.div
			className="cursor pointer-events-none fixed left-0 top-0 z-50 aspect-square rounded-full bg-transparent backdrop-invert"
			style={{
				height: 10,
				x: cursorXSpring,
				y: cursorYSpring,
				scale: sizeSpring,
			}}
			transition={{ duration: 0.6 }}
		></motion.div>
	);
}
