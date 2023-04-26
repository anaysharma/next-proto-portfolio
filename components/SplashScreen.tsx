import { useEffect, useState } from 'react';

export default function SplashScreen(props: { finishLoading: Function }) {
	const { finishLoading } = props;
	const [isMounted, setIsMounted] = useState<Boolean>(false);

	useEffect(() => {
		const timeout = setTimeout(() => setIsMounted(true), 10);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<div
			id="page-loader"
			className="fixed inset-0 z-50 grid place-items-center bg-black"
		>
			<div className="newtons-cradle">
				<div className="newtons-cradle__dot"></div>
				<div className="newtons-cradle__dot"></div>
				<div className="newtons-cradle__dot"></div>
				<div className="newtons-cradle__dot"></div>
			</div>
		</div>
	);
}
