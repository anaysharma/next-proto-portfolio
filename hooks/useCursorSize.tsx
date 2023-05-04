import { useEffect, useState } from 'react';

export default function useCursorSize() {
	const [size, setSize] = useState(0);

	useEffect(() => {
		const shrink = () => setSize(12);
		const reset = () => setSize(0);
		document.addEventListener('mousedown', shrink);
		document.addEventListener('mouseup', reset);

		return () => {
			document.removeEventListener('mousedown', shrink);
			document.removeEventListener('mouseup', reset);
		};
	}, []);

	return size;
}
