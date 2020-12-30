const replacePhoto = () => {
	const photo = document.querySelectorAll('.command__photo');
	let src;

	photo.forEach((item) => {
		item.addEventListener('mouseenter', (event) => {
			src = event.target.src;
			event.target.src = event.target.dataset.img;
		});
		item.addEventListener('mouseleave', (event) => {
			event.target.src = src;
		});
	});
};

export default replacePhoto;
