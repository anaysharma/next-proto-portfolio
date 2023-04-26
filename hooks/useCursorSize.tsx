import { useEffect, useState } from 'react';

export default function useCursorSize() {
	const [size, setSize] = useState(12);

	useEffect(() => {
		const shrink = () => setSize(6);
		const reset = () => setSize(12);
		document.addEventListener('mousedown', shrink);
		document.addEventListener('mouseup', reset);

		return () => {
			document.removeEventListener('mousedown', shrink);
			document.removeEventListener('mouseup', reset);
		};
	}, []);

	return size;
}
