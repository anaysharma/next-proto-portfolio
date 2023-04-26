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
			className="absolute inset-0 grid place-items-center overflow-y-auto bg-black"
			transition={{
				layout: { duration: 0.7, ease: cubicBezier(0.3, 0.4, 0, 1) },
			}}
		>
			<div style={{ height: '200vh' }}></div>
			<motion.div
				className="h-60 w-80 bg-yellow-400"
				initial={{ x: 400 }}
				whileInView={{ x: 0 }}
			>
				<div>{content}</div>
			</motion.div>
			<div style={{ height: '200vh' }}></div>
			<motion.div
				className="fixed left-28 top-14 h-px origin-left"
				style={{
					scaleX: scrollYProgress,
					width: 'calc(100% - 440px)',
					background: '#d9dacb',
				}}
			></motion.div>
		</motion.div>
	);
}
