fetch("data.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (days) {
		let container = document.querySelector("[data-chart]");
		let content = "";
		for (let day of days) {
			content += `
      <div class="chart__item">
         <div class="chart__amount | fs-xsmall fw-bold fc-light" data-amount>${day.amount}</div>
         <div class="chart__bar" style="height:calc(${day.amount}px * 2.865)"></div>
         <div class="chart__day | fs-xsmall fc-medium">${day.day}</div>
      </div>`;
		}

		container.innerHTML = content;

		const weekDays = document.querySelectorAll(".chart__day");
		const date = new Date();
		const today = date.toString().toLowerCase().split(" ")[0];

		weekDays.forEach(weekday => {
			if (weekday.innerText === today) {
				weekday.previousElementSibling.style.background = "var(--clr-primary-accent)";
			}
		});
	});
