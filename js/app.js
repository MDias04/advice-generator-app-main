const adviceId = document.getElementById('advice-num');
const adviceText = document.getElementById('advice-text');
const diceBtn = document.getElementById('dice-btn');

// run the advice quote as soon as the page loads
// fetch the api advice

window.onload = runAdvice;

diceBtn.addEventListener('click', () => {
	runAdvice();
});

async function runAdvice() {
	fetch('https://api.adviceslip.com/advice')
		.then((response) => response.json())
		.then((data) => data.slip)
		.then((data) => {
			console.log(data.advice);
			console.log(data.id);
			adviceText.textContent = data.advice;
			adviceId.textContent = data.id;
		})
		.catch((error) => {
			alert.error(`Error: `, error);
		});
}
