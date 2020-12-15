window.addEventListener('DOMContentLoaded', () => {
	'use strict';

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

	countTimer('18 December 2020');
});
