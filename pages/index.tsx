import { useEffect, useState } from 'react';
import Head from 'next/head';

import { Abel } from 'next/font/google';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Cursor from '../components/Cursor';

import { MotionConfig } from 'framer-motion';

import useDarkmode from '../hooks/useDarkMode';
import Image from 'next/image';

const abel = Abel({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
	const [navlink, setNavlink] = useState<string>('home');
	const [imageLoaded, setImageLoaded] = useState(false);
	useEffect(() => {
		if (imageLoaded) {
			const loader = document.getElementById('page-loader');

			document.body.style.opacity = '1';
			document.body.classList.add('rendered');

			if (loader) {
				loader.classList.add('loaded');
				setTimeout(() => {
					loader.remove();
				}, 1000);
			}
		}
	}, [imageLoaded]);

	return (
		<>
			<Head>
				<title>Anay Sharma</title>
				<meta name="description" content="Personal website of anay sharma" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					rel="icon"
					href={useDarkmode() ? '/logo-dark.svg' : '/logo.svg'}
				/>
			</Head>
			<MotionConfig transition={{ duration: 0.3 }} reducedMotion="user">
				<main
					className={
						abel.className +
						' relative flex h-screen flex-col items-center justify-center bg-cover'
					}
				>
					{navlink === 'home' && <About setNavlink={setNavlink} />}

					{navlink !== 'home' && (
						<Navbar currentLink={navlink} setCurrentLink={setNavlink} />
					)}

					{navlink === 'contact' && (
						<Section
							content="contact"
							navlink={navlink}
							setNavlink={setNavlink}
							id="contact"
						/>
					)}

					{navlink === 'work' && (
						<Section
							content="work"
							navlink={navlink}
							setNavlink={setNavlink}
							id="work"
						/>
					)}

					{navlink === 'skills' && (
						<Section
							content="skills"
							navlink={navlink}
							setNavlink={setNavlink}
							id="skills"
						/>
					)}
					<div className="background-image absolute inset-0 -z-10 grid place-items-center overflow-hidden">
						<Image
							priority={true}
							className="absolute bottom-0"
							src="/bg.webp"
							height={1152}
							width={2048}
							alt="background image"
							onLoad={() => setImageLoaded(true)}
						/>
					</div>
				</main>
			</MotionConfig>
			<Cursor />
		</>
	);
}
