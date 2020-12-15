window.addEventListener('DOMContentLoaded', () => {
	('use strict');

	const countTimer = (deadline) => {
		const welcome = document.querySelector('.welcome'),
			weekday = document.querySelector('.weekday'),
			currentTime = document.querySelector('.current-time'),
			daysLeft = document.querySelector('.days-left'),
			feedbacReport = document.querySelector('.feedback-report');

		const getTime = () => {
			const weekdays = [
					'Воскресенье',
					'Понедельник',
					'Вторник',
					'Среда',
					'Четверг',
					'Пятница',
					'Суббота',
				],
				dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				toDay = weekdays[new Date().getDay()],
				time = new Date().toLocaleTimeString('en');
			timeRemaining = Math.floor(
				(dateStop - dateNow) / 1000 / 60 / 60 / 24
			);
			weekday.textContent = this.toDay;
			return { toDay, timeRemaining, time };
		};

		setInterval(() => {
			const timer = getTime();
			weekday.textContent = timer.toDay;
			currentTime.textContent = timer.time;
			daysLeft.textContent = `${timer.timeRemaining} 
				${getNoun(timer.timeRemaining, 'день', 'дня', 'дней')}`;

			function getNoun(number, one, two, five) {
				let n = Math.abs(number);
				n %= 100;
				if (n >= 5 && n <= 20) {
					return five;
				}
				n %= 10;
				if (n === 1) {
					return one;
				}
				if (n >= 2 && n <= 4) {
					return two;
				}
				return five;
			}
			console.log();
		}, 1000);
	};

	countTimer('16 January 2021');
});
