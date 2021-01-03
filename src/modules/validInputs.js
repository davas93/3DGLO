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

		if (
			target.matches('input[name = user_name]') &&
			target.value.length >= 2
		) {
			target.style.border = '';
		} else {
			target.style.border = '1px solid red';
		}

		if (
			target.matches('input[name = user_message]') &&
			target.value.length > 0
		) {
			target.style.border = '';
		}

		if (
			target.matches('input[name = user_phone]') &&
			target.value.length >= 15
		) {
			target.style.border = '';
		}

		if (
			target.matches('input[name = user_email]') &&
			target.value.length > 0
		) {
			target.style.border = '';
		}
	});
};

export default validInputs;
