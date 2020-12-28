window.addEventListener('DOMContentLoaded', () => {
	('use strict');

	// Timer
	const countTimer = (deadline) => {
		const timerNumbers = document.querySelector('#timer'),
			timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');

		const getTimeremaining = () => {
			const dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor(timeRemaining / 60 / 60);
			return { timeRemaining, hours, minutes, seconds };
		};

		const updateClock = () => {
			const timer = getTimeremaining();

			if (timer.hours < 10) {
				timerHours.textContent = '0' + timer.hours;
			} else {
				timerHours.textContent = timer.hours;
			}

			if (timer.minutes < 10) {
				timerMinutes.textContent = '0' + timer.minutes;
			} else {
				timerMinutes.textContent = timer.minutes;
			}

			if (timer.seconds < 10) {
				timerSeconds.textContent = '0' + timer.seconds;
			} else {
				timerSeconds.textContent = timer.seconds;
			}

			if (timer.timeRemaining <= 0) {
				timerHours.textContent = '00';
				timerMinutes.textContent = '00';
				timerSeconds.textContent = '00';
				timerNumbers.style.color = 'red';
				clearInterval(idInterval);
			}
		};

		const idInterval = setInterval(updateClock, 1000);
	};
	countTimer('31 December 2020');

	//Menu
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
	toggleMenu();

	//Smooth scrolling
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
	smoothScroll();

	//Popup
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
	togglePopup();

	//Tabs
	const tabs = () => {
		const tabHeader = document.querySelector('.service-header'),
			tab = tabHeader.querySelectorAll('.service-header-tab'),
			tabContent = document.querySelectorAll('.service-tab');

		const toggleTabContent = (index) => {
			for (let i = 0; i < tabContent.length; i++) {
				if (index === i) {
					tab[i].classList.add('active');
					tabContent[i].classList.remove('d-none');
				} else {
					tab[i].classList.remove('active');
					tabContent[i].classList.add('d-none');
				}
			}
		};

		tabHeader.addEventListener('click', (event) => {
			let target = event.target;
			target = target.closest('.service-header-tab');

			if (target) {
				tab.forEach((item, i) => {
					if (item === target) {
						toggleTabContent(i);
					}
				});
			}
		});
	};
	tabs();

	//Slider
	const slider = () => {
		const slide = document.querySelectorAll('.portfolio-item'),
			slider = document.querySelector('.portfolio-content'),
			parentDots = document.querySelector('.portfolio-dots');

		const addDots = () => {
			for (let i = 0; i < slide.length; i++) {
				const newDot = document.createElement('li');
				newDot.classList.add('dot');
				parentDots.append(newDot);
				parentDots.firstElementChild.classList.add('dot-active');
			}
		};
		addDots();

		const dot = document.querySelectorAll('.dot');
		let currentSlide = 0,
			interval;

		const prevSlide = (elem, index, strClass) => {
			elem[index].classList.remove(strClass);
		};
		const nextSlide = (elem, index, strClass) => {
			elem[index].classList.add(strClass);
		};

		const autoPlaySlide = () => {
			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');
			currentSlide++;
			if (currentSlide >= slide.length) {
				currentSlide = 0;
			}
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		};

		const startSlide = (time = 3000) => {
			interval = setInterval(autoPlaySlide, time);
		};

		const stopSlide = () => {
			clearInterval(interval);
		};

		slider.addEventListener('click', (event) => {
			event.preventDefault();

			let target = event.target;

			if (!target.matches('.portfolio-btn, .dot')) {
				return;
			}

			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');

			if (target.matches('#arrow-right')) {
				currentSlide++;
			} else if (target.matches('#arrow-left')) {
				currentSlide--;
			} else if (target.matches('.dot')) {
				dot.forEach((elem, index) => {
					if (elem === target) {
						currentSlide = index;
					}
				});
			}

			if (currentSlide >= slide.length) {
				currentSlide = 0;
			}

			if (currentSlide < 0) {
				currentSlide = slide.length - 1;
			}

			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		});

		slider.addEventListener('mouseover', (event) => {
			if (
				event.target.matches('.portfolio-btn') ||
				event.target.matches('.dot')
			) {
				stopSlide();
			}
		});

		slider.addEventListener('mouseout', (event) => {
			if (
				event.target.matches('.portfolio-btn') ||
				event.target.matches('.dot')
			) {
				startSlide(2000);
			}
		});

		startSlide(2000);
	};
	slider();

	//replaceImage
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
	replacePhoto();

	//Calc
	const calc = (price = 100) => {
		const input = document.querySelectorAll('input.calc-item'),
			calcBlock = document.querySelector('.calc-block'),
			calcType = document.querySelector('.calc-type'),
			calcSquare = document.querySelector('.calc-square'),
			calcDay = document.querySelector('.calc-day'),
			calcCount = document.querySelector('.calc-count'),
			totalValue = document.getElementById('total');

		input.forEach((item) => {
			item.addEventListener('input', () => {
				item.value = item.value.replace(/\D/g, '');
			});
		});

		const countSum = () => {
			let total = 0,
				countValue = 1,
				dayValue = 1;
			const typeValue = calcType.options[calcType.selectedIndex].value,
				squareValue = +calcSquare.value;

			if (calcCount.value > 1) {
				countValue += (calcCount.value - 1) / 10;
			}

			if (calcDay.value && calcDay.value < 5) {
				dayValue *= 2;
			} else if (calcDay.value && calcDay.value < 10) {
				dayValue *= 1.5;
			}

			if (typeValue && squareValue) {
				total = price * typeValue * squareValue * countValue * dayValue;
			}

			totalValue.textContent = total;
		};

		calcBlock.addEventListener('change', (event) => {
			const target = event.target;

			if (target.matches('select') || target.matches('input')) {
				countSum();
			}
		});
	};
	calc(100);

	//validate inputs
	const validInputs = () => {
		maskPhone('input[name = user_phone]');

		document.addEventListener('input', (event) => {
			let target = event.target;

			if (
				target.matches('input[name = user_message]') ||
				target.matches('input[name = user_name]')
			) {
				target.value = target.value.replace(/[^а-яА-Я\s]+/g, '');
			}
		});
	};
	validInputs();

	//send-AJAX-form
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
					.then(() => {
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
			return new Promise((resolve, reject) => {
				const request = new XMLHttpRequest();

				request.addEventListener('readystatechange', () => {
					if (request.readyState !== 4) {
						return;
					}
					if (request.status === 200) {
						resolve();
					} else {
						reject(request.status);
					}
				});
				request.open('POST', './server.php');
				request.setRequestHeader('Content-Type', 'application/json');
				request.send(JSON.stringify(body));
			});
		};
	};
	sendForm();
});
