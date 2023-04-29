import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import useLoaderTransition from '../hooks/useLoaderTransition';

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// useLoaderTransition;

		if (typeof window !== 'undefined') {
			// window.addEventListener("load", ())
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
	}, []);

	return <Component {...pageProps} />;
}
