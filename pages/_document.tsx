import { Html, Head, Main, NextScript } from 'next/document';
import Image from 'next/image';
import { MotionConfig } from 'framer-motion';

export default function Document() {
	return (
		<Html lang="en" style={{ background: 'black' }}>
			<Head />
			<body className=" overflow-hidden">
				<div
					id="page-loader"
					className="fixed inset-0 z-50 grid place-items-center bg-black"
				>
					<Image src="/oval.svg" alt="loader" height={40} width={40} />
				</div>
				<MotionConfig reducedMotion="user">
					<Main />
				</MotionConfig>
				<NextScript />
			</body>
		</Html>
	);
}
