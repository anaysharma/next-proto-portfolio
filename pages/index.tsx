import { useState } from 'react';
import Head from 'next/head';

import { Abel } from 'next/font/google';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Cursor from '../components/Cursor';
import Image from 'next/image';

const abel = Abel({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
	const [navlink, setNavlink] = useState<string>('home');

	return (
		<>
			<Head>
				<title>Anay Sharma</title>
				<meta name="description" content="Personal website of anay sharma" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/logo.png" />
			</Head>

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
			</main>

			<Cursor />
			<div className="absolute inset-0 -z-50 overflow-hidden">
				<Image
					className="h-full w-full object-cover"
					src="/bg.webp"
					alt="background image"
					width={2048}
					height={1152}
				/>
			</div>
		</>
	);
}
