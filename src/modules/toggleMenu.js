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
			target.closest('menu>ul>li>a')
		) {
			handlerMenu();
		} else if (!target.closest('.active-menu')) {
			menu.classList.remove('active-menu');
		}
	});
};

export default toggleMenu;
