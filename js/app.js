const adviceId = document.getElementById('advice-num');
const adviceText = document.getElementById('advice-text');
const diceBtn = document.getElementById('dice-btn');
const URL = 'https://api.adviceslip.com/advice';
// run the advice quote as soon as the page loads
// fetch the api advice

window.onload = runAdvice;

diceBtn.addEventListener('click', () => {
	runAdvice();
});

async function runAdvice() {
	fetch(URL)
		.then((response) => response.json())
		.then((data) => data.slip)
		.then((data) => {
			adviceText.textContent = data.advice;
			adviceId.textContent = data.id;
		})
		.catch((error) => {
			alert.error(`Error: `, error);
		});
}
