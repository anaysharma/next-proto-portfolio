import { motion, stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

export default function Navbar(props: {
	currentLink: string;
	setCurrentLink: Function;
}) {
	const { currentLink, setCurrentLink } = props;
	const navItems = ['home', 'work', 'skills', 'contact'];
	const [scope, animate] = useAnimate();

	useEffect(() => {
		setTimeout(() => {
			animate(
				'li',
				{ y: [-50, 0], opacity: [0, 1] },
				{ delay: stagger(0.1), duration: 0.5 }
			);
		}, 500);
	}, [animate]);

	return (
		<motion.ul
			ref={scope}
			className={'fixed left-9 top-9 z-10 m-0 flex gap-1 p-0'}
			style={{ width: 'calc(100vw - 5rem)' }}
		>
			{navItems.map((item, index) => (
				<li
					key={index}
					onClick={() => setCurrentLink(item)}
					className="relative list-none p-2 opacity-0"
					style={{ marginRight: index === 0 ? 'auto' : 0 }}
				>
					<motion.span
						className="relative z-10 p-2 mix-blend-exclusion"
						style={{ color: currentLink === item ? 'white' : '#d9dacb' }}
					>
						{index === 0 ? String.fromCharCode(0x2715) : item}
					</motion.span>
					{currentLink === item && (
						<motion.div
							layoutId="navlink-bg"
							className="absolute inset-0 z-0 rounded-full"
							style={{ background: '#d9dacb' }}
						></motion.div>
					)}
				</li>
			))}
		</motion.ul>
	);
}
