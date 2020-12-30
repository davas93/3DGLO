const sendForm = () => {
	const errorMessage = `<svg
			class="checkmark error"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 52 52"
		>
			<circle
				class="checkmark_circle_error"
				cx="26"
				cy="26"
				r="25"
				fill="none"
			/>
			<path
				class="checkmark_check"
				stroke-linecap="round"
				fill="none"
				d="M16 16 36 36 M36 16 16 36
"
			/>
		</svg>
		<span>Упс! Что-то пошло не так :(</span>`,
		loadMessage = `<div class="lds-ring">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div><br></br>
		<span>Пожалуйста, подождите...</span>`,
		successMessage = `<svg
			class="checkmark success"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 52 52"
		>
			<circle
				class="checkmark_circle_success"
				cx="26"
				cy="26"
				r="25"
				fill="none"
			/>
			<path
				class="checkmark_check"
				fill="none"
				d="M14.1 27.2l7.1 7.2 16.7-16.8"
				stroke-linecap="round"
			/>
		</svg>
		<span>Cпасибо за обращение! Мы скоро с Вами свяжемся ;)</span>`;

	const statusMessage = document.createElement('div');
	statusMessage.style.color = '#FFFFFF';

	document.addEventListener('submit', (event) => {
		event.preventDefault();
		let target = event.target;

		if (
			target.matches('#form1') ||
			target.matches('#form2') ||
			target.matches('#form3')
		) {
			const input = target.querySelectorAll('input');

			target.appendChild(statusMessage);
			statusMessage.innerHTML = loadMessage;

			const formData = new FormData(target);
			let body = {};

			formData.forEach((val, key) => {
				body[key] = val;
			});
			postData(body)
				.then((response) => {
					if (response.status !== 200) {
						throw new Error('status network not 200');
					}

					statusMessage.innerHTML = successMessage;
					setTimeout(() => {
						statusMessage.remove();
					}, 5000);
				})
				.catch((error) => {
					statusMessage.innerHTML = errorMessage;
					console.error(error);
					setTimeout(() => {
						statusMessage.remove();
					}, 5000);
				});
			input.forEach((item) => {
				item.value = '';
			});
		} else {
			return;
		}
	});

	const postData = (body) => {
		return fetch('./server.php', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		});
	};
};

export default sendForm;
