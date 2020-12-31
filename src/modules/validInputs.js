const validInputs = () => {
	maskPhone('input[name = user_phone]');

	document.addEventListener('input', (event) => {
		let target = event.target;

		if (
			target.matches('input[name = user_message]') ||
			target.matches('input[name = user_name]')
		) {
			target.value = target.value.replace(/[^а-яА-Я.:,!?-\s]+/g, '');
		}
	});
};

export default validInputs;
