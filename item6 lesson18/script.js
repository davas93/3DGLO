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

		const idInterval = setInterval(() => {
			const timer = getTime(),
				hour = new Date().getHours();

			if (hour >= 5 && hour < 12) {
				welcome.textContent = 'Доброе утро';
			} else if (hour >= 12 && hour < 18) {
				welcome.textContent = 'Добрый день';
			} else if (hour >= 18 && hour < 24) {
				welcome.textContent = 'Добрый вечер';
			} else if (hour >= 0 && hour < 5) {
				welcome.textContent = 'Доброй ночи';
			}

			weekday.textContent = timer.toDay;
			currentTime.textContent = timer.time;

			const getNoun = (number, one, two, five) => {
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
			};

			daysLeft.textContent = `${timer.timeRemaining} 
                ${getNoun(timer.timeRemaining, 'день', 'дня', 'дней')}`;

			if (timer.timeRemaining <= 0) {
				clearInterval(idInterval);
				feedbacReport.textContent = 'C Новым Годом Ура! Ура! Ураааааа!';
			}
		}, 1000);
	};

	countTimer('1 January 2021');
});
