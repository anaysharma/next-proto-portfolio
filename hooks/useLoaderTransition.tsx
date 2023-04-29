export default function useLoaderTransition() {
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
}
