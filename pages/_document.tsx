import { Html, Head, Main, NextScript } from 'next/document';
import Image from 'next/image';

export default function Document() {
	return (
		<Html lang="en" style={{ background: 'black' }}>
			<Head />
			<body className=" overflow-hidden">
				<div id="page-loader" className="fixed inset-0 z-50 bg-black">
					<div className="absolute right-7 top-7">
						<Image src="/oval.svg" alt="loader" height={20} width={20} />
					</div>
				</div>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
