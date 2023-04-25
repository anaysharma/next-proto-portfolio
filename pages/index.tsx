import { useState } from 'react';
import Head from 'next/head';
import Section from '../components/Section';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Cursor from '../components/Cursor';

import { Barlow } from 'next/font/google';

const inter = Barlow({ subsets: ['latin'], weight: ['400'] });

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
					inter.className +
					' h-screen items-center justify-center flex flex-col bg-cover'
				}
				style={{ backgroundImage: "url('/bg.png')" }}
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
		</>
	);
}
