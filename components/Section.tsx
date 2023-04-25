import { motion, cubicBezier, useScroll } from 'framer-motion';
import { useRef } from 'react';

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
			className="absolute inset-0 bg-black grid place-items-center overflow-y-auto"
			transition={{
				layout: { duration: 0.8, ease: cubicBezier(0.3, 0.4, 0, 1) },
			}}
		>
			<div style={{ height: '200vh' }}></div>
			<motion.div
				className="h-3/4 w-80 border-red-600"
				initial={{ x: 400 }}
				whileInView={{ x: 0 }}
				transition={{ duration: 1 }}
			>
				<div>{content}</div>
			</motion.div>
			<div style={{ height: '200vh' }}></div>
			<motion.div
				className="h-px fixed top-14 left-28 origin-left"
				style={{
					scaleX: scrollYProgress,
					width: 'calc(100% - 440px)',
					background: '#d9dacb',
				}}
			></motion.div>
		</motion.div>
	);
}
