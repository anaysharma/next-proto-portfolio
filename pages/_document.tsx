import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<div
					id="page-loader"
					className="fixed inset-0 bg-black z-50 grid place-items-center"
				>
					<div className="newtons-cradle">
						<div className="newtons-cradle__dot"></div>
						<div className="newtons-cradle__dot"></div>
						<div className="newtons-cradle__dot"></div>
						<div className="newtons-cradle__dot"></div>
					</div>
				</div>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
