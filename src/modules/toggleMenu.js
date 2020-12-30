const toggleMenu = () => {
	const menu = document.querySelector('menu');

	const handlerMenu = () => {
		menu.classList.toggle('active-menu');
	};

	document.addEventListener('click', (event) => {
		let target = event.target;

		if (
			target.closest('.menu') ||
			target.matches('.close-btn') ||
			target.closest('menu>ul>li')
		) {
			handlerMenu();
		} else if (!target.matches('.active-menu')) {
			menu.classList.remove('active-menu');
		}
	});
};

export default toggleMenu;
