import { cubicBezier, motion, stagger, useAnimate } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

let mountCount = 0; // allows animation to run on initial mount

export default function About(props: { setNavlink: Function }) {
	const { setNavlink } = props;
	const [scope, animate] = useAnimate();
	const [sectionScope, sectionAnimate] = useAnimate();

	useEffect(() => {
		mountCount += 1;
		animate(
			'.letter',
			{ y: [-40, 0], x: [100, 0], opacity: [0, 1] },
			{
				delay: stagger(0.06, { from: 'first' }),
				duration: 0.6,
				ease: 'circOut',
			}
		);

		let timeout: NodeJS.Timeout;

		if (mountCount <= 1) {
			timeout = setTimeout(() => {
				sectionAnimate(
					'.section-btn',
					{ scaleY: [1, 1.2, 1] },
					{
						delay: stagger(0.2, { from: 'first' }),
						duration: 0.6,
						ease: 'easeOut',
					}
				);
			}, 1000);
		}

		return () => {
			clearTimeout(timeout);
		};
	}, [animate, sectionAnimate]);

	return (
		<div className="flex gap-2" ref={sectionScope}>
			<motion.div
				layoutId="min"
				className="mx-auto flex flex-col gap-1 p-5 backdrop-blur-sm"
				style={{
					backgroundImage: 'radial-gradient( rgba(0, 0, 0) 2px, #0000 2px )',
					backgroundSize: '4px 4px',
					border: '2px solid black',
					backgroundPosition: '2px 2px',
					height: 220,
					width: 520,
				}}
			>
				<div
					ref={scope}
					className="flex h-12 w-min overflow-hidden bg-black px-4 text-3xl uppercase"
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
					className="m-0 bg-black px-4 py-2 opacity-80"
				>
					A very passionate front end dev developing pixel-perfect, User
					friendly, engaging UI and UX for a better Internet.
				</motion.p>
				<div className="mt-auto flex w-full items-center justify-between gap-4">
					<motion.a
						className="mr-auto w-40 rounded-full py-2 text-center text-black"
						style={{ background: '#d9dacb' }}
					>
						Resume PDF
					</motion.a>
					<motion.a
						href="https://github.com/anaysharma"
						target="#"
						className="rounded-full p-2 text-black"
						style={{ background: '#d9dacb' }}
					>
						<Image src="/github.svg" height={20} width={20} alt="github icon" />
					</motion.a>
					<motion.a
						href="https://www.linkedin.com/in/anay-sharma-b3785321a/"
						target="#"
						className="rounded-full p-2 text-black"
						style={{ background: '#d9dacb' }}
					>
						<Image
							src="/linkedin.svg"
							height={20}
							width={20}
							alt="github icon"
						/>
					</motion.a>
					<motion.a
						href="https://leetcode.com/AnaySharma/"
						target="#"
						className="rounded-full p-2 text-black"
						style={{ background: '#d9dacb' }}
					>
						<Image
							src="/leetcode.png"
							height={20}
							width={20}
							alt="github icon"
						/>
					</motion.a>
				</div>
			</motion.div>

			<motion.button
				onClick={() => setNavlink('work')}
				layoutId="work"
				className="section-btn w-12 bg-black"
				whileHover={{ scaleY: 1.2 }}
				transition={{ duration: 0.8, ease: cubicBezier(0.1, 0.7, 0, 1) }}
			></motion.button>

			<motion.button
				onClick={() => setNavlink('skills')}
				layoutId="skills"
				className="section-btn w-12 bg-black"
				whileHover={{ scaleY: 1.2 }}
				transition={{ duration: 0.8, ease: cubicBezier(0.1, 0.7, 0, 1) }}
			></motion.button>

			<motion.button
				onClick={() => setNavlink('contact')}
				layoutId="contact"
				className="section-btn w-12 bg-black"
				whileHover={{ scaleY: 1.2 }}
				transition={{ duration: 0.8, ease: cubicBezier(0.1, 0.7, 0, 1) }}
			></motion.button>
		</div>
	);
}
