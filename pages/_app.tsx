import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const loader = document.getElementById('page-loader');

			document.body.style.opacity = '1';
			document.body.classList.add('rendered');

			if (loader) {
				loader.classList.add('loaded');
				setTimeout(() => {
					loader.style.display = 'none';
				}, 1000);
			}
		}
	}, []);

	return <Component {...pageProps} />;
}
