import useMousePosition from '../hooks/useCursorPosition';
import useCursorSize from '../hooks/useCursorSize';

export default function Cursor() {
	const { x, y } = useMousePosition();
	const size = useCursorSize();

	return (
		<div
			className="cursor fixed top-0 left-0 rounded-full bg-transparent pointer-events-none z-50"
			style={{
				height: size,
				aspectRatio: 1,
				transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
				backdropFilter: 'invert()',
				outline: '3px solid #e37f6c',
				outlineOffset: (-1 * size) / 2 + 20,
			}}
		></div>
	);
}
