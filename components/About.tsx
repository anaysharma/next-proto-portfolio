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
			{ y: [200, 0], opacity: [0, 1] },
			{
				delay: stagger(0.1, { from: 'first' }),
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
		<div
			className="flex h-screen flex-col justify-end gap-2 p-2 md:h-auto md:flex-row"
			ref={sectionScope}
		>
			<div className="mx-auto flex flex-col gap-1 bg-black/80 p-8 backdrop-blur backdrop-saturate-150 md:gap-4">
				<div
					ref={scope}
					className="flex w-min overflow-hidden text-5xl font-bold uppercase"
				>
					{'Anay Sharma'.split('').map((item, i) => (
						<div
							key={i}
							className="letter my-auto text-[#d9dacb]"
							style={item === 'S' ? { paddingLeft: 12 } : { paddingLeft: 1 }}
						>
							{item}
						</div>
					))}
					{/* <Image src="/logo-dark.svg" alt="site logo" /> */}
				</div>

				<motion.p
					initial={{ y: 80, opacity: 0, rotateX: '-40deg' }}
					animate={{ y: 0, opacity: 1, rotateX: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="m-0 md:w-[60ch]"
				>
					A very passionate front end dev developing pixel-perfect, User
					friendly, engaging UI and UX for a better Internet.
				</motion.p>
				<motion.div
					initial={{ y: 60, opacity: 0, rotateX: '-40deg' }}
					animate={{ y: 0, opacity: 1, rotateX: 0 }}
					transition={{ duration: 0.6, delay: 1.2 }}
					className="flex w-full items-center justify-between gap-4 pt-2"
				>
					<motion.a
						href="/static/resume.pdf"
						target="#"
						className="mr-auto rounded-full px-4 py-2 text-center text-black"
						style={{ background: '#d9dacb' }}
						download="file"
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
			</div>

			<motion.button
				onClick={() => setNavlink('work')}
				layoutId="work"
				className="section-btn work h-12 w-full bg-black md:h-auto md:w-16"
				whileHover={{ scaleY: 1.2 }}
				transition={{ duration: 0.6, ease: cubicBezier(0.3, 0, 0, 1) }}
			></motion.button>

			<motion.button
				onClick={() => setNavlink('skills')}
				layoutId="skills"
				className="section-btn skills h-12 w-full bg-black md:h-auto md:w-16"
				whileHover={{ scaleY: 1.2 }}
				transition={{ duration: 0.6, ease: cubicBezier(0.3, 0, 0, 1) }}
			></motion.button>

			<motion.button
				onClick={() => setNavlink('contact')}
				layoutId="contact"
				className="section-btn contact h-12 w-full bg-black md:h-auto md:w-16"
				whileHover={{ scaleY: 1.2 }}
				transition={{ duration: 0.6, ease: cubicBezier(0.3, 0, 0, 1) }}
			></motion.button>
		</div>
	);
}
