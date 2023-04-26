import useMousePosition from '../hooks/useCursorPosition';
import useCursorSize from '../hooks/useCursorSize';

export default function Cursor() {
	const { x, y } = useMousePosition();
	const size = useCursorSize();

	return (
		<div
			className="cursor pointer-events-none fixed left-0 top-0 z-50 aspect-square rounded-full bg-transparent backdrop-invert"
			style={{
				height: size,
				transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
				outline: '3px solid #e37f6c',
				outlineOffset: (-1 * size) / 2 + 15,
			}}
		></div>
	);
}
