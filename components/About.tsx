import { cubicBezier, motion, stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

export default function About(props: { setNavlink: Function }) {
	const { setNavlink } = props;
	const [scope, animate] = useAnimate();

	useEffect(() => {
		animate(
			'.letter',
			{ y: [-40, 0], x: [100, 0], opacity: [0, 1] },
			{
				delay: stagger(0.06, { from: 'first' }),
				duration: 0.6,
				ease: 'circOut',
			}
		);
	}, [animate]);

	return (
		<div className="flex gap-2">
			<motion.div
				layoutId="min"
				className="flex flex-col p-6 mx-auto"
				style={{
					backgroundImage: 'radial-gradient( rgba(0, 0, 0) 2px, #0000 2px )',
					backgroundSize: '4px 4px',
					border: '2px solid black',
					backgroundPosition: '2px 2px',
					height: 228,
					width: 520,
					backdropFilter: 'blur(4px)',
				}}
			>
				<div
					ref={scope}
					className="flex text-3xl overflow-hidden uppercase bg-black w-min h-12 px-4"
				>
					{'Anay Sharma'.split('').map((item, i) => (
						<div
							key={i}
							className="letter my-auto"
							style={item === 'S' ? { paddingLeft: 12 } : { paddingLeft: 1 }}
						>
							{item}
						</div>
					))}
				</div>

				<motion.p
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 1 }}
					className="opacity-80 m-0 bg-black px-4 py-2"
				>
					A very passionate front end dev developing pixel-perfect, User
					friendly, engaging UI and UX for a better Internet.
				</motion.p>

				<motion.button
					type="button"
					className="rounded-full py-2 mt-auto w-40 text-black"
					style={{ background: '#d9dacb' }}
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 1.4 }}
				>
					Resume PDF
				</motion.button>
			</motion.div>

			<motion.button
				onClick={() => setNavlink('work')}
				layoutId="work"
				className="bg-black w-12"
				whileHover={{ scaleY: 1.2 }}
				transition={{ duration: 0.8, ease: cubicBezier(0.1, 0.7, 0, 1) }}
			></motion.button>

			<motion.button
				onClick={() => setNavlink('skills')}
				layoutId="skills"
				className="bg-black w-12"
				whileHover={{ scaleY: 1.2 }}
				transition={{ duration: 0.8, ease: cubicBezier(0.1, 0.7, 0, 1) }}
			></motion.button>

			<motion.button
				onClick={() => setNavlink('contact')}
				layoutId="contact"
				className="bg-black w-12"
				whileHover={{ scaleY: 1.2 }}
				transition={{ duration: 0.8, ease: cubicBezier(0.1, 0.7, 0, 1) }}
			></motion.button>
		</div>
	);
}
