import { useState } from 'react';
import Head from 'next/head';
import Section from '../components/Section';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Cursor from '../components/Cursor';

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
				style={{
					background: 'black',
					height: '100vh',
					color: 'white',
					alignItems: 'center',
					justifyContent: 'center',
					display: 'flex',
					flexDirection: 'column',
					backgroundImage: "url('/bg.webp')",
					backgroundSize: 'cover',
				}}
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
