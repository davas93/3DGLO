const smoothScroll = () => {
	const links = document.querySelectorAll('menu>ul>li>a'),
		linkBtn = document.querySelector('main>a[href = "#service-block"');
	let blockID;

	links.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			blockID = item.getAttribute('href');

			document.querySelector(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});
	});

	linkBtn.addEventListener('click', (e) => {
		e.preventDefault();
		blockID = linkBtn.getAttribute('href');

		document.querySelector(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	});
};

export default smoothScroll;
