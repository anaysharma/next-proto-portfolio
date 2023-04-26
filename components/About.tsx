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
			{ y: [40, 0], x: [100, 0], opacity: [0, 1] },
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
				className="mx-auto flex flex-col gap-1 p-5 backdrop-blur backdrop-brightness-200"
				style={{
					backgroundImage: 'radial-gradient( #0000 1px, #000 1px )',
					backgroundSize: '4px 4px',
					border: '1px solid black',
					backgroundPosition: '4px 4px',
					height: 218,
					width: 514,
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
					transition={{ duration: 1, delay: 0.6 }}
					className="m-0 bg-black px-4 py-2"
				>
					A very passionate front end dev developing pixel-perfect, User
					friendly, engaging UI and UX for a better Internet.
				</motion.p>
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1, delay: 1 }}
					className="mt-auto flex w-full items-center justify-between gap-4"
				>
					<motion.a
						href="/static/resume.pdf"
						target="#"
						className="mr-auto w-28 rounded-full py-2 text-center text-black"
						style={{ background: '#d9dacb' }}
					>
						Resume
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
				</motion.div>
			</motion.div>

			<motion.button
				onClick={() => setNavlink('work')}
				layoutId="work"
				className="section-btn work w-12 bg-black"
				whileHover={{ scaleY: 1.2 }}
				transition={{ duration: 0.7, ease: cubicBezier(0.3, 0, 0, 1) }}
			></motion.button>

			<motion.button
				onClick={() => setNavlink('skills')}
				layoutId="skills"
				className="section-btn skills w-12 bg-black"
				whileHover={{ scaleY: 1.2 }}
				transition={{ duration: 0.7, ease: cubicBezier(0.3, 0, 0, 1) }}
			></motion.button>

			<motion.button
				onClick={() => setNavlink('contact')}
				layoutId="contact"
				className="section-btn contact w-12 bg-black"
				whileHover={{ scaleY: 1.2 }}
				transition={{ duration: 0.7, ease: cubicBezier(0.3, 0, 0, 1) }}
			></motion.button>
		</div>
	);
}
