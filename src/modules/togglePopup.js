const togglePopup = () => {
	const popup = document.querySelector('.popup'),
		popupBtns = document.querySelectorAll('.popup-btn'),
		popupContent = document.querySelector('.popup-content');
	let count = -500;

	const animatePopup = () => {
		if (window.outerWidth >= 768) {
			popupContent.style.transform = `translateX(${count}px)`;
			count += 20;
			if (count < 0) {
				requestAnimationFrame(animatePopup);
			} else {
				count = -500;
				cancelAnimationFrame(animatePopup);
			}
		}
	};

	popupBtns.forEach((elem) => {
		elem.addEventListener('click', () => {
			popup.style.display = 'block';
			requestAnimationFrame(animatePopup);
		});
	});

	popup.addEventListener('click', (event) => {
		let target = event.target;

		if (target.classList.contains('popup-close')) {
			popup.style.display = 'none';
		} else {
			target = target.closest('.popup-content');

			if (!target) {
				popup.style.display = 'none';
			}
		}
	});
};

export default togglePopup;
